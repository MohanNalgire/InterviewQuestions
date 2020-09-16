# Angular interview multiple choice question

## ES6 JavaScript & TypeScript

## Angular CLI

## Angular Decorators

Reference:  
    <https://ultimatecourses.com/blog/angular-decorators>

**1   What are the types of decorators**  
    1 Class Decorators  
    2 Property Decorators  
    3 Method Decorators  
    4 Parameter Decorators  

**2   Write examples for Class decorators from Angular**  
    1 @Component  
    2 @NgModule  

**3   Write examples for Property decorators for properties inside classes from Angular**  
    1 @Input  
    2 @Output

**3   Write examples for Method decorators for methods inside classes from Angular**  
    @HostListener

**4   Write examples for Parameter decorators for parameters inside class   constructors from Angular**  
    1 @Inject  
    2 @Host  
    3 @Optional  
    4 @Self  
    5 @SkipSelf  

**5   what Angular decorators actually do?**  
    a Storing metadata  
    b Chaining decorators  

**6   @Host vs @optional**  
Reference:  
<https://medium.com/frontend-coach/self-or-optional-host-the-visual-guide-to-angular-di-decorators-73fbbb5c8658>

**7   @Self vs @SkipSelf**  
Reference:  
<https://www.fsjavascript.com/angular-reference/self-and-skipself>

**8   @Self vs @Host**  
Reference:  
<https://stackoverflow.com/questions/43728007/difference-between-self-and-host-angular-2-dependency-injection-decorators>

<https://levelup.gitconnected.com/angular-interview-question-what-is-the-difference-between-host-and-self-7910f19b1c35>

## Components

### Component

### Template

#### child component & parent component

##### @viewChild

##### @viewChildren

##### @contentChild

##### @contentChildren

### Styles

#### Component style inheritence

1   How to inherit css styles in child component from parent in Angular 5
<https://stackoverflow.com/questions/49516005/how-to-inherit-css-styles-in-child-component-from-parent-in-angular-5>

2   How and where to use ::ng-deep?
<https://stackoverflow.com/questions/46786986/how-and-where-to-use-ng-deep>

##### Angular View Encapsulation

<https://blog.angular-university.io/angular-host-context/>

1   What are the css modifiers in angular?

## Dependency Injection for component

## Directive

**1 NgIf vs NgSwitch?**  
**Answer:**  
The key difference between the ngIf solution is that by using NgSwitch we evaluate the expression only once and then choose the element to display based on the result.

**2 when to use ngClass vs ngStyle in Angular**  
**Answer:**  
<https://blog.angular-university.io/angular-ngclass-ngstyle/>

**3 What are different ways for writing conditional ngClass in Angular**  
**Answer:**  
Angular version 2,...,9 provides several ways to add classes conditionally:

type one
[class.my-class]="step === 'step1'"  

type two  
[ngClass]="{'my-class': step === 'step1'}"  

and multiple option:  

[ngClass]="{'my-class': step === 'step1', 'my-class2':step === 'step2' }"  

type three  
[ngClass]="{1:'my-class1',2:'my-class2',3:'my-class4'}[step]"  

type four  
[ngClass]="(step=='step1')?'my-class1':'my-class2'"  

## Built-in Directives

## Custom Directives

## Reactive Programming with RxJS

**1 What are streams?**  

**2 What is Reactive Programming?**  

**3 What are the essential concepts in RxJS which solve async event management**  
**Ansser:**  
**Observable:** represents the idea of an invokable collection of future values or events.
**Observer:** is a collection of callbacks that knows how to listen to values delivered by the Observable.  
**Subscription:** represents the execution of an Observable, is primarily useful for cancelling the execution.  
**Operators:** are pure functions that enable a functional programming style of dealing with collections with operations like map, filter, concat, reduce, etc.  
**Subject:** is the equivalent to an EventEmitter, and the only way of multicasting a value or event to multiple Observers.  
**Schedulers:** are centralized dispatchers to control concurrency, allowing us to coordinate when computation happens on e.g. setTimeout or requestAnimationFrame or others.  

**4 What are the multicasting operators in RxJs?**  
**Answer:**  
    1 share()
    2 publish()

**5 share() vs publish() + refCount()**  
**Answer:**  
They both use refCount() for managing subscriptions however
publish() + refCount() — as long as there is at least one subscriber to Subject, it will emit values. Once there are no subscribers Subject will be disconnected from Source. For all new subscribers if Source has completed they will receive “completed” emits, but if Source hasn’t completed Subject will re-subscribe to Source  
share() — as long as there is at least one subscriber to Subject, it will emit values. Once there are no subscribers Subject will be disconnected from Source. For any new subscriber no matter if Source has been completed or not it will subscribe to Source again using new Subject  

