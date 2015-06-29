/**
 * Instead of adding javascript files in index html, moving it to a common
 * place.
 */

requirejs([
	'app/login/login_service',
	'app/home/home_controller',
	'app/workflow/workflow_controller',
	'app/workflow/workflow_service'
]);