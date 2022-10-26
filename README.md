# Motoko DBank

### A quick dive in ICP and Motoko.
This simple app is a quick dive in Motoko and ICP. The app implements deposits, withdrawals and compounds interest every second, that is why if you add $10 your balance will increase by more than that. See pictures at the bottom of the page.


### Usefull websites
[Setup for mac](https://docs.google.com/document/d/e/2PACX-1vTSgoWcVvuMW4Aa78MyqeK0_ZRl_MaV7rS-tdhya3jlPbSSbxczQFCohrGf87T4F7tJKXwTjT2z_QSq/pub)</br>
[Setup for windows](https://docs.google.com/document/d/e/2PACX-1vTNicu-xuf4EiLAehHIqgfpjAnPjzqMGT-xpZVvYaAWNyvzYK_Ceve_me4PVRIxpzH7ea5PAX9NxGwY/pub)</br>
[Crypto fund research](https://cryptofundresearch.com/cryptocurrency-funds-overview-infographic/)</br>
[Blockchain demo](https://guggero.github.io/blockchain-demo/#!/block)</br>
[Censys system overview](https://dfinity.org/pdf-viewer/pdfs/viewer?file=../library/dfinity-consensus.pdf)</br>
[App compound finance](https://app.compound.finance)</br>
[Dfinity](https://dfinity.org)</br>
[Difinity forum](https://forum.dfinity.org/)</br>
[Difinity developer discord](https://discord.com/invite/cA7y6ezyE2)</br>
[Motoko styling](https://internetcomputer.org/docs/current/developer-docs/build/cdks/motoko-dfinity/style/)</br>
[Dfinity cycle cost](https://internetcomputer.org/docs/current/developer-docs/deploy/computation-and-storage-costs/)</br>
[Dfinity cycles faucet](https://internetcomputer.org/docs/current/developer-docs/quickstart/cycles-faucet/) </br>
[Command line ref](https://internetcomputer.org/docs/current/references/cli-reference/)</br>
[Official docs](https://internetcomputer.org/docs/current/developer-docs/ic-overview/)</br>
[GitLab API](https://gitlab.com/gitlab-org/gitlab/-/blob/master/doc/api/openapi/openapi.yaml)</br>

### Commands
1) dxf new AppName</br>
2) dfx start (or `dfx start --clean` if get errors)
3) dfx deploy
4) npm start</br>

Must deploey after each change. If this error:</br>
```
  No production canister_ids.json found. Continuing with local
  [webpack-cli] TypeError: cli.isMultipleCompiler is not a function
  at Command.<anonymous> (/Users/davidmartinezgil/proyect/node_modules/@webpack-cli/serve/lib/index.js:146:35)
  at async Promise.all (index 1)
  at async Command.<anonymous> (/Users/davidmartinezgil/proyect/node_modules/webpack-cli/lib/webpack-cli.js:1674:
```
  
Run these commands:</br>
```
  npm install --save-dev webpack-cli
  npm upgrade --save-dev webpack-cli
```

### DBUG
```
  import Debug "mo:base/Debug";
  Debug.print(debug_show(currentValue));
```

### Class Canister
```
  actor DBank {}
```

### Variable
Decalration and initialization:</br>
```
  var a = 20;
```

To replace value use walrus:</br>
```
  var a := 25;
```

Constant: </br>
```
  let id = 54534564564;
```

### Function
Private function:</br>
```
  func Name() {}
```

Public function</br>
```
  public func Name() {}
```

Public function could be called from a command line:</br>
```  
  dfx canister call AppName FunctionName
```

### Candid UI
A function could be accessed through a browser using [Candid](https://internetcomputer.org/docs/current/developer-docs/build/candid/candid-howto).</br>
```
  dfx canister id __Candid_UI
```

Enter following into the browser:
```
  http://127.0.0.1:8000/?canisterId=CANDID-UI-CANISTER-IDENTIFIER
```

 Then enter canister ID for the program (it is not the same ID you entered in porevious step). One can find that id using the code below.</br>
 ```
  dfx canister id AppName
 ```
 
 ### Update call vs Query call 
 [Read more on this topic](https://internetcomputer.org/docs/current/concepts/canisters-code/#query-update)</br>
 Update call is slow as it has to write to block chain.
```
  public func withdrawal(x : Nat) {
      let tempValue : Int = currentValue - x;
      if (tempValue >= 0) {
        currentValue -= x;
        Debug.print(debug_show (currentValue));
      } else {
        Debug.print("Not Enough Funds");
      };
    };
```
Query call does not modify anything on block chain, it is read only.
```
  public query func checkBalance() : async Nat {
      return currentValue;
    };
```

### Orthogonal Persistance
[Read more on stable variables](https://internetcomputer.org/docs/current/developer-docs/build/cdks/motoko-dfinity/upgrades/)</br>
Ability to hold on to state over many sycles of updates.
If you run the code below and redeploy the canister, unless we add 1 to a again, the value of a will be 5.
```
  var a = 5;
  a += 1;
```
But in the canister on ICP it does not have to happen, instead it can hold on to the state of the variable. We can create a persisted variable by using 'stable' keyword:
```
  stable var currentValue = 300;
```
### Connect Fronend to Backend
If node dependencies have not been installed, open a new terminal and run:
```
  npm install
  dfx start
  dfx deploy
  npm start
```
Import app into JS file. Call with await.
```
  import { dbank } from "../../declarations/dbank";
  
  await dbank.topUp(input_amount);
```

### How to pay for ICP
You can exchange tokens for computational power aka "Cycles".

##### 1) ICP token.
Purchase ICP token from places like Coinbase.

##### 2) Network Nervous System NNS. 
Allows to time log ICP token to create a neuron. Earn rewards by voting ona proposal.

##### 3) Dfinity.
Earn grant from Dfinity.

##### 4) Act as a data center.

##### 5) Dfinity faucet.
Dfinity gives you free cycles. Anyone with 90 days old Guthub account get $20 worth of free cycles.

### Deployment

### Pictures
Once transaction has been submitted, the app will notify that the transaction is being carrried out (async call may take some time) and submitt buttom will be unavailable.

![Screen Shot 2022-10-23 at 6 16 58 PM](https://user-images.githubusercontent.com/86169204/197420793-b92616d1-c2dd-46e2-90e0-58aefae64bda.png)
![Screen Shot 2022-10-23 at 6 17 10 PM](https://user-images.githubusercontent.com/86169204/197420796-005bf696-06b1-4f47-94e3-c8ffdb026686.png)
![Screen Shot 2022-10-23 at 6 22 29 PM](https://user-images.githubusercontent.com/86169204/197421005-ece4b03e-3a7a-48f1-a4b1-fb6559db9d63.png)