**6 What are different multicasting reply tyes with multicast() with subject type**  
**Answer:**  
    1 shareReplay()  
    publishReplay() + refCount()  
    2 publishBehavior()  
    publishBehavior() === multicast(new BehaviorSubject())  
    3 publishLast  
    publishLast() === multicast(new AsyncSubject())  

**7 What are the Categories of operators in RxJs**
Categories of operators  
Combination  
Conditional  
Creation  
Error Handling  
Multicasting  
Filtering  
Transformation  
Utility  
Reference:  
<https://www.learnrxjs.io/>  

## Pipes

**1 What are Pipes Provided by Angular**  
**Answer:**  
 1 AsyncPipe  
 2 CurrencyPipe  
 3 DatePipe  
 4 DecimalPipe  
 5 I18nPluralPipe  
 6 I18nSelectPipe  
 7 JsonPipe  
 8 KeyValuePipe  
 9 LowerCasePipe  
 10 PercentPipe  
 11 SlicePipe  
 12 TitleCasePipe  
 13 UpperCasePipe  

**2 Write name of pure pipes from built-in pipes.**  
 1 CurrencyPipe  
 2 DatePipe  
 3 DecimalPipe  
 4 I18nPluralPipe  
 5 I18nSelectPipe  
 6 LowerCasePipe  
 7 PercentPipe  
 8 TitleCasePipe  
 9 UpperCasePipe  

**3 Write name of impure pipes from built-in pipes.**  
 1 AsyncPipe  
 2 JsonPipe  
 3 KeyValuePipe  
 4 SlicePipe  

## Forms

**1 what are Form Control State**  
1 Dirty  
2 Pristine  
3 Touched  
4 Untouched  
5 Valid  
6 Invalid  

## Dependency Injection & Providers

**1 What are the The DI framework in Angular consists of 4 concepts working together**  
**Answer:**  
**Token**
This uniquely identifies something that we want injected. A dependency of our code.  
**Dependency**  
The actual code we want injected.
**Provider**  
This is a map between a token and a list of dependencies.  
**Injector**  
This is a function which when passed a token returns a dependency (or list of dependencies).  

**2 What is root injector and where we get this in Angular application**  
**Answer:**  
There is only one root injector for an app. Providing services at the root or AppModule level means it is registered with the root injector.  
There is just one service instance in the entire app and every class that injects service gets this service instance unless you configure another provider with a child injector.

**3 What is optional dependencies and how we can declare that and handle in Angular.**  
**Answer:**  
When a component or service declares a dependency, the class constructor takes that dependency as a parameter.  
You can tell Angular that the dependency is optional by annotating the constructor parameter with @Optional().
When using @Optional(), your code must be prepared for a null value.  
If you don't register a logger provider anywhere, the injector sets the value of logger to null.

**4 How Angular DI hierarchical injection system works and when instance get created?**  
**Answer:**  
Angular DI has a hierarchical injection system, which means that nested injectors can create their own service instances. Angular regularly creates nested injectors. Whenever Angular creates a new instance of a component that has providers specified in @Component(), it also creates a new child injector for that instance. Similarly, when a new NgModule is lazy-loaded at run time, Angular can create an injector for it with its own providers.

**5 Where the component can get services from?**  
**Answer:**  
A component can get services  
1 from its own injector,  
2 from the injectors of its component ancestors,  
3 from the injector of its parent NgModule, or from the root injector.

**6 What are the different levels of your app where we configure injectors.**  
**Answer:**  
You can configure injectors with providers at different levels of your app, by setting a metadata value in one of three places:  
In the @Injectable() decorator for the service itself.  
 The @Injectable() decorator has the providedIn metadata option, where you can specify the provider of the decorated service class with the root injector, or with the injector for a specific NgModule.  

In the @NgModule() decorator for an NgModule.  
 The @NgModule() and @Component() decorators have the providers metadata option, where you can configure providers for NgModule-level or component-level injectors.  

In the @Component() decorator for a component.  
 Components are directives, and the providers option is inherited from @Directive(). You can also configure providers for directives and pipes at the same level as the component.  

### Injectors

**1 How many injector hierarchies present in Angular?**  
**Answer:**  
There are two injector hierarchies in Angular:  
**1 ModuleInjector hierarchy—**  
configure a ModuleInjector in this hierarchy using an @NgModule() or @Injectable() annotation.  
ModuleInjector is configured by the @NgModule.providers and NgModule.imports property. ModuleInjector is a flattening of all of the providers arrays which can be reached by following the NgModule.imports recursively.  
Child ModuleInjectors are created when lazy loading other @NgModules.  

