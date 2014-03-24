app.controller 'ExplanationsController', ['$scope', '$log', 'ExplanationService', ($scope, $log, ExplanationService) ->
    # $log.debug 'Here we go'
    $scope.explanations =
        enabled: []
        available: []

    ExplanationService.properties.then (db) ->
        transform = (obj) ->
            _.chain obj
            .sortBy ['language', 'name']
            .value()

        $scope.toggle = (item) ->
            if not $scope.isEnabled item
                $log.debug "Item #{item.id} will be enabled now"
                $scope.explanations.enabled.push item
            else
                $log.debug "Item #{item.id} will be disabled now"
                _.remove $scope.explanations.enabled, id: item.id
            $scope.options.explanations.ids = _.pluck $scope.explanations.enabled, 'id'

        $scope.isEnabled = (item) ->
            # $log.debug 'item.id:', item.id
            # $log.debug '$scope.options.explanations.ids:', $scope.options.explanations.ids
            _.contains $scope.options.explanations.ids, item.id
        
        db.find()
        # .sort language: 1
        .exec()
        .then (properties) ->
            $log.debug properties
            $scope.explanations.available = transform properties
    .catch (err) ->
        $log.error err
        
        # db.find id: $in: $scope.options.explanations.ids
        # # .sort language: 1
        # .exec (err, properties) ->
        #     $scope.explanations.enabled = transform properties
        #     $scope.$apply()
]