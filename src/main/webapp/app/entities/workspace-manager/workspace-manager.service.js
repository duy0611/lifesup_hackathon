(function() {
    'use strict';
    angular
        .module('hackathonApp')
        .factory('ChallengeWorkspace', ChallengeWorkspace)
        .factory('ChallengeWorkspaceNews', ChallengeWorkspaceNews)
        .factory('ChallengeWorkspaceAnswer', ChallengeWorkspaceAnswer)
        .factory('WorkspaceOfChallenge', WorkspaceOfChallenge)
        .factory('ChallengeWorkspaceFeedback', ChallengeWorkspaceFeedback)
        .factory('ChallengeWorkspaceQuestion', ChallengeWorkspaceQuestion)
        .factory('GetWorkspaceQuestion', GetWorkspaceQuestion)

    ChallengeWorkspace.$inject = ['$resource'];
    ChallengeWorkspaceNews.$inject = ['$resource'];
    ChallengeWorkspaceAnswer.$inject = ['$resource'];
    WorkspaceOfChallenge.$inject = ['$resource'];
    ChallengeWorkspaceFeedback.$inject = ['$resource'];
    ChallengeWorkspaceQuestion.$inject = ['$resource'];
    GetWorkspaceQuestion.$inject = ['$resource'];


    function ChallengeWorkspace ($resource) {
        var resourceUrl =  'api/challenge-workspaces';

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
        var resourceUrl =  'api/challenge-workspace-answers';

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

    function ChallengeWorkspaceQuestion ($resource) {
        var resourceUrl =  'api/challenge-workspace-questions';

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


})();