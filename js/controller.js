angular.module('myApp')
.controller('mainController', function($scope, $document, comicsConfig)
{
    $scope.test = 444;

    $scope.comics = comicsConfig;

    $scope.images = [
    	{
    		id : 1,
    		title : 'Test image 1',
    		alt : 'Test',
    		url : 'images/500x500-placeholder.png'
    	},
    	{
    		id : 2,
    		title : 'Test image 2',
    		alt : 'Test',
    		url : 'images/500x500-placeholder.png'
    	},
    	{
    		id : 3,
    		title : 'Test image 3',
    		alt : 'Test',
    		url : 'images/500x500-placeholder.png'
    	}
    ];
}).value('duScrollOffset', 30);
