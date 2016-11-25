angular.module('uitexercise').factory('Todo', function($firebaseArray, $firebaseObject) {
	
	// @NOTE: this is the ref that you need to set to point at the list
	//		  of todos. Please see the instructions on the page for the location.
	var todoRef = firebase.database().ref().child("todos");

	var Todo = {
		todos: [],

		addTodo: function(newTodo) {
			return Todo.todos.$add(newTodo);
		},

		getTodos: function() {
			return Todo.todos;
		},

		getTodo: function(todo_id) {
			var individualTodoRef = todoRef.child(todo_id);
			return $firebaseObject(individualTodoRef);
		},

		saveTodo: function(theTodo) {
			return theTodo.$save();
		},

		removeTodo: function(todo_id) {
			var individualTodoRef = todoRef.child(todo_id);
			var theTodo = $firebaseObject(individualTodoRef);
			return theTodo.$remove();
		},
	};

	Todo.todos = $firebaseArray(todoRef);

	return Todo;
});