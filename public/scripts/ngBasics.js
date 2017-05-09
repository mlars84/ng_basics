var myApp = angular.module('myApp', []);

myApp.controller('InventoryController', function() { //convention is to cap every word
  console.log('NG');
  // variable global to this controller
  var vm = this;
  //array attached to controller (makes it available on the DOM)
  vm.items = [];
  //view model
  vm.addItem = function() {
    console.log('in addItem ng-click');
    console.log(vm.nameIn, vm.descriptionIn);
    //create object from user input
    var newItem = {
      name: vm.nameIn,
      description: vm.descriptionIn
    };
    console.log('adding item:', newItem);
    //push item into the array
    vm.items.push(newItem);
    console.log('items:', vm.items);
    //empty inputs
    vm.nameIn = '';
    vm.descriptionIn = '';
  }; //end addItem
}); //end InventoryController

//controller is part of app
