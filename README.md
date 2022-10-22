# Motoko DBank

### Commands
1) dxf new AppName</br>
2) dfx start
3) dfx deploy
4) npm start
* Must deploey after each change

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
