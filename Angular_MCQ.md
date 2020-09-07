# Angular interview multiple choice question

## ES6 JavaScript & TypeScript

## Angular CLI

**1Where we define our custom commonds for running builds and server environments in angular 7+.**  
a package.json  
b angular.json  
c angular-cli.json  
d tsconfig.json  
**Answer:a package.json**  

**2Which command is used for running production build**  
a ng build --prod  
b ng build local  
c ng build productionEnv  
D None of above  
**Answer:a ng build --prod**  

**3when we create module file with route which paramter we require**  
a ng g module [module-name]--route  
b ng g module [module-name] --routing or ng g m [module-name] --routing  
c ng g module [module-name]--module-routing  
d ng g module [module-name]  
**Answer: b ng g module [module-name] --routing or ng g m [module-name] --routing**  
Reference:
<https://stackoverflow.com/questions/42502449/generate-a-routing-module-while-creating-a-module-in-angular-cli>  

**4How to run angular local server with secure connection**  
a ng serve —-ssl true  
b ng serve --BASE_HREF  
c ng serve --open  
d None  
**Answer:a ng serve —-ssl true**  
Reference:
<https://medium.com/@rubenvermeulen/running-angular-cli-over-https-with-a-trusted-certificate-4a0d5f92747a>  

**5Which command is used to create interface**  
a ng i  
b ng generate interface Itest sometype  
c ng g i  
c None  
**Answer:b ng generate interface Itest sometype**  

## Angular Decorators

**1From following which are paramterised decorators.**  
a @Host, @Optional @self, @SkipSelf  
b @Component @NgModule  
c @Directive  
d None  
**Answer:a @Host, @Optional @self, @SkipSelf**  
Reference:
<https://angular.io/api/core/Optional>  
<https://codecraft.tv/courses/angular/dependency-injection-and-providers/configuring/>  

## Components

### Component

**1Components @Component directive has inherited properties from @Directive is this correct statement.**  
a yes  
b no  
**Answer: a yes**  

**2Which property of @Component is used to define current component dependancies.**  
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

**1How many encapsulation strategies provided by Angular?**  
a 3  
b 4  
c 5  
d 3 Or 4  
**Answer:d 3 Or 4**  

**2Which property of @Component is used for Defines template and style encapsulation options available for Component's Component.**  
a encapsulation  
b viewEncapsulation  
c styleUrls  
d styles  
**Answer:a encapsulation**  

**3By default, the renderer uses _____________ if the view has styles, otherwise _______________________.**  
a ViewEncapsulation.Emulated, ViewEncapsulation.None  
b ViewEncapsulation.Emulated, viewEncapsulation.Native  
c viewEncapsulation.None, viewEncapsulation.Native  
d None  
**Answer:a ViewEncapsulation.Emulated, ViewEncapsulation.None**  

**4There is also a _________ method which uses the shadow DOM to encapsulate the view.**  
a ViewEncapsulation.Native  
b ViewEncapsulation.None  
c ViewEncapsulation.Emulated  
d None  
**Answer:a ViewEncapsulation.Native**  

## Dependency Injection for component

**1If we want an instance of a dependency to be shared globally and share state across the application we configure it on the ________**  
a @NgModule  
b @Component  
c @Directive  
d @Optional  
**Answer:a @NgModule**  

**2If we want a separate instance of a dependency to be shared across each instance of a component and its children, we configure it on the component’s_______________ property.**  
a @providers  
b @viewProviders  
c @Component  
d @Directive  
**Answer:a @providers**  

**3If we want a separate instance of a dependency to be shared across each instance of a component and only its view children, we configure it on the component’s _____________ property.**  
a @viewProviders  
b @providers  
c @Component  
d @NgModule  
**Answer:a @viewProviders**  

## Directive

**1Directives are components without a _____.**  
a NgIf, NgFor  
b style  
c view & template  
d encapsulation  
**Answer:c view & template**  

**2 Everything you can do with a directive you can also do with a component. But not everything you can do with a component you can do with a directive.**  
a yes
b no
**Answer:a yes**  

**3 The NgIf directive is used when you want to display or remove an element based on a condition. If the condition is false the element the directive is attached to will be removed from the DOM**  
a yes
b no
**Answer:a yes**  

**4 The difference between [hidden]='false' and \*ngIf='false' is that the first method simply hides the element. The second method with ngIf removes the element completely from the DOM.**  
a yes
b no
**Answer:a yes**  

**5 We can’t have two structural directives, directives starting with a \*, attached to the same element.**  
a yes  
b no  
**Answer: a yes**  

**6 If we are faced with multiple conditions a cleaner alternative to multiple nested NgIf statements is the NgSwitch series of directives.**  
a yes  
b no  
**Answer: a yes**  

**7 The expression passed on to ngClass in Angulr can be:**  
a an object  
b an array  
c a string  
d All above
**Answer: d All above**  

## Built-in Directives

## Custom Directives

## Reactive Programming with RxJS

**1Following are different subjects**  
a Subject, ReplySubject, BehaviourSubject, AsyncSubject  
b Share, refCount, Multicast, ReplayShare, publish  
c a & b  
d None  
**Anser: a Subject, ReplySubject, BehaviourSubject, AsyncSubject**  

**2What are type of observale?**  
a hot and cold  
b array and object  
c subject, schedulers  
d subject, subscribe, schedulers  

