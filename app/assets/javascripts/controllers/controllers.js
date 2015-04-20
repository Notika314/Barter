angular.module('barter')
  .controller('WelcomeController', ['$routeParams', "UserService", "TalentService", function($routeParams, UserService, TalentService ){
    this.tals = [];
    this.persons = [];
    this.selectedCategory = 'Music';

     UserService.query(function(data) {
      this.persons = data;
      console.log("response", data);
     }.bind(this));

     TalentService.query(function(data) {
      this.tals = data;
      console.log("response", data);
     }.bind(this));

     // this.filterFunction = function(this.persons, key){
     //   for(var i = 0; i < this.persons.length; i++){
     //     if (array[i].type === key){
     //       return true
     //     }
     //   };
     //  return false;
     // };

     this.myVar = false;
     this.toggle = function() {
        this.myVar = true;
     };
     this.clear = function() {
        this.myVar = false;
     };




}]);

angular.module('barter')
.controller('UsersController', ['$http', '$routeParams', 'UserService', function($http, $routeParams, UserService, TalentService){
    UserService.get({id: $routeParams.id}, function(data){
      this.user = data;
    }.bind(this));


  this.saveUser = function(user) {
    console.log(user);
    UserService.update(user);
  };

  this.toggleTalentShown = function(talent) {
    talent.isShown = ! talent.isShown;
  }


}]);


angular.module('barter').controller('TimeslotsController', ['UserService', function(UserService){
   // here you'd put code to e.g.
   // load the timeslots from a service, handle form subsmissions etc
   console.log('TimeslotsController instantiated');
   this.slots = [ "a", "b", "c", "d" ]

   UserService.get({id:4}, function(jsonResponse) {
     this.user = jsonResponse;
     console.log('response', jsonResponse);
   }.bind(this));
}]);
