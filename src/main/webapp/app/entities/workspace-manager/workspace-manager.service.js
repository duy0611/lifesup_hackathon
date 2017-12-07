(function() {
    'use strict';
    angular
        .module('hackathonApp')
        .factory('ChallengeWorkspace', ChallengeWorkspace)
        .factory('ChallengeWorkspaceNews', ChallengeWorkspaceNews)
        .factory('ChallengeWorkspaceAnswer', ChallengeWorkspaceAnswer)
        .factory('WorkspaceOfChallenge', WorkspaceOfChallenge)
        .factory('ChallengeWorkspaceFeedback', ChallengeWorkspaceFeedback)
        .factory('ChallengeFeedbackCreate', ChallengeFeedbackCreate)
        .factory('FeedbackByChallenge', FeedbackByChallenge)
        .factory('ChallengeWorkspaceQuestion', ChallengeWorkspaceQuestion)
        .factory('GetWorkspaceQuestion', GetWorkspaceQuestion)
        .factory('CreateWorkspaceNews', CreateWorkspaceNews)
        .factory('DeleteWorkspaceNews', DeleteWorkspaceNews)
        .factory('WorkspaceDetail', WorkspaceDetail)
        .factory('GetQuestionAnswers', GetQuestionAnswers)
        .factory('GetSubmissionByApplicationId', GetSubmissionByApplicationId)
        .factory('DownloadSubmission', DownloadSubmission)

    ChallengeWorkspace.$inject = ['$resource'];
    ChallengeWorkspaceNews.$inject = ['$resource'];
    ChallengeWorkspaceAnswer.$inject = ['$resource'];
    WorkspaceOfChallenge.$inject = ['$resource'];
    ChallengeWorkspaceFeedback.$inject = ['$resource'];
    ChallengeFeedbackCreate.$inject = ['$resource'];
    FeedbackByChallenge.$inject = ['$resource'];
    ChallengeWorkspaceQuestion.$inject = ['$resource'];
    GetWorkspaceQuestion.$inject = ['$resource'];
    CreateWorkspaceNews.$inject = ['$resource'];
    DeleteWorkspaceNews.$inject = ['$resource'];
    WorkspaceDetail.$inject = ['$resource'];
    GetQuestionAnswers.$inject = ['$resource'];
    GetSubmissionByApplicationId.$inject = ['$resource'];
    DownloadSubmission.$inject = ['$resource'];

    function ChallengeWorkspace ($resource) {
        var resourceUrl =  'api/challenge-workspaces';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                    }
                    return data;
                }
            },
            'save': { method:'POST' },
            'update': { method:'PUT' }
        });
    }
    
    function ChallengeWorkspaceNews ($resource) {
        var resourceUrl =  'api/challenge-workspace-news';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: false},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                    }
                    return data;
                }
            },
            'save': { method:'POST' },
            'update': { method:'PUT' }
        });
    }

    
    function ChallengeWorkspaceAnswer ($resource) {
        var resourceUrl =  'api/challenge-workspace-answers/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: false},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                    }
                    return data;
                }
            },
            'save': { method:'POST' },
            'update': { method:'PUT' }
        });
    }

    function WorkspaceOfChallenge ($resource) {
        var resourceUrl =  '/api/challenge-workspaces/challenge/:challengeId';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: false},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                    }
                    return data;
                }
            },
            'save': { method:'POST' },
            'update': { method:'PUT' }
        });
    }

    function ChallengeWorkspaceFeedback ($resource) {
        var resourceUrl =  '/api/challenge-feedbacks';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: false},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                    }
                    return data;
                }
            },
            'save': { method:'POST' },
            'update': { method:'PUT' }
        });
    }

    function ChallengeFeedbackCreate ($resource) {
        var resourceUrl =  '/api/challenge-feedbacks-created';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: false},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                    }
                    return data;
                }
            },
            'save': { method:'POST' },
            'update': { method:'PUT' }
        });
    }

    function FeedbackByChallenge ($resource) {
        var resourceUrl =  '/api/challenge-feedbacks/challenge/:challengeId';
        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                    }
                    return data;
                }
            },
            'save': { method:'POST' },
            'update': { method:'PUT' }
        });
    }

    function ChallengeWorkspaceQuestion ($resource) {
        var resourceUrl =  'api/challenge-workspace-questions/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: false},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                    }
                    return data;
                }
            },
            'save': { method:'POST' },
            'update': { method:'PUT' }
        });
    }

    function GetWorkspaceQuestion ($resource) {
        var resourceUrl =  'api/challenge-workspace-questions/not-answer/:workspaceId';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                    }
                    return data;
                }
            },
            'save': { method:'POST' },
            'update': { method:'PUT' }
        });
    }

    function CreateWorkspaceNews ($resource) {
        var resourceUrl =  'api/challenge-workspace-news-created';

        return $resource(resourceUrl, {}, {
            'save': { method:'POST' },
            'update': { method:'PUT' }
        });
    }

    function DeleteWorkspaceNews ($resource) {
        var resourceUrl =  '/api/challenge-workspace-news/:id';
        return $resource(resourceUrl, {}, {
            'save': { method:'POST' },
            'update': { method:'PUT' }
        });
    }

    function WorkspaceDetail ($resource) {
        var resourceUrl =  'api/challenge-workspaces/details/:challengeId';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                    }
                    return data;
                }
            },
            'save': { method:'POST' },
            'update': { method:'PUT' }
        });
    }
    function GetQuestionAnswers ($resource) {
        var resourceUrl =  'api/challenge-workspace-questions/details/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                    }
                    return data;
                }
            },
            'save': { method:'POST' },
            'update': { method:'PUT' }
        });
    }
    function GetSubmissionByApplicationId ($resource) {
        var resourceUrl =  '/api/challenge-submissions/application/:applicationId';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                    }
                    return data;
                }
            },
            'save': { method:'POST' },
            'update': { method:'PUT' }
        });
    }
    function DownloadSubmission ($resource) {
        var resourceUrl =  '/api/challenge-submissions/download';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                    }
                    return data;
                }
            },
            'save': { method:'POST' },
            'update': { method:'PUT' }
        });
    }


})();
