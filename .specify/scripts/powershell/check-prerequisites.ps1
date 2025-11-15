param(
    [switch]$Json,
    [switch]$RequireTasks,
    [switch]$IncludeTasks
)

$ErrorActionPreference = 'Stop'

try {
    $root = Resolve-Path -LiteralPath . -ErrorAction Stop
} catch {
    Write-Error "Cannot resolve repository root path"
    exit 1
}

$specsPath = Join-Path $root.Path 'specs'
if (-not (Test-Path $specsPath)) {
    Write-Error "Specs folder not found: $specsPath"
    exit 1
}

$featureDirs = Get-ChildItem -Path $specsPath -Directory -ErrorAction SilentlyContinue | Sort-Object Name
if (-not $featureDirs -or $featureDirs.Count -eq 0) {
    Write-Error "No feature directories found under specs"
    exit 1
}

# Pick the first feature dir containing spec.md (stable deterministic ordering)
$candidate = $featureDirs | Where-Object { Test-Path (Join-Path $_.FullName 'spec.md') } | Select-Object -First 1
if (-not $candidate) {
    Write-Error "No feature directory containing spec.md found under specs"
    exit 1
}

$featureDir = $candidate.FullName
$featureSpec = Join-Path $featureDir 'spec.md'
$implPlan = Join-Path $featureDir 'plan.md'
$tasksFile = Join-Path $featureDir 'tasks.md'

if ($RequireTasks -and -not (Test-Path $tasksFile)) {
    Write-Error "tasks.md is required but not present in $featureDir"
    exit 1
}

$available = @()
foreach ($f in @('spec.md','plan.md','tasks.md')) {
    if (Test-Path (Join-Path $featureDir $f)) { $available += $f }
}

$result = [PSCustomObject]@{ FEATURE_DIR = $featureDir; FEATURE_SPEC = $featureSpec; IMPL_PLAN = $implPlan; TASKS = $tasksFile; AVAILABLE_DOCS = $available }

if ($Json) {
    $result | ConvertTo-Json -Depth 6 -Compress
} else {
    Write-Output "FEATURE_DIR: $($result.FEATURE_DIR)"
    Write-Output "AVAILABLE_DOCS: $($result.AVAILABLE_DOCS -join ', ')"
}

exit 0

param(
    [switch]$Json,
    #!/usr/bin/env pwsh
    [CmdletBinding()]
    param(
        [switch]$Json,
        [switch]$RequireTasks,
        [switch]$IncludeTasks,
        [switch]$PathsOnly,
        [switch]$Help
    )

    $ErrorActionPreference = 'Stop'

    if ($Help) {
        Write-Output "Usage: check-prerequisites.ps1 -Json -RequireTasks -IncludeTasks"
        exit 0
    }

    try {
        $root = Resolve-Path -LiteralPath . -ErrorAction Stop
    } catch {
        Write-Error "Cannot resolve repository root path"
        exit 1
    }

    $specsPath = Join-Path $root.Path 'specs'
    if (-not (Test-Path $specsPath)) {
        Write-Error "Specs folder not found: $specsPath"
        exit 1
    }

    $featureDirs = Get-ChildItem -Path $specsPath -Directory -ErrorAction SilentlyContinue | Sort-Object Name
    if (-not $featureDirs -or $featureDirs.Count -eq 0) {
        Write-Error "No feature directories found under specs"
        exit 1
    }

    # Pick the first feature dir containing spec.md (stable deterministic ordering)
    $candidate = $featureDirs | Where-Object { Test-Path (Join-Path $_.FullName 'spec.md') } | Select-Object -First 1
    if (-not $candidate) {
        Write-Error "No feature directory containing spec.md found under specs"
        exit 1
    }

    $featureDir = $candidate.FullName
    $featureSpec = Join-Path $featureDir 'spec.md'
    $implPlan = Join-Path $featureDir 'plan.md'
    $tasksFile = Join-Path $featureDir 'tasks.md'

    if ($RequireTasks -and -not (Test-Path $tasksFile)) {
        Write-Error "tasks.md is required but not present in $featureDir"
        exit 1
    }

    $available = @()
    foreach ($f in @('spec.md','plan.md','tasks.md')) {
        if (Test-Path (Join-Path $featureDir $f)) { $available += $f }
    }

    $result = [PSCustomObject]@{ FEATURE_DIR = $featureDir; FEATURE_SPEC = $featureSpec; IMPL_PLAN = $implPlan; TASKS = $tasksFile; AVAILABLE_DOCS = $available }

    if ($Json) {
        $result | ConvertTo-Json -Depth 6 -Compress
    } else {
        Write-Output "FEATURE_DIR: $($result.FEATURE_DIR)"
        Write-Output "AVAILABLE_DOCS: $($result.AVAILABLE_DOCS -join ', ')"
    }

    exit 0
}
