describe('A suite', function() {
  it('contains spec with an expectation', function() {
    expect(true).toBe(true);
  });
});

describe('The app `angularZero`', function() {
	it('is created', function() {
		angular.module('angularZero');
	});

	describe('The `mainCtrl`', function() {
		beforeEach(
			module('angularZero')
		);

		var scope = {};

		it('exists', 
			inject( function($controller) {
				console.log('Scope before: ', scope);
				var mainCtrl;
					mainCtrl = $controller('mainCtrl', { '$scope': scope });

				console.log('Scope after: ', scope);
				expect(mainCtrl).toBeDefined();
			})
		);

		it('on $scope has `currentController`', function() {
			expect(scope.currentController).toBeDefined();
		});

		it('`currentController` is "[Main Controller]"', function() {
			expect(scope.currentController).toEqual('[Main Controller]');
		});

		it('on $scope has .double()', function() {
			expect(scope.double).toBeDefined();
			expect(typeof scope.double).toEqual('function');
		});

		it('.double() to work properly"', function() {
			expect(scope.double(2)).toEqual(4);
		});
	});

	describe("Routes", function() {
		beforeEach(module('angularZero'));

		it("defined properly",inject( function($route) {
			expect($route.routes['/']).toBeDefined();
			expect($route.routes['/'].controller).toEqual('mainCtrl');
			console.log($route.routes['/']);
		}));

		describe("Works as intended", function() {
			it("on /", inject( function($location, $route, $rootScope, $compile) {
				$location.path('/');
				$rootScope.$digest();

				expect($route.current.controller).toBe('mainCtrl');

				var template = $compile('<div>Hello {{variableName}}ngular!</div>');
				console.log("template is the result of $compile(), it is a ", typeof template);

				var scope = $rootScope.$new();
				scope.variableName=42;

				var compiled = template(scope);
				console.log('compiled is the result of template(scope), it is an ', typeof compiled);

				console.log( "Before running scope.$digest()", compiled.text() );

				scope.$digest();

				console.log( "After scope.$digest()", compiled.text() );


				//angular.element($0).text()
				//.toEqual('[Main Controller]');
			}));
		})
	});
});
