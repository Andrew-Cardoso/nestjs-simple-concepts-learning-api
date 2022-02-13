-- Bad Way

	class Service {
		_repository: Repository;
		constructor() {
			this._repository = new Repository();
		}
	}

-- Better Way

	class Service {
		_repository: Repository;
		constructor(repository: Repository) {
			this._repository = repository;
		}
	}

-- Explanation

Inversion Of Control Principle
	- Classes should not create instances of its dependencies on its own

		but... instead of

		const controller = new Controller()

		we have to do

		const repository = new Repository();
		const service = new Service(repository);
		const controller = new Controller(service);

		is it better even if we write more code?

		well, we dont need to write more code, nestjs takes care of it

How Nest handles it?

-- Dependency Injection (DI)

	- Nest DI Container (or Injector)

		The DI Container looks for the params in constructor methods and automatically injects what is needed
			The injected classes are Singletown, which means only one instance of that class will be created for the whole app

Nest DI Container Flow
 1 - At startup, register all classes with the container
 2 - Container will figure out what dependency each class has
 3 - The container creates an instance of the class
 4 - Container creates all required dependencies and returns the instance
 5 - Container will hold onto the created dependency instances and reuse them when needed

