describe("App Teste", function(){
	beforeEach(module("myTodo"));

	describe("Controller myTodo Teste", function(){
		var scope, controller;
		beforeEach(inject(function($rootScope, $controller){
			scope = $rootScope.$new();
			controller = $controller;
		}));
		
		it("myTodoController Controller", function(){
			controller("TodoController", {$scope: scope});
			expect(scope.todos).toBeDefined();
			expect(scope.addTodo).toBeDefined();
			expect(scope.removeTodo).toBeDefined();
			expect(scope.getTotalTodos).toBe(2);
		});
	});
});