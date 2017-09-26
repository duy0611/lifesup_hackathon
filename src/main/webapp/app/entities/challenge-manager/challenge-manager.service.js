(function () {
    'use strict';
    angular
        .module('hackathonApp')
        .factory('Challenge', Challenge)
        .factory('ChallengeByAuthority', ChallengeByAuthority)
        .factory('ChallengeInfo', ChallengeInfo)
        .factory('ChallengeBanner', ChallengeBanner);


    Challenge.$inject = ['$resource'];
    ChallengeByAuthority.$inject = ['$resource'];
    ChallengeInfo.$inject = ['$resource', 'DateUtils'];
    ChallengeBanner.$inject = ['$resource'];





    function Challenge($resource) {
        var resourceUrl = 'api/challenges/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true },
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                    }
                    return data;
                }
            },
            'update': { method: 'PUT' },
        });
    }

    function ChallengeBanner($resource) {
        var resourceUrl = 'api/challenges/banner';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true },
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                    }
                    return data;
                }
            },
            'save': { method: 'POST' },
            'update': { method: 'PUT' },
        });
    }

    function ChallengeByAuthority($resource) {
        var resourceUrl = 'api/challenges-by-authories';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true },
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                    }
                    return data;
                }
            },
            'update': { method: 'PUT' },
        });
    }

    function ChallengeInfo($resource, DateUtils) {
        var resourceUrl = 'api/challenge-infos/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true },
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                        data.eventStartTime = DateUtils.convertDateTimeFromServer(data.eventStartTime);
                        data.eventEndTime = DateUtils.convertDateTimeFromServer(data.eventEndTime);
                        data.applyStartTime = DateUtils.convertDateTimeFromServer(data.applyStartTime);
                        data.applyEndTime = DateUtils.convertDateTimeFromServer(data.applyEndTime);
                        data.activeTime = DateUtils.convertDateTimeFromServer(data.activeTime);
                    }
                    return data;
                }
            },
            'update': { method: 'PUT' },
            'save': { method: 'POST' }
        });
    }
})();