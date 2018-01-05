(function (ng) {
    var mod = ng.module("taskModule");
    mod.constant("taskContext", "api/task");
    mod.controller('taskCtrl', ['$scope', '$http', 'taskContext',
        function ($scope, $http, sportContext) {
            $scope.pendingTasks = [];
            $scope.overdueTasks = [];

            $http.get('data/tasks.json').then(function (response) {

                $scope.tasks = response.data;
                $scope.getTasks($scope.tasks);

            });

            $scope.sortType = 'name'; // set the default sort type
            $scope.sortReverse = false;  // set the default sort order
            $scope.sortTypeod = 'name'; // set the default sort type
            $scope.sortReverseod = false;  // set the default sort order


            function formatDate(date) {
                var monthNames = [
                    "01", "02", "03",
                    "04", "05", "06", "07",
                    "08", "09", "10",
                    "11", "12"
                ];

                var day = date.getDate();
                var monthIndex = date.getMonth();
                var year = date.getFullYear();

                return year + "-" + monthNames[monthIndex] + "-" + day;
            }


            $scope.getTasks = function (tasks) {
                $scope.dt = new Date(formatDate(new Date()));

                for (var item in tasks) {
                    var duedate = new Date(formatDate(new Date('' + tasks[item].DueDate)));  // show current date-time in console
                    if ($scope.dt > duedate) {
                        $scope.overdueTasks.push(tasks[item]);
                    } else {
                        $scope.pendingTasks.push(tasks[item]);
                    }
                }

            }
        }
    ]);
}
)(window.angular);