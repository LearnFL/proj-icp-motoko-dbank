# Motoko DBank

### Commands
1) dxf new AppName</br>
2) dfx start
3) dfx deploy
4) npm start</br>

<b>Must deploey after each change</b></br>
<b>If this error:</b></br>
  <i>No production canister_ids.json found. Continuing with local</i></br>
  <i>[webpack-cli] TypeError: cli.isMultipleCompiler is not a function</i></br>
  <i>at Command.<anonymous> (/Users/davidmartinezgil/proyect/node_modules/@webpack-cli/serve/lib/index.js:146:35)</i></br>
  <i>at async Promise.all (index 1)</i></br>
  <i>at async Command.<anonymous> (/Users/davidmartinezgil/proyect/node_modules/webpack-cli/lib/webpack-cli.js:1674:</i></br>
  
<b>Run these commands:</b> </br>
  npm install --save-dev webpack-cli</br>
  npm upgrade --save-dev webpack-cli</br>

### DBUG
import Debug "mo:base/Debug";</br>
Debug.print(debug_show(currentValue));</br>

### Class Canister
actor DBank {}

### Variable
var a = 20;</br>
<i>To replace value use walrus:</i></br>
var a := 25;

### Constant
let id = 54534564564;

### Function
<i>Private function:</i></br>
func Name() {}
<i>Public function</i></br>
public func Name() {}
