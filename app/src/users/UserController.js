

(function(){

  angular
       .module('userApp')
       .controller('UserController', [
          'userService', '$mdSidenav', UserController
       ]);

  
  function UserController( userService, $mdSidenav ) {
    const vm = this;

    vm.selected     = null;
    vm.users        = [];
    vm.selectUser   = selectUser;
    vm.toggleList   = toggleUsersList;


    // Load all registered users

    userService
        .loadAllUsers()
        .then(function (data) {
          vm.users    = [].concat(data);
          vm.selected = data[0];

        });


     function toggleUsersList() { //hide/show the sidenav
        $mdSidenav('left').toggle();
    }


     function selectUser (person) {//select the persons
       vm.selected =  person;
     }

  
  }

})();