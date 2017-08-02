angular.module('myApp')
.controller('mainController', function($scope, $document)
{
    $scope.test = 444;

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
