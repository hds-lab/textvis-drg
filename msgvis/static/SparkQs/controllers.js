(function () {
    'use strict';

    var module = angular.module('SparkQs.controllers', []);

    var DimensionController = function ($scope) {

        $scope.dimension_groups = [
            {
                "group_name": "Time",
                "dimensions": [
                    {
                        "key": "time",
                        "name": "Time",
                        "type": "TimeDimension"
                    },
                    {
                        "key": "timezone",
                        "name": "Timezone",
                        "type": "CategoricalDimension"
                    }
                ]
            },
            {
                "group_name": "Contents",
                "dimensions": [
                    {
                        "key": "topics",
                        "name": "Topics",
                        "type": "CategoricalDimension"
                    },
                    {
                        "key": "keywords",
                        "name": "Keywords",
                        "type": "CategoricalDimension"
                    },
                    {
                        "key": "hashtags",
                        "name": "Hashtags",
                        "type": "CategoricalDimension"
                    },
                    {
                        "key": "contains_hashtag",
                        "name": "Contains a hashtag",
                        "type": "CategoricalDimension"
                    },
                    {
                        "key": "urls",
                        "name": "Urls",
                        "type": "CategoricalDimension"
                    },
                    {
                        "key": "contains_url",
                        "name": "Contains a url",
                        "type": "CategoricalDimension"
                    },
                    {
                        "key": "contains_media",
                        "name": "Contains a photo",
                        "type": "CategoricalDimension"
                    },
                ]
            },
            {
                "group_name": "Meta",
                "dimensions": [
                    {
                        "key": "language",
                        "name": "Language",
                        "type": "CategoricalDimension"
                    },
                    {
                        "key": "sentiment",
                        "name": "Sentiment",
                        "type": "CategoricalDimension"
                    }
                ]
            },
            {
                "group_name": "Interaction",
                "dimensions": [
                    {
                        "key": "type",
                        "name": "Message Type",
                        "type": "CategoricalDimension"
                    },
                    {
                        "key": "replies",
                        "name": "Num. Replies",
                        "type": "QuantitativeDimension"
                    },
                    {
                        "key": "shares",
                        "name": "Num. Shares",
                        "type": "QuantitativeDimension"
                    },
                    {
                        "key": "mentions",
                        "name": "Mentions",
                        "type": "CategoricalDimension"
                    },
                    {
                        "key": "contains_mention",
                        "name": "Contains a mention",
                        "type": "CategoricalDimension"
                    },
                ]
            },
            {
                "group_name": "Author",
                "dimensions": [
                    {
                        "key": "sender_name",
                        "name": "Author name",
                        "type": "CategoricalDimension"
                    },
                    {
                        "key": "sender_message_count",
                        "name": "Num. Messages",
                        "type": "QuantitativeDimension"
                    },
                    {
                        "key": "sender_reply_count",
                        "name": "Num. Replies",
                        "type": "QuantitativeDimension"
                    },
                    {
                        "key": "sender_mention_count",
                        "name": "Num. Mentions",
                        "type": "QuantitativeDimension"
                    },
                    {
                        "key": "sender_share_count",
                        "name": "Num. Shares",
                        "type": "QuantitativeDimension"
                    },
                    {
                        "key": "sender_friend_count",
                        "name": "Num. Friends",
                        "type": "QuantitativeDimension"
                    },
                    {
                        "key": "sender_follower_count",
                        "name": "Num. Followers",
                        "type": "QuantitativeDimension"
                    },
                ]
            },
        ];

    };


    DimensionController.$inject = ['$scope'];
    module.controller('SparkQs.controllers.dimensionController', DimensionController);

    

})();
