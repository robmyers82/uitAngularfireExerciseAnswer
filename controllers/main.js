angular.module('uitexercise').controller('MainController', function($scope, Todo) {
	
	$scope.todosList = Todo.getTodos();
	$scope.editTodo = {};

	$scope.showAddTodo = function() {
		$("#addTodoModal").modal('show');
	};

	$scope.showEditTodo = function(todo_id) {
		$scope.editTodo = Todo.getTodo(todo_id);
		$("#editTodoModal").modal('show');
	};

	$scope.addTodo = function(newTodo) {
		Todo.addTodo(newTodo).then(function() {
			$("#addTodoModal").modal('hide');
		});
	};

	$scope.updateTodo = function() {
		Todo.saveTodo($scope.editTodo).then(function() {
			$("#editTodoModal").modal('hide');
		});
	};

	$scope.completeTodo = function(todo_id) {
		Todo.removeTodo(todo_id);
	};
});




















