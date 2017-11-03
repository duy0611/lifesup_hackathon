(function () {
    'use strict';

    angular
        .module('hackathonApp')
        .controller('CompanyDialogController', CompanyDialogController);

    CompanyDialogController.$inject = ['$timeout', '$scope', '$stateParams', 'entity', 'Company', '$mdDialog'];

    function CompanyDialogController($timeout, $scope, $stateParams, entity, Company, $mdDialog) {
        var vm = this;

        vm.company = entity;
        vm.cancel = cancel;
        vm.save = save;

        $timeout(function () {
            angular.element('.form-group:eq(1)>input').focus();
        });

        function cancel() {
            $mdDialog.cancel();
        }

        function save() {
            vm.isSaving = true;
            if (vm.company.id !== null) {
                Company.update(vm.company, onSaveSuccess, onSaveError);
            } else {
                Company.save(vm.company, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess(result) {
            $scope.$emit('hackathonApp:companyUpdate', result);
            $mdDialog.hide(result);
            vm.isSaving = false;
        }

        function onSaveError() {
            vm.isSaving = false;
        }


    }
})();
