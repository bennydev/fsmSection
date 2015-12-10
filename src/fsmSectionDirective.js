'use strict';
angular.module('fsmSection', [])
    .directive('fsmSection', [function () {
        return {
            restrict: 'E',
            scope: {
                id:'@',
                section: '='
            },
            templateUrl: 'fsmSection.tpl.html',
            link: function(scope, element, attributes){

            }
        };
    }]);