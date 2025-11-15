param(
    [string]$RepoRoot = (Resolve-Path -LiteralPath .).Path,
    [switch]$Json
)

$ErrorActionPreference = 'Stop'

Write-Output "Running Constitution Check (conservative mode): scanning API files for persistence entity usages..."

# Helper: read all .cs files under src
$srcPath = Join-Path $RepoRoot 'src'
if (-not (Test-Path $srcPath)) {
    Write-Error "Source folder not found: $srcPath"
    exit 2
}

# Find candidate entity class names: files under any 'Entities' folder or classes inheriting BaseEntity
$entityFiles = Get-ChildItem -Path $srcPath -Recurse -Include *.cs -ErrorAction SilentlyContinue | Where-Object { $_.FullName -match "\\Entities\\" }

# Also include files that declare classes inheriting BaseEntity
$allCs = Get-ChildItem -Path $srcPath -Recurse -Include *.cs -ErrorAction SilentlyContinue
$inherited = @()
foreach ($f in $allCs) {
    $content = Get-Content -Raw -LiteralPath $f.FullName -ErrorAction SilentlyContinue
    if ($content -match ":\s*BaseEntity" -or $content -match ":\s*BaseEntity<") { $inherited += $f }
}

$entityFiles = ($entityFiles + $inherited) | Select-Object -Unique

$entityNames = @()
foreach ($ef in $entityFiles) {
    $text = Get-Content -LiteralPath $ef.FullName -Raw -ErrorAction SilentlyContinue
    $matches = [regex]::Matches($text, '\bclass\s+([A-Za-z0-9_]+)')
    foreach ($m in $matches) { $entityNames += $m.Groups[1].Value }
}

# Fallback common domain names if none discovered
if (-not $entityNames -or $entityNames.Count -eq 0) {
    $entityNames = @('Airport','Gate','Runway','Taxiway','Terminal')
}

$entityNames = $entityNames | Sort-Object -Unique

Write-Output "Detected entity candidates: $($entityNames -join ', ')"

# Scan API files
$apiFiles = Get-ChildItem -Path $srcPath -Recurse -Include *.cs -ErrorAction SilentlyContinue | Where-Object { $_.FullName -match "\\Apis\\" }

$violations = @()
foreach ($f in $apiFiles) {
    $lines = Get-Content -LiteralPath $f.FullName -ErrorAction SilentlyContinue
    for ($i=0; $i -lt $lines.Count; $i++) {
        $line = $lines[$i]
        # Strip string literals and single-line comments to reduce false positives
        $stripped = $line -replace '"[^"\\]*(?:\\.[^"\\]*)*"', '' -replace "'[^'\\]*(?:\\.[^'\\]*)*'", '' -replace '//.*', ''
        foreach ($ename in $entityNames) {
            # match word boundary to reduce false positives
            if ($stripped -match "\b$ename\b") {
                # Quick filters to reduce noise:
                # 1) ignore if the matched word is part of an identifier that contains 'Dto' (e.g., CreateAirportDto)
                $wordMatch = [regex]::Match($stripped, "[A-Za-z0-9_]*$ename[A-Za-z0-9_]*")
                if ($wordMatch.Success -and $wordMatch.Value -match "Dto") { continue }

                # 2) ignore common API decoration lines or method signatures (Task<, Map, WithSummary, WithDescription)
                if ($stripped -match "\bTask<|\bMap|WithSummary|WithDescription|WithTags|WithName|namespace\b") { continue }

                # 3) ignore if the line contains a lowercase variant of the entity name (likely a variable/param), e.g., 'airport'
                $lower = $ename.ToLower()
                if ($stripped -match "\b$lower\b") { continue }

                # 4) ignore if the full word surrounding match starts with lowercase (likely camelCase identifier)
                if ($wordMatch.Success) {
                    $firstChar = $wordMatch.Value.Substring(0,1)
                    if ($firstChar -cmatch '[a-z]') { continue }
                }

                $violations += [PSCustomObject]@{ File = $f.FullName; Line = $i+1; Entity = $ename; Snippet = $line.Trim() }
            }
        }
    }
}

if ($Json) {
    @{ Violations = $violations; Count = $violations.Count } | ConvertTo-Json -Depth 5
} else {
    if ($violations.Count -eq 0) {
        Write-Output "No direct entity usages found in API files. Constitution check passed."
        exit 0
    } else {
        Write-Output "Constitution violations detected: $($violations.Count) occurrences"
        foreach ($v in $violations) {
            Write-Output "File: $($v.File) (line $($v.Line)) -> $($v.Entity): $($v.Snippet)"
        }
        exit 3
    }
}
