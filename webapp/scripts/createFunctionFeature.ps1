param([string] $name, [string] $featureName)

[string] $path = (Resolve-Path .\).Path;
[string] $featureFormatedName = $featureName.substring(0, 1).ToUpper() + $featureName.Substring(1);
[string] $formatedName = $name.substring(0, 1).ToUpper() + $name.Substring(1);
[string] $parentPath = Split-Path -Path $path -Parent;
[string] $featurePath = $parentPath + "/src/features/" + $featureFormatedName;

[string] $content = "import React from 'react'; 

const " + $formatedName + " = (props) => {

    return <div></div>
}

export default " + $formatedName 

Write-Host $content;

    try {
        Write-Host "Try to create function feature "+ $formatedName;
        New-Item -Path $featurePath -Name ($formatedName + ".js") -Type "file" -Value $content -Force;    
    }
    catch {
        Write-Host "Error during create a new function feature"; 
    }

Write-Host "Function component file has been created";