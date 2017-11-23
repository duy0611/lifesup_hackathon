(function() {
    'use strict';

    angular
        .module('hackathonApp')
        .controller('WorkspaceManagerDialogController', WorkspaceManagerDialogController);

    WorkspaceManagerDialogController.$inject = ['$scope', 'ChallengeWorkspace', 'entity', '$state', '$stateParams', '$mdDialog'];

    function WorkspaceManagerDialogController ($scope, ChallengeWorkspace, entity, $state, $stateParams, $mdDialog) {
        var vm = this;
        vm.workspace = entity;
        vm.save = save;
        vm.clear = clear;
        vm.workspace.challengeId = $stateParams.challengeId;
        console.log($stateParams.challengeId);

        function save(){
            ChallengeWorkspace.save(vm.workspace, onSaveSuccess, onSaveError);
        }

        function clear() {
            $mdDialog.cancel('cancel');
        }

        function onSaveSuccess(result){
            $mdDialog.hide();
            console.log(result);
        }

        function onSaveError(){
            console.log("Error");
        }

    }
})();