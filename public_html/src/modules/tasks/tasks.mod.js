(function (ng) {
    
    var mod = ng.module("taskModule", ['ui.router']);
    
    mod.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            
            var basePath = 'src/modules/tasks/';
            
            $urlRouterProvider.otherwise("/tasksList");
            
            $stateProvider.state('tasksList', {
                
                url: '/tasks/list',
                 views: {
                    'mainView': {
                        templateUrl: basePath + 'tasks.list.html',
                        controller: 'taskCtrl',
                        controllerAs: 'ctrl'
                    }
                }
            });
        }
    ]);
})(window.angular);