**3 Hot observables are multicast as all subscribers get data from the same producer.**  
a yes
b no
**Anser: a yes**  

**4 Cold observables are unicast as each subscriber gets data from different producer.**  
a yes
b no
**Anser: a yes**  
Reference:
<https://itnext.io/the-magic-of-rxjs-sharing-operators-and-their-differences-3a03d699d255>

**5 publish() === multicast(new Subject()) in RXJs multicasting**  
a yes
b no
**Answer: a yes**  
publish() uses Subject instance — multicast(new Subject())

**6 share() === multicast(() => new Subject()).refCount() in RXJs multicasting**  
a yes
b no
**Answer: a yes**  
share() uses factory function that returns Subject instance — multicast(() => new Subject()).refCount()

## Pipes

**1 KeyValuePipe transforms Object or Map into an array of key value pairs.**  
a yes
b no
**Answer: a yes**  

**2 KeyValuePipe transforms Object or Map into an array of key value pairs, and this is a impure pipe.**  
a yes  
b no  
**Answer: a yes**  

**3 JsonPipe Converts a value into its JSON-format representation. Useful for debugging**  
a yes  
b no  
**Answer: a yes**  

**4 JsonPipe Converts a value into its JSON-format representation. Useful for debugging, and this is a impure pipe**  
a yes  
b no  
**Answer: a yes**  

**5 AsyncPipe accepts as argument an _________, calls subcribe or attaches a then handler, then waits for the asynchronous result before passing it through to the caller.**  
a observable or a promise  
b observable or subject  
c subject or subscriber  
d None  
**Answer: a observable or a promise**  

**6 With AsyncPipe we can use promises and observables directly in our template, without having to store the result on an intermediate property or variable.**  
a yes  
b no  
**Answer: a yes**  

**7 we  use the @Pipe decorator to create pipes.**  
a yes  
b no  
**Answer: a yes**  

## Forms

**1 _________ and ________ approaches to creating forms in Angular.**  
a template-driven, model-driven  
b template, style  
c tempalte, arrayFor  
d Node  
**Answer: a template-driven, model-driven**  

**2 Since we want to handle the form validation ourselves we can switch off this behaviour by adding ____________ to the form element.**  
a novaliate  
b validate  
c action  
d submit  
**Answer: a novalidate**  

**3 We represent the form as a model composed of instances of __________ and ____________.**  
a FormGroups, FormControls  
b FormsModule, Form  
c FormArray, FormBuilder  
d None  
**Answer: a FormGroups, FormControls**  

**4 We use the ____________ directive to map each form control in the template with a named form control in the model.**  
a FormArray  
b formControlName  
c Formcontrols  
d Nonde  
**Answer: b formControlName**  

**5 We can also associate a group of template form controls to an instance of a form group on our model using _________________ directive.**  
a formGroupName  
b formControlName  
c formArray  
d FormsModule  
**Answer: a formGroupName**  

**6 Then by using directives such as _________, _____________ and ___________ we linked our HTML form to our form model.**  
a formGroup, formControlName, formGroupName  
b formArray, FormControls, FormsModule  
c a & b  
d None  
**Answer: a formGroup, formControlName, formGroupName**  

**7 We can get a reference to form control instances in our template through the controls property of our _____ model.**  
a form  
b tempalte  
c componet  
d class  
**Answer: a form**  

**8 Both _________ and __________ expose an observable called valuesChanged. By subscribing to this observable we can react in real-time to changing values of an individual form control, or a group of form controls.**  
a FormControls, FormGroups  
b FromsModule, ReactiveFormsMOdule  
c a & b  
d None  
**Answer: a FormControls, FormGroups**  

**9 These formGroup, formGroupName, formControl and formControlName directives are from the ReactiveFormsModule and used for model-driven forms.**  
a yes
b No
**Answer: a yes**  

**10 The directives we need to build template-driven forms are in the _____________**  
a FormsModule  
b ReactiveFormsMOdule  
c a & b  
d None  
**Answer: a FormsModule**  

**11 One of the directives pulled in via the FormsModule is called NgForm.This directive has a selector which matches the \<form> tag.**  
a true  
b false  
**Answer: a true**  

**12 by adding FormsModule to our NgModule imports, our template form is already associated with an instance of the NgForm directive.**  
a true  
b false  
**Answer: a true**  

**13 In template-driven forms we need Angular to create the model form controls for us for each template form control. To do that we need to do two things to each template form control:
1 Add the NgModel directive. 2 Add the name attribute.**  
a true  
b false  
**Answer: a true**  

**14 The NgModel directive creates the FormControl instance to manage the template form control and the name attribute tells the NgModel directive what key to store that FormControl under in the parent FormGroup,**  
a true
b false
**Answer: a true**  

**15 This code `<input ... [(ngModel)]="email" >` is short form `<input ... [ngModel]="email" (ngModelChange)="email = $event" >`**  
a true  
b false  
**Answer: a true**  

**16 The [( )] syntax is a combination of the syntax for input property binding [] and output event binding ().**  
a true  
b false  
**Answer: a true**  

**17 In the template-driven approach we define the validators via directives and HTML5 attributes in our template itself.**  
a true  
b false  
**Answer: a true** 

## Dependency Injection & Providers

## HTTP

## Routing

## Unit Testing
