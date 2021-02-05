## Authgurad in Angular
Ans: https://codeburst.io/using-angular-route-guard-for-securing-routes-eabf5b86b4d1   

## what is Services in angular?
Ans: 1. JUST reusable typescript class can store data we can use in any component  
     2.  https://www.youtube.com/watch?v=n70ZoTl36F8   

## what is dependency injection? 
Ans: 1. our component dependent on other object this object is called as dependency injection     
    2.  https://www.youtube.com/watch?v=BfQrp6_L7nY

## what is Interceptor?
Ans: 1. https://medium.com/angular-in-depth/top-10-ways-to-use-interceptors-in-angular-db450f8a62d6   
    2. URL, Loader, converting, Header, Notification, Errors, profiling, fake backend, caching, Authentication,

## what is Provider and Types of Provider
Ans: 1. https://dzone.com/articles/simplifying-different-types-of-providers-in-angular  
    2. https://codecraft.tv/courses/angular/dependency-injection-and-providers/providers/

## what is subject and behavioural subject
Ans: 1. create subject object in service and pass to subject value using subject method   
    2. subscribe this menthod in component constructor.   
    3. behavioural subject - we can initital value in behaioural subject.   
    4.https://www.youtube.com/watch?v=Ft5aDAKuW5Y&t=418s  

## why do we write Injectabel in decorator 
Ans: 1. @injectable({
		name:
	})

## what is authentication and authorisation
Ans: 1. The auth guard uses the authentication service to check if the user is logged in, if they are logged in it checks if their role is authorized to access the requested route.   
    2. If they are logged in and authorized the canActivate() method returns true, otherwise it returns false and redirects the user to the login page.     
    3. first do user Authentication using AuthGuard - Can Activated then,  
    4. we can do authrisation for particular use on webApi using JWT token,- HttpInterceptor   
    5. https://www.c-sharpcorner.com/article authentication-and-authorization-in-angular       
    6. https://jasonwatmore.com/post/2019/08/06/angular-8-role-based-authorization-tutorial-with-example#:~:text=The%20auth%20guard%20uses%20the,user%20to%20the%20login%20page.   

## what is output of observables.
Ans: 1. https://www.javatpoint.com/rxjs-observables   
     
## what is Interceptors   
Ans: 1. https://medium.com/angular-in-depth/top-10-ways-to-use-interceptors-in-angular-db450f8a62d6    
    2. https://www.youtube.com/watch?v=CjAk6K7ehq4   

## How many types LIfe Cycle hooks?  
Ans: 1. when we insert selector in our application, cretae instance of this selector in our Dom and Angular component executes in some phases called hooks,     
    2. constructor   
    3. ngOnchanges  - called when Input property binding happens  
    4. ngOninit - called when component intialised at first time. 
	5. ngDocheck - called when angular detect any changes in Application and we can called if angular not able to detect any changes in application   
	6. ngAfterContentInit - called when intiliased the Ng-content directive in component.   
	7. ngAfterContentChecked - called when projected ng-content element in html    
	8. ngngAfterViewInit - called when parent and child component views are initialised in angular app     
	9. ngngAfterViewChecked - called when to child component view are project into angular app  
	10. ngDestroy - This is the cleanup phase just before Angular destroys the directive/component.   
	- https://www.youtube.com/watch?v=eaIg9Vy5fTU
	- https://www.tutorialspoint.com/angular2/angular2_lifecycle_hooks.htm

## what is diff ngAfterContentInit() and ngAfterViewInit()
Ans: 
	- https://www.youtube.com/watch?v=qdvGXSUk7Mo  
	- aftercontentinit loads when ng-content directive will     intitialise value in component.    
	- afterviewinit loads or initiliase when child componet view, directive are initialise.

## @viewchild in angular
Ans: - we can modified(manipulate) DOM element using ViewChild   
	- @viewChild (box) box : ElementRef get the element values  using templateRefrence variable       
	- using this.box.nativeElement.addClass   
	- using template referece linke #box with # and some id or any name   
	- we can acesses child component propertise and methods and execute    
	- https://www.youtube.com/watch?v=DXaIZmKAzQY
	- https://www.youtube.com/watch?v=nwUdFeM6sh8

