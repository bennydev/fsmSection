'use strict';
angular.module('fsmSection', ['ui.router'])
    .directive('fsmSection', ['SectionService', function (SectionService) {
        return {
            restrict: 'E',
            scope: {
                id:'@',
                section: '='
            },
            templateUrl: 'fsmSection.tpl.html',
            link: function(scope){
                scope.openSection = function(){
                    if(section.status !== 'DISABLED') {
                        SectionService.openSection(scope.section.id);
                    }
                }
            }
        };
    }])
    .factory('SectionService', [function(){
    var service = {
        openSection: openSection
    };
    return service;

    function openSection(id){

    }
}]);