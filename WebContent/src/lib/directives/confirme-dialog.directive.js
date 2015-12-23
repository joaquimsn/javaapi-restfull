angular
	.module('appJava')
	.directive('cdConfirmeDialog', confirmeDialog);

function confirmeDialog() {
	var directive = {
			restrict: 'E',
			templateUrl: '/java-angular/partials/confirme-dialog',
			scope: {
				title: '@',
				message: '@'
			}
	};
	
	return directive;
}