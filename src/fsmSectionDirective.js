'use strict';
angular.module('fsmSection', [])
    .directive('fsmSection', [function () {
        return {
            restrict: 'E',
            scope: {
                id:'@',
                sections: '='
            },
            templateUrl: 'fsmSection/fsmSection.tpl.html',
            link: function(scope, element, attributes){
                scope.section = scope.sections[scope.id];
               scope.next = scope.section.next;
            }
        };
    }]);