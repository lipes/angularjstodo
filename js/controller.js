app.controller("TodoController",["$scope", function($scope){
	$scope.todos = [{name: "Julio Cesar"},{name: "FrontEnd Enginer"}];
	$scope.remove = {};

	$scope.addTodo = function () {
    	$scope.todos.push({name: $scope.todoText});
    	$scope.todoText = '';
    	$scope.getTotalTodos++;
  	};

  	$scope.removeTodo = function (index) {
  		$scope.remove = index;
  		$(".alertmsg").modal({backdrop:'static',show:true});
  	};

  	$scope.$on('confirmDelete', function(event) {
  		$scope.todos.splice($scope.remove, 1);
    	$scope.getTotalTodos--; 
  	});

  	$scope.getTotalTodos = $scope.todos.length;
}]);