'use strict';

describe ('myApp.task module', function() {
    
    beforeEach(module('myApp.task'));
    
    describe('TaskCtrl controller', function(){
        it('should load stored task', inject(function($controller, $window)
{
    //spec body
    $window.localStorage.todos = '[{"text": "TODO #1", "done": false}]';
    
    var taskCtrl = $controller('TaskCtrl');
    expect(taskCtrl).toBeDefined();
    
    expect(taskCtrl.todos.length).toBe(1);
}));
        it('should add task', inject(function($controller, $window)
{
    //spec body
    $window.localStorage.todos = '[]';
    
    var taskCtrl = $controller('TaskCtrl');
    expect(taskCtrl).toBeDefined();
    
    expect(taskCtrl.todos.length).toBe(0);
     taskCtrl.todoText = 'TEST task';
     taskCtrl.addTodo();
     expect(taskCtrl.todos.length).toBe(1);
}));
    });
});

 