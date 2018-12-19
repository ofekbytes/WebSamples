
var number =0;

function fnLoadPhoneList()
{
 var myApp = angular.module('myApp', []);
 myApp.controller('custList', function($scope)
 {
   $scope.customers=phe; //fetch('phone_list.json'); //phe;
 });
}


function fnColorChange () {

  number ++;
  console.warn("number = "+ number);
}
