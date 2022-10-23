# Motoko DBank

### Usefull websites
[Dfinity](https://dfinity.org)</br>
[Motoko styling](https://internetcomputer.org/docs/current/developer-docs/build/cdks/motoko-dfinity/style/)</br>
[Crypto fund research](https://cryptofundresearch.com/cryptocurrency-funds-overview-infographic/)</br>
[Blockchain demo](https://guggero.github.io/blockchain-demo/#!/block)</br>
[Censys system overview](https://dfinity.org/pdf-viewer/pdfs/viewer?file=../library/dfinity-consensus.pdf)</br>
[Setup for mac](https://docs.google.com/document/d/e/2PACX-1vTSgoWcVvuMW4Aa78MyqeK0_ZRl_MaV7rS-tdhya3jlPbSSbxczQFCohrGf87T4F7tJKXwTjT2z_QSq/pub)</br>
[Setup for windows](https://docs.google.com/document/d/e/2PACX-1vTNicu-xuf4EiLAehHIqgfpjAnPjzqMGT-xpZVvYaAWNyvzYK_Ceve_me4PVRIxpzH7ea5PAX9NxGwY/pub)</br>
[GitLab API](https://gitlab.com/gitlab-org/gitlab/-/blob/master/doc/api/openapi/openapi.yaml)</br>

### Commands
1) dxf new AppName</br>
2) dfx start
3) dfx deploy
4) npm start</br>

<b>Must deploey after each change</b></br>

<b>If this error:</b></br>
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
```
  var a = 20;
```

To replace value use walrus:</br>
```
  var a := 25;
```

### Constant
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
Ability to hold on to state over many sycles of updates.

