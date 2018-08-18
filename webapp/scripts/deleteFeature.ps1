param ([string] $name, [int] $mode = 0)
[string] $path = (Resolve-Path .\).Path;
[string] $formatedName = $name.substring(0, 1).toLower() + $name.Substring(1);
[string] $path = Split-Path -Path $path -Parent;
[string] $featurePath = $path + "/src/features/" + $formatedName;

Remove-Item $featurePath -Force -Recurse;

Write-Host "Feature " + $formatedName + " has been deleted";