**2 ElementInjector hierarchy—**  
created implicitly at each DOM element. An ElementInjector is empty by default unless you configure it in the providers property on @Directive() or @Component().  

1 NUllInjector  
2 ModuleInjector  
3 root ModuleInjector  

**2 What are the Angular DI resolution modifiers?**  
**Answer:**  
Angular's resolution behavior can be modified with  
1 @Optional()  
2 @Self()  
3 @SkipSelf()  
4 @Host()  
Import each of them from @angular/core and use each in the component class constructor when you inject your service.  

**3 What is platform injector in Angular?**  
**Answer:**
The platformBrowserDynamic() method creates an injector configured by a PlatformModule, which contains platform-specific dependencies. This allows multiple apps to share a platform configuration. For example, a browser has only one URL bar, no matter how many apps you have running. You can configure additional platform-specific providers at the platform level by supplying extraProviders using the platformBrowser() function.  

## HTTPClient

**1 Which paramters decides return type of http service in HTTPClient methods?**  
**Answer:**  
Each request method has multiple signatures, and the return type varies based on the signature that is called (mainly the values of observe and responseType).  

**2 What are the methods of http request?**  
**Answer:**  
1 requst()  
2 delete()  
3 get()  
4 head()  
5 jsonp()  
6 options()  
7 patch()  
8 post()  
9 put()  

**3 How ways we can handle asynchronous operations in Angular?**  
**Answer:**  
In Angular there are two ways of handling these asynchronous operations.  
1 Promises  
2Observables  

**4 How to setup our application so we can inject and use the Http client library.**  
**Answer:**  
1 import the HTTPClient from @angular/http package  
2 provide the HTTPClient dependecies  
3 cofigure module dependency in @NgModule

**5 How to send the various types of HTTP requests in Angular.**  
**Answer:**  

**6 How to send custom headers with our requests in Angular http request.**  
**Answer:**  

**7 How to handle http errors.**  
**Answer:**  
**1 Promise errors**  
then with second argument as rejection or We can use the .catch() block in promise.  

**2 Observable errors**  
With observable we can use observer as  

```typescript
{  
    data => {  
        // For data operations  
    },  
    error => {  
        // For error handling
    },
    () => {
        // After completion
    }
}
```

observer is the object literal we pass into our .subscribe() (subscribe will invoke our Observable).  

**8 How to avoid duplicate HTTP Requests**  
**Answer:**  
By using RxJs operators we can do this now  
**1 ShareReplay**  
This makes shareReplay ideal for handling things like caching AJAX results, as it's retryable
**2 Publish()**  

**9 How to do HTTP Requests in Parallel, and combine the Result**  
**Answer:**  
One way of doing HTTP requests in parallel is to use the RxJs forkjoin operator  

**10 How to do HTTP Requests in sequence, and use the result of the first request to create the second request**  
**Answer:**  
One way of doing this is to use the switchMap operator.  

**11 How To get the results of two HTTP requests made in sequence**  
**Answer:**  
IF we would like to have both the data of the first HTTP request and deliver it together with the data of the second request, we could use a selector function, we can pass second argument to the switchMap function.

**12 Why we use HTTPClient services**  
The HTTP client service offers the following major features.  
1 The ability to request typed response objects.  
2 Streamlined error handling.  
3 Testability features.  
4 Request and response interception.  

**13 Why we need to use HTTP response object type as interface with the required properties and not a class.**  
**Answer:**  
To specify the response object type, first define an interface with the required properties. Use an interface rather than a class, because the response is a plain object that cannot be automatically converted to an instance of a class.  
Next, specify that interface as the HttpClient.get() call's type parameter in the service.  
example:

```typescript
export interface Config {
  heroesUrl: string;
  textfile: string;
}
```

**14 How to read the full response of the Angular http service**  
**Answer:**  
Tell HttpClient that you want the full response with the observe option of the get() method We need to use from observe options  
1 body  
2 events  
3 response  
as { observe: 'response' }  

**15 How we can view response headers and view them in to our code in http request and response in Angular.**  
**Answer:**  
Tell HttpClient that you want the full response with the observe option of the get() method We need to use from observe options  
1 body  
2 events  
3 response  
as { observe: 'response' }  

**16 When we need to use the http jsonp()**  
**Answer:**  
Apps can use the HttpClient to make JSONP requests across domains when a server doesn't support CORS protocol.
Angular JSONP requests return an Observable. Follow the pattern for subscribing to observables and use the RxJS map operator to transform the response before using the async pipe to manage the results.

