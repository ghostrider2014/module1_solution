(function(){
  'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){

  $scope.checkItems = function(){
    console.log($scope.listOfItems);
    $scope.message = '';
    $scope.messageTypeRed = false;
    $scope.messageTypeGreen = false;
    $scope.count = 0;
    if(undefined == $scope.listOfItems || "" == $scope.listOfItems){
      $scope.message = "Please enter data first";
      $scope.messageTypeRed = true;
      return;
    }else{
      const words = $scope.listOfItems.split(',');
      console.log(words);
      for(var i=0;i<words.length;i++){
       if(words[i] === "" || words[i] === "''")
          $scope.count++;
      }
      $scope.itemCount = words.length - $scope.count;
      console.log($scope.itemCount);
      if($scope.itemCount > 3){
        $scope.message = "Too much!";
        $scope.messageTypeGreen = true;
        return;
      }else if($scope.itemCount == 0){
        $scope.message = "Please enter data first";
        $scope.messageTypeRed = true;
        return;
      }else{
        $scope.message = "Enjoy!";
        $scope.messageTypeGreen = true;
        return;
      }
    }


  }

}
})();
