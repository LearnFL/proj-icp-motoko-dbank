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
  
Run these commands:</br>
  <i>npm install --save-dev webpack-cli</br>
  npm upgrade --save-dev webpack-cli</i></br>

### DBUG
<i>import Debug "mo:base/Debug";</i></br>
<i>Debug.print(debug_show(currentValue));</i></br>

### Class Canister
<i>actor DBank {}</i>

### Variable
<i>var a = 20;</i></br>

To replace value use walrus:</br>
<i>var a := 25;</i>

### Constant
<i>let id = 54534564564;</i>

### Function
Private function:</br>
<i>func Name() {}</i></br>

Public function</br>
<i>public func Name() {}</i>

Public function could be called from a command line:</br>
<i>dfx canister call AppName FunctionName</i></br>

### Candid UI
A function could be accessed through a browser using [Candid](https://internetcomputer.org/docs/current/developer-docs/build/candid/candid-howto).</br>
<i>dfx canister id __Candid_UI<br>
  <p>http://127.0.0.1:8000/?canisterId=<CANDID-UI-CANISTER-IDENTIFIER></p></i></br>
 Then enter canister ID fro the program (it is not the same ID you entered in porevious step)</br>
