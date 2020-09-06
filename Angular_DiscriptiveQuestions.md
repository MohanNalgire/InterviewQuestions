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

## HTTP

## Routing

## Unit Testing

## Advanced Topics
