'use strict';

angular.module('ng-Batman', []);

angular.module('ngBatman')
  .directive('ngBatman', function(){
    return {
      restrict:"EAC",
      template: "<h1> This is heading </h1>"
    }
  })
