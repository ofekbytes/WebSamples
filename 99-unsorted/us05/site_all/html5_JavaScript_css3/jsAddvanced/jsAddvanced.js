

function jbBasic_IsExist() {
      console.log(".");
      console.log("................................................");
      console.log("\"functionInsideFunction.js\" - Loaded --> [ok]");
      console.log("................................................");

      return true;
};


//
// #1: function inside function return function
//
function funcInFunc (FName) {
   return function (LName) {
       return FName + " " + LName;
   }
}


function funcPrint() {
     var FName = funcInFunc("kim");
     var fullName = FName("jam");
     console.log(fullName);
}


//
// #2: function inside function return function
//
function funcInFunc2 (FName) {
   return function (LName) {
     return function (City) {
       return FName + " " + LName + " " + City;
     }
   }
}


function funcPrint2() {
     var data = funcInFunc2("yaki");
     data = data("kaki");
     data = data("Tel-Aviv");
     console.log("\n" + data);
}


//
// #3: map(), reduce(), filtter()
//

function fnMapFunction() {
  var  arrRoom = ["A1","A2","A3"];
  var  newRoom = arrRoom.map (function (rm)
  {
      if (rm === "A3")
      {
        return "A4";
      }
  });

//?????
  //     for(int i = 0; i< newRoom.lenght ; i++)
  //     {
  //       console.log(newRoom[i]);
  //     }

}
