//create new angular app with empty dependencies array
		var myApp = angular.module('myApp',['ngRoute','myAppControllers']);
		myApp.config(['$routeProvider',function($routeProvider){
			//here we are configuring the url routing and behaviour
			$routeProvider.when('/users',{
				templateUrl: 'templates/users_tpl.html',
				controller: 'usersCtrl'
			}) 
			//  get '/users/34'
			.when('/users/:userId',{
				templateUrl: 'templates/user_details_tpl.html',
				controller: 'userDetailCtrl'
			}).otherwise({
				redirectTo : '/users'
			})
		}]);