## what is angular router? 
Ans: - Routing basically means navigating between pages or views.  
	- In angular app in main file app.module.ts, should be imports Router module.  
	  import { RouterModule} from '@angular/router';
		RouterModule.forRoot([
   		{
      			path: 'new-cmp',
      			component: NewCmpComponent
   		}
		])      
	RouterModule refers to the forRoot which takes an input as an array, which  in turn has the object of the path and the component.               
	Path is the name of the router and component is the name of the class, i.e., the component created.      
	- mention tag should be add in component file where we can create routing page.   
		<router-outlet></router-outlet>
	- https://www.tutorialspoint.com/angular4/angular4_routing.htm

 ## what are the difference between directive and component.
 Ans: 1. Directives are functions that are invoked whenever AngularJs’s HTML compiler($compile) finds it in DOM. 
	  It tells to attach a specified behavior to that DOM element (e.g. via event listeners).
	  create using @Directive decorator
	  Component is just simplified version of Directive. create using @component decorator.       
	2. A component is always elements (‘E’).
	  Directive can be attirbute,element,name,comment or css class.    
	3. for Component template are mandatory
	  for Directive is not required    
	4.component is used to break-up the application into smaller components.    
	  Directive is used for design re-usable components.   
	5. Component has views, viewsEncapsulation can be defined
	  Directive dont have views.    
	6. Only one component can be used in DOM element.
	  there can be more than one directive in Dom element  
	7. For register comoponent we use @Component meta-data annotation.      
	  For Directive we use @Directive meta-data annotation.
	- https://www.geeksforgeeks.org/difference-between-directive-and-component-in-angularjs/

## How do you prevent accessing specific section of your application through router.
Ans: - Use route guards to prevent users from navigating to parts of an app without authorization   
	- Route Guards are available in angular
		1.CanActivate  
		2.CanActivateChild  
		3.CanDeactivate  
		4.Resolve  
		5.CanLoad     
	- https://angular.io/guide/router

## what is ng-content and ng-container
Ans: - ng-content : add dyanmicaly html content in using <ng-content> directive in compoent view html.  
	- https://www.youtube.com/watch?v=HCO4nteOEn8&list=PLLhsXdvz0qjL1HVD2jAtlvoDmS5qj0OvA&index=21   
	- ng-container:https://www.youtube.com/watch?v=itG2hii60bg&list=PLLhsXdvz0qjL1HVD2jAtlvoDmS5qj0OvA&index=22   
	- https://www.digitalocean.com/community/tutorials/angular-ng-container-element  
	- avoid redundant element. while we are using two structural directive in one to each other.      
	- while we use ngFor in ngIf that time DOM create redundant element, so avoid this we can use ng-container.  

## what is @HostListener
Ans:- https://www.youtube.com/watch?v=s9NqICibhIc  
	- listen component, directive host , events in component using @HostListener directive.

## what is view encapsulation 
Ans: - restict or hide data from other component for removing this encapsulation we can us encapsulation property in component    
	- angular add unique identitfirer to each component as attribute ie shalloe-DOM.   
	- https://www.youtube.com/watch?v=bUITojTRMnM

## IN Route how to access RouteParams 
Ans: - https://medium.com/@tiboprea/accessing-url-parameters-in-angular-snapshot-vs-subscription-efc4e70f9053#:~:text=paramMap%20%3F,from%20within%20the%20same%20component   
	- https://www.samjulien.com/how-to-use-route-parameters-in-angular

## what is ngOninit
Ans: - it is lifeCycle hook of component in angular   
	- we can initialise the variable or function while in this function at the comoponent initialisation.

## Types communication between components
Ans: - @Input Decorator- child to parent  
	    -  @Output Decorator - parent to child  
		- use @Output() ex. = new EventEmitter<>    
		- use one of the function for sending data use emitt() methid.  
		- mostly used event binding and property binding.    
	    - @viewChild Decorator - Parent to child  
	        - Create Service.  
	    - https://www.youtube.com/watch?v=yHOhTgok0dw  
	    - https://www.youtube.com/watch?v=j91_u74HPgg&list=TLPQMjQxMTIwMjBjFegTUVibSQ&index=2   
	    - https://www.youtube.com/watch?v=3srOOe_hI-I&list=TLPQMjQxMTIwMjBjFegTUVibSQ&index=1

## How to communicate with sibling component ,
Ans: - using Subject Object from Rxjs library in service by      creating subject object and Next() method for sending data.   
	- we should Subscribe this Subject data in compoent.   
	 - Create Service    
	- https://www.youtube.com/watch?v=Ft5aDAKuW5Y&t=17s
	- https://www.youtube.com/watch?v=oj6Tae2oSo0

## what is RXJs 
Ans: - use for handling Aysnc request  
	- it is kind of data type it will retun observable streams and we can handles this streams using subscribes.  
	 - https://www.youtube.com/watch?v=dPqsP84GOwE  
	 - https://www.youtube.com/watch?v=u59iD_ng5No  
	 - https://www.youtube.com/watch?v=mNm8kXeqsm4  
	 - https://www.youtube.com/watch?v=sjFkkUwv4_k  
	 - https://www.youtube.com/watch?v=DumuLATsHnU&  list=PLLhsXdvz0qjI68a8tLUUMyXmNhl608mcn&index=12  
	 - https://www.youtube.com/watch?v=dAmp4Sst5fc&  list=PLLhsXdvz0qjI68a8tLUUMyXmNhl608mcn&index=16  
	 - https://www.youtube.com/watch?v=9n033dPwuGc  
    
