(function () {
    'use strict';

    angular
        .module('hackathonApp')
        .controller('ChallengeDialogController', ChallengeDialogController);

    ChallengeDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$mdDialog', '$q', 'entity', 'Challenge', 'ChallengeInfo', 'Application', 'Company'];

    function ChallengeDialogController($timeout, $scope, $stateParams, $mdDialog, $q, entity, Challenge, ChallengeInfo, Application, Company) {
        var vm = this;

        vm.challenge = entity;
        vm.challengeInfo = {};

        vm.clear = clear;
        vm.save = save;
        vm.applications = Application.query();
        vm.companies = Company.query();

        load();

        function load() {
            if (vm.challenge.id == null) {
                vm.challengeInfo = {
                    activeTime: null,
                    eventStartTime: null,
                    eventEndTime: null,
                    applyStartTime: null,
                    applyEndTime: null,
                    location: null,
                    status: "DRAFT",
                    prize: null,
                    id: null
                };
                console.log("We're going to create a challenge");
            }
            else {
                vm.challengeInfo = vm.challenge.info;
                console.log("We're going to update a challenge");
            }
        }

        function clear() {
            $mdDialog.cancel('cancel');
        }

        function save() {
            vm.isSaving = true;
            if (vm.challengeInfo.id !== null) {
                ChallengeInfo.update(vm.challengeInfo, onSaveInfoSuccess, onSaveInfoError);
            } else {
                ChallengeInfo.save(vm.challengeInfo, onSaveInfoSuccess, onSaveInfoError);
            }
        }

        function onSaveInfoSuccess(result) {
            $scope.$emit('hackathonApp:challengeUpdate', result);
            if (vm.challenge.id !== null) {
                Challenge.update(vm.challenge, onSaveSuccess, onSaveError);
            }
            else {
                // vm.challenge.info = ChallengeInfo.get({ id: result.id });
                Challenge.save(vm.challenge, onSaveSuccess, onSaveError);
            }
            // vm.isSaving = false;
        }
        function onSaveSuccess(result) {
            $scope.$emit('hackathonApp:challengeUpdate', result);
            $mdDialog.hide(result);
            vm.isSaving = false;
        }

        function onSaveInfoError() {

        }

        function onSaveError() {
            // vm.isSaving = false;
        }


    }
})();
