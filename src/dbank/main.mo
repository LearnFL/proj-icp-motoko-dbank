import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";

actor DBank {
  stable var currentValue : Float = 300;
  currentValue := 300;

  // Return number of nanoseconds since 1970-01-01
  stable var startTime = Time.now();
  startTime := Time.now();

  public func topUp(x : Float) {
    currentValue += x;
    Debug.print(debug_show (currentValue));
    Debug.print("called");
  };

  public func withdrawal(x : Float) {
    let tempValue : Float = currentValue - x;
    if (tempValue >= 0) {
      currentValue -= x;
      Debug.print(debug_show (currentValue));
    } else {
      Debug.print("Not Enough Funds");
    };
  };

  public query func checkBalance() : async Float {
    return currentValue;
  };

  public func compound() {
    let currentTime = Time.now();
    let timeElapsedNS = currentTime - startTime;
    let timeElapsedS = timeElapsedNS / 1000000000;
    currentValue := currentValue * (1.01 ** Float.fromInt(timeElapsedS));
    startTime := currentTime;
  };

};
