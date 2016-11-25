angular.module('livecode').factory('Student', function($firebaseArray, $firebaseObject) {
	var studentRef = firebase.database().ref().child("students");

	var Student = {
		students: [],

		addNewStudent: function(newStudent) {
			return Student.students.$add(newStudent);
		},

		getStudents: function() {
			return Student.students;
		},

		getStudent: function(student_id) {
			var individualStudentRef = studentRef.child(student_id);
			return $firebaseObject(individualStudentRef);
		},

		saveStudent: function(theStudent) {
			return theStudent.$save();
		},

		checkSpencer: function() {
			var spencerRef = studentRef.child('-KX76sTC5sPdonN1PoPO');
			var spencer = $firebaseObject(spencerRef);
			return spencer.$loaded().then(function(data) {
				console.log("This is Spencer's name: "+spencer.name);
				console.log(spencer);
			 	return data;
			});
		},
	};

	Student.students = $firebaseArray(studentRef);

	return Student;
});