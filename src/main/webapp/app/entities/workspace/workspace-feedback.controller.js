(function () {
    'use strict';

    angular
        .module('hackathonApp')
        .controller('WorkspaceFeedbackController', WorkspaceFeedbackController);

    WorkspaceFeedbackController.$inject = ['$scope', 'application', 'entity', '$state', '$stateParams', 'ChallengeFeedbackCreate', '$mdDialog'];

    function WorkspaceFeedbackController($scope, application, entity, $state, $stateParams, ChallengeFeedbackCreate, $mdDialog) {
        var vm = this;
       
        // Feedback
        vm.feedback = {};
        vm.rating = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
        vm.submitFeedback = submitFeedback;
        
        function submitFeedback() {
            vm.feedback.applicationId = application.applicationId;
            vm.feedback.challengeId = $stateParams.challengeId;
            console.log(vm.feedback);
            ChallengeFeedbackCreate.save(vm.feedback, feedbackSuccess, onSaveError);
        }

        function feedbackSuccess() {
            showMessage('Your feedbacks have been sent.')
        }

        function onSaveError() {
            console.log("Error");
        }

        function showMessage(mess) {
            var confirm = $mdDialog.alert()
                .title('Thank you!')
                .textContent(mess)
                .ariaLabel('Send feedback')
                .ok('Got it')

            $mdDialog.show(confirm).then(function () {
                $state.reload($state.current);
            }, function () {
            });
        };



        

    }
})();