## What is diff between observables and promise 
Ans: - Promise - 1. For Async requsest only  
		         2. Return Single Value - resolve(yes),reject(No)  
	- Observable -  1. async or sync    
		           2. Return Stream of values  
	- https://www.youtube.com/watch?v=k8Q8SFlBCks&   list=TLPQMjQxMTIwMjCD7dvFEQGcKA&index=2

## What is subject in RXJS
Ans:- using subject propertise in service by creating subject object and Next() method for sending data   
	- https://www.youtube.com/watch?v=oj6Tae2oSo0

## How to data shared between two Modules in angular
Ans: - we should create shared module for common components and directives.    
	- https://www.youtube.com/watch?v=YWeIMqjtCTs&list=PLLhsXdvz0qjL1HVD2jAtlvoDmS5qj0OvA&index=60  

## what is pure and impure pipes in Angular
Ans: - Pure pipe - angular executes changes only changes in pipe parameters or values   
	- impure pipe - add prperty Pure:false, in Pipe, this executes every change detect in view component.   
	- https://www.youtube.com/watch?v=ZGwcLYujQlU&list=PLLhsXdvz0qjL1HVD2jAtlvoDmS5qj0OvA&index=47

## what is boostrap in angular
Ans:   https://medium.com/learnwithrahul/ways-of-bootstrapping-angular-applications-d379f594f604


## what is resolver
Ans: - https://dzone.com/articles/understanding-angular-route-resolvers-by-example#:~:text=A%20Resolver%20is%20a%20class,may%20also%20like%3A%20Angular%20Resolvers.
	- https://codeburst.io/  understanding-resolvers-in-angular-736e9db71267  
	- A Resolver is a class that implements the Resolve interface of Angular Router. In fact, Resolver is a service that has to be [provided] in the root module.    
	  Basically, a Resolver acts like middleware, which can be executed before a component is loaded   
	- use Route Resolver   
	 add resolve property in path with reslove service name    
	- in service we have to use reslove method with argument route:ActivateRouteSnapshot, State:RouterStateSnapshot

## what is template and Reactive driven form.
Ans: - Template Driven Form- import FormsModule from @angular/form
		- use template reference variable #uname for accessing control value or we can access whole form   
		- use ngFormGroup directive for form with (ngSubmit) = onSubmit() method  
		- create function in component with default argument ngForm(if we want value in object format)  
			- HtmlFontElement  
 		- use name attribute  
		- use NgModel for binding control value      
	 
	- Reactive driven form. import {ReactiveFormModule} from @angular/form
		- use formControlName directive for accessing control value
		- use [ngFormGroup] directive for form with ngSubmit method
		- create function in component. create object formGroup object inside we can use formControl for accessing control value.
    
## what module need to import module for Reactive Form
Ans: ReactivFormModule

## what is common module 
Ans: - while creating feature module should be include common module in import due accessing inbuild directives and directive    
	- https://www.youtube.com/watch?v=nby-S987m6Q&list=PLLhsXdvz0qjL1HVD2jAtlvoDmS5qj0OvA&index=59

## what is Providers
Ans: - https://codecraft.tv/courses/angular/dependency-injection-and-providers/providers/ 

## what is export and import in angular
Ans: - it is new keyword for define class level component.  
	- we can import and export particular module in whole angular application

## what is metadata in angular 
Ans: it data about data, means we wrap data for class

## what is decorator and hw many types of decorators 
Ans:- https://medium.com/@madhavmahesh/list-of-all-decorators-available-in-angular-71bdf4ad6976.

## I want load particular module bydefault wht we do in angular?
Ans: using or add path and use redirectTo property

## ng-Switch Structural directive
Ans: - <container_element [ngSwitch]="switch_expression">  
         	<inner_element *ngSwitchCase="match_expresson_1">...</inner_element>  
    		<inner_element *ngSwitchCase="match_expresson_2">...</inner_element>  
    		<inner_element *ngSwitchCase="match_expresson_3">...</inner_element>  
    		<inner_element *ngSwitchDefault>...</element>  
	</container_element> 

. what is file structure of Angular.
67.create Custom validation in angular.

68.Diff class vs clouser

69.How to access class private data outside of the class 

70.what are TypeScript Accessor

71.TypeScript supports three access modifiers - public, private, and protected.

72.RxJX operators 

73.RxJX combination operators

74.diff in 
 	mergeMap
	switchMap
	concatMap

75.deep copy vs shallow copy
	- https://www.geeksforgeeks.org/what-is-shallow-copy-and-deep-copy-in-javascript/

76.call by value vs call by reference 

77.Hoisting 

78.var and function 

79.console examples

80.undefined vs not defined 

81.{} === {}

82.css flexbox

83.css overrive css - specificity

84.css viewport 

85.how to override !import

86.meta data 