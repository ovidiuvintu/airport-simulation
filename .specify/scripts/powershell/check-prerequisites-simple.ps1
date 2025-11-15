param(
    [switch]$Json
)

$ErrorActionPreference = 'Stop'

$root = Resolve-Path -LiteralPath .
$specs = Join-Path $root.Path 'specs'
if (-not (Test-Path $specs)) { Write-Error "Specs folder not found"; exit 1 }
$feat = Get-ChildItem -Path $specs -Directory | Where-Object { Test-Path (Join-Path $_.FullName 'spec.md') } | Sort-Object Name | Select-Object -First 1
if (-not $feat) { Write-Error "No feature dir with spec.md found"; exit 1 }
$featPath = $feat.FullName
$available = @()
foreach ($f in @('spec.md','plan.md','tasks.md')) { if (Test-Path (Join-Path $featPath $f)) { $available += $f } }
$result = @{ FEATURE_DIR = $featPath; AVAILABLE_DOCS = $available }
if ($Json) { $result | ConvertTo-Json -Depth 5 } else { $result | Format-List }
exit 0
