param ([string] $name, [int] $mode = 0)

[string] $path = (Resolve-Path .\).Path;
[string] $formatedName = $name.substring(0, 1).ToUpper() + $name.Substring(1);
[string] $parentPath = Split-Path -Path $path -Parent;
[string] $featurePath = $parentPath + "/src/features/" + $formatedName;

if ($mode -eq $mode) {
[string] $content = "import React, { Component } from 'react'; 

export default class " + $formatedName + " extends React.Component {

    render() {
        return <div></div>
    }
}"

    Write-Host $content;

    try {
        Write-Host "Try to create feature "+ $formatedName;
        New-Item -Path $featurePath -Name ($formatedName + ".js") -Type "file" -Value $content -Force;    
    }
    catch {
        Write-Host "Error during create a new feature"; 
    }

    Write-Host "Component file has been created";
}

if ($mode -gt 0 ) {
[string] $content = "import React, { Component } from 'react'; 
import { connect } from 'react-redux';

class " + $formatedName + " extends React.Component {

    render() {
        return <div></div>
    }
}

const mapStateToProps = (state) => { 
    return { } 
} 

const mapDispatchToProps = (dispatch) => {
    return { }
}

export default connect(mapStateToProps, mapDispatchToProps)(" + $formatedName + ");"

[string]$reducerContent = "import { SAMPLE } from './" + $formatedName + "ActionTypes.js';

const " + $formatedName + "Reducer = (state = { }, action) => {
    switch (action.type) {
        case SAMPLE:
            return state;
        default:
            return state;
    }
}
export default " + $formatedName + "Reducer;"

[string]$actionsContent = "
import {SAMPLE} from './" + $formatedName + "ActionTypes.js';

export function sample(){
    return { 
        type: SAMPLE
    }
}";

[string]$typeContent = "export const SAMPLE = 'SAMPLE';"



    try {
        Write-Host "Try to create feature "+ $formatedName;
        
        New-Item -Path $featurePath -Name ($formatedName + ".js") -Type "file" -Value $content -Force;    
        Write-Host "Component file has been created";
        
        New-Item -path $featurePath -name ($formatedName + "Reducer.js") -type "file" -Value $reducerContent -Force; ;    
        Write-Host "Reducer file has been created";

        New-Item -path $featurePath -name ($formatedName + "Actions.js") -type "file" -Value $actionsContent -Force;    
        Write-Host "Actions file has been created";

        New-Item -path $featurePath -name ($formatedName + "ActionTypes.js") -type "file" -Value $typeContent -Force;    
        Write-Host "Action Types file has been created";
    }
    catch {
        Write-Host "Error during create a new feature"; 
    }
}



