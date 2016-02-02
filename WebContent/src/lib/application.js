'use strict';

angular.module('appJava', ['ngAnimate', 'ngRoute', 'ngMessages']);

angular.module('appJava').controller('headController', function($scope){
	$scope.titulo = "Angular com Java";
});

angular.module('appJava').controller('AppController', ['$scope', AppController]);

function AppController($scope) {
	$scope.quantidadeMensagemNotificacao = 75;
	$scope.name = "Angular Java";
}

angular.module('appJava').config(function($routeProvider, $locationProvider) {
	$routeProvider
		.when("/java-angular/cliente", {
			templateUrl: "/java-angular/views/cliente",
			controller: "ClienteController"
		}).when("/java-angular/", {
			templateUrl: "/java-angular/views/home",
			controller: "RelatorioController"
		});
	
	$locationProvider.html5Mode(true);
});