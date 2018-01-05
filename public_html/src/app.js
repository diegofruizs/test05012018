(function (ng) {
    var app = angular.module('mainApp', [
        'ui.router',
        'ui.bootstrap',
        'taskModule'

    ]);
    app.config(['$qProvider', function ($qProvider) {
            $qProvider.errorOnUnhandledRejections(false);
        }]);
})(window.angular);
