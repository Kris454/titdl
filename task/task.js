'use strict';

angular.module('myApp.task', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/task', {
        templateUrl: 'task/task.html',
        controller: 'TaskCtrl'
    });
}])



.controller('TaskCtrl',['$window',function($window) {
    var taskCtrl = this;
    taskCtrl.todos = [];
    taskCtrl.error = '';
    taskCtrl.todoText = '';
    if($window.localStorage.todos){
        taskCtrl.todos = JSON.parse($window.localStorage.todos);
    }
    
    taskCtrl.addTodo = function(){
        if(taskCtrl.todoText == ''){
            taskCtrl.error = 'Nie podałeś zadania';
            return;
        }
    taskCtrl.todos.push({text: taskCtrl.todoText, done : false});
    taskCtrl.todoText = '';

    taskCtrl.saveToLocalStorage();
    };
   
    taskCtrl.saveToLocalStorage = function() {
        $window.localStorage.todos = JSON.stringify(taskCtrl.todos);
    };
    
    taskCtrl.deleteTodo = function(){
        var oldTodos = taskCtrl.todos;
        taskCtrl.todos = [];
        
        angular.forEach(oldTodos, function(todo) {
        if (!todo.done)  taskCtrl.todos.push(todo);
        });
        taskCtrl.saveToLocalStorage();
    }

    
}]);