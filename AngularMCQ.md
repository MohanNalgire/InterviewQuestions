# Angular interview multiple choice question

## ES6 JavaScript & TypeScript

## Angular CLI
**1	Where we define our custom commonds for running builds and server environments in angular 7+.**   
	a package.json  
	b angular.json  
	c angular-cli.json   
	d tsconfig.json  
**Answer:	a package.json**  

**2	Which command is used for running production build**  
	a ng build --prod  
	b ng build local  
	c ng build productionEnv  
	D None of above  
**Answer:	a ng build --prod**  

**3	when we create module file with route which paramter we require**  
	a ng g module [module-name]--route  
	b ng g module [module-name] --routing or ng g m [module-name] --routing    
	c ng g module [module-name]--module-routing  
	d ng g module [module-name]  
**Answer: b ng g module [module-name] --routing or ng g m [module-name] --routing**   
https://stackoverflow.com/questions/42502449/generate-a-routing-module-while-creating-a-module-in-angular-cli

**4	How to run angular local server with secure connection**  
	a ng serve —-ssl true
	b ng serve --BASE_HREF 
	c ng serve --open
	d None
**Answer:	a ng serve —-ssl true**  
https://medium.com/@rubenvermeulen/running-angular-cli-over-https-with-a-trusted-certificate-4a0d5f92747a

**5	Which command is used to create interface**  
	a ng i  
	b ng generate interface Itest sometype  
	c ng g i   
	c None  
**Answer:	b ng generate interface Itest sometype**  

## Angular Decorators
**1	From following which are paramterised decorators.**  
	a @Host, @Optional @self, @SkipSelf  
	b @Component @NgModule  
	c @Directive  
	d None  
**Answer:	a @Host, @Optional @self, @SkipSelf**  
https://angular.io/api/core/Optional  
https://codecraft.tv/courses/angular/dependency-injection-and-providers/configuring/  

## Components
### Component
**1	Components @Component directive has inherited properties from @Directive is this correct statement.**  
	a yes  
	b no  
**Answer: a yes**  

**2	Which property of @Component is used to define current component dependancies.**  
	a select   
	b providers  
	c template  
	d templateUrl  
**Answer: b providers**  

### Template child component & parent component
#### @viewChild
#### @viewChildren
#### @contentChild
#### @contentChildren

### Styles
#### Component style inheritence

#### Angular View Encapsulation
**1	How many encapsulation strategies provided by Angular?**  
	a 3  
	b 4  
	c 5  
	d 3 Or 4  
**Answer:	d 3 Or 4**  

**2	Which property of @Component is used for Defines template and style encapsulation options available for Component's Component.**  
	a encapsulation  
	b viewEncapsulation  
	c styleUrls  
	d styles  
**Answer:	a encapsulation**  

**3	By default, the renderer uses _____________ if the view has styles, otherwise _______________________. **  
a ViewEncapsulation.Emulated, ViewEncapsulation.None  
b ViewEncapsulation.Emulated, viewEncapsulation.Native  
c viewEncapsulation.None, viewEncapsulation.Native  
d None  
**Answer:	a ViewEncapsulation.Emulated, ViewEncapsulation.None**  

**4	There is also a _________ method which uses the shadow DOM to encapsulate the view.  
a ViewEncapsulation.Native  
b ViewEncapsulation.None  
c ViewEncapsulation.Emulated  
d None  
**Answer:	a ViewEncapsulation.Native**  


## Dependency Injection for component	
**1	If we want an instance of a dependency to be shared globally and share state across the application we configure it on the ________**  
	a @NgModule  
	b @Component  
	c @Directive  
	d @Optional  
**Answer:	a @NgModule**  
	
**2	If we want a separate instance of a dependency to be shared across each instance of a component and its children, we configure it
	on the component’s_______________ property.**  
	a @providers  
	b @viewProviders  
	c @Component  
	d @Directive  
**Answer:	a @providers**  

**3	If we want a separate instance of a dependency to be shared across each instance of a component and only its view children, 
	we configure it on the component’s _____________ property.**  
	a @viewProviders  
	b @providers  
	c @Component  
	d @NgModule  
**Answer:	a @viewProviders**  


## Directive
1	Which are built in directives.
	a NgIf, NgFor
	b 


## Built-in Directives

## Custom Directives

## Reactive Programming with RxJS

## Pipes

## Forms

## Dependency Injection & Providers

## HTTP

## Routing

## Unit Testing

## Advanced Topics