In Angular, use JSONP by including HttpClientJsonpModule in the NgModule imports.  

**17 What are the scenarios wher we require non-JSON data**  
**Answer:**  
1 donwload file with text

**18 How to request the non-JSON data**  
**Answer:**  
We need to udpate the http method paramter options as {responseType: 'text'}

**19 How many types of errors can occur in http requests in Angular.**  
**Answer:**  
Two types of errors can occur.

The server backend might reject the request, returning an HTTP response with a status code such as 404 or 500. These are error responses.

Something could go wrong on the client-side such as a network error that prevents the request from completing successfully or an exception thrown in an RxJS operator. These errors produce JavaScript ErrorEvent objects.

### HTTP Interceptors

**1 Whby we use HTTP Interceptor**  
**Answer:**  
An HTTP Interceptor allows us to add some generic functionality to all our HTTP requests in only one place.

Interceptors are ideal for cross-cutting concerns like for example adding an authentication token header transparently to all the requests made by the HTTP client.  

**2 How many arguments interceptor method takes**  
**Answer:**  
The interceptmethod takes two arguments: the request being intercepted, and the next handler

**3 Why we use next.handle method in Angular http interceptor**  
**Answer:**  
The next.handle method needs to be called to continue the interceptor chain, and for the HTTP request to be made  
The next.handle method returns an observable, and this is then returned by the intercept method  

**4 How we can activate any interceptor method and apply it to any HTTP request made using HTTP client.**  
In order to activate this interceptor and apply it to any HTTP request made using the HTTP client, we need to configure it in our application module by adding it to the HTTP_INTERCEPTORS multi-provider.
example as  

```typescript
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [
        [  
            {  
            provide: HTTP_INTERCEPTORS, useClass:  AuthInterceptor,  
            multi: true
            }
        ]
    ],
    bootstrap: [AppComponent]
})
```

## Routing

## Unit Testing

**1 List down some of the Angular testing packages or dependencies which get installed with Angular application**
**Answer:**

1. jasmine-core
2. jasmine-spec-reporter
3. karma
4. karma-chrom-launcher
5. karma-cli
6. karma-coverage-istanbul-reporter
7. karma-jasmine
8. karma-jasmine-html-reporter

**2 Why use karma? what is Karma?**
**Answer:**
karma. Karma is a task runner for our tests. It uses a configuration file in order to set the startup file, the reporters, the testing framework, the browser among other things.

What is the Jasmine test framework?
**Answer:**
Jasmine is a JavaScript testing framework that supports a software development practice called Behaviour-Driven Development, or BDD for short. It’s a specific flavour of Test-Driven Development (TDD).

Jasmine, and BDD in general, attempts to describe tests in a human readable format so that non-technical people can understand what is being tested. However even if you are technical reading tests in BDD format makes it a lot easier to understand what’s going on.

What is test suit?

What is test spec?

What are matchers or what are the jasmin matchers?
**Answer:**
Matchers

1. toContain(member)
2. toThrow(string)
3. toThrowError(string);
4. toBe(instance);
5. toBeDefined();
6. toBeFalsy();
7. toBeNull();
8. toBeTruthy();
9. toBeUndefined();
10. toEqual(mixed);
11. toMatch(pattern);
12. toBeCloseTo(number, decimalPlaces);
13. toBeGreaterThan(number);
14. toBeLessThan(number);
15. toBeNaN();
16. toHaveBeenCalled();
17. toHaveBeenCalledTimes(number);
18. toHaveBeenCalledWith(...arguments);

Async-matchers

1. not
2. toBePending()
3. toBeRejected()
4. toBeRejectedWith()
5. toBeREjectedWithError()
6. toBeResolved()
7. toBeResolvedTo()
8. withcontext()

### 1. Code coverage

**1. How to configure test coverage for Angular**
**Answer:**
To create code-coverage reports every time you test, you can set the following option in the CLI configuration file, angular.json

```json
"test":{
    "options":{
        "codeCoverage":true
    }
}
```

### 2. Testing services

### 3. Basics of testing components

### 4. Component testing scenarios

### 5. Testing attribute directives

### 6. Testing pipes

### 7. Debugging tests

### 8. Testing utility APIs

## Common Angular testing scenarios

Testing Scenarios

Isolating Logic
Async Behavior
Spies and Mocks
User Input Events
Inherited Functionality
Application Events
Services
Input Variables
Output Variables
Life Cycle Methods
Mock Method Chains
HTTP Calls
