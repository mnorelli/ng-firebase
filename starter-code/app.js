// strict error checking
'use strict';

angular
  .module("ToEatly", ['firebase'])
  .controller('FoodCtrl', foodCtrl);

foodCtrl.$inject = ['$scope','$firebaseArray'];

function foodCtrl($scope, $firebaseArray) {
  // change to your application URL, reference to the endpoint
  // the specific endpoint foods, not the root
  var ref = firebase.database().ref().child("foods");
  // create a synchronized array to store a collection
  $scope.foods = $firebaseArray(ref);
  
  $scope.addFood = function() {
    $scope.foods.$add({
      name: $scope.food.name,
      yumminess: $scope.food.yumminess
    });
  };
}
