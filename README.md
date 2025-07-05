React js

React js is small Ui library that allow the to build small self-contained Ui -component that used to track the user interface & it is frontend application
To write declarative code in javascript to efficiently assemble the use interface
In format in js and maintained by FaceBook and released by 2013
It is an open-source, cross platform javascript library which is used in the front-end.
It is used to develop spa(single page application).
Maintain by facebook.we can develop application where  the divide the UI into multiple components
We can divide our application into a small pieces of code with help of components

Features of react javascript
Components based architecture :- components are the core building block of react application ,they are used for reusability with the help of it we can divide our code into small pieces of code
Jsx: javascript extension
Vitualdom :- virtual representation of the real dom. Due to this the performance of the application is fast.
How we  create application
               Open folder in cmd   npx   create-react-app   application name
              Open folder in cmd    
               Cd folder name
                npm  start
Folder or directory structure
    Node modules :- core modules for  a react application
   Public :- where we define our public files  like assets and all 
     Index.html : it is a main file which execute when react
 Application is running
                <div id=’root’></div>
            Src : it is a main folder of the application where we create all component, services and all
           Component , services and all
              app.js : default component
              index.js  : it is a main entry point file
           Index.html it get the id root from index.html and load the app component in the div id root
   Components  
      Are the core building blocks  of react application. They are used for reusability
           Types of components 
Class components
  Class name start with capital letter
  Short is Rce
  
Function components
  Before the react 16.8 version we use only class components because we don't have a feature of state in the function component.
 React 16.8 version introduced hooks and other react feature, from there we use function components only to develop a application

Props (properties ) : props are used to pass data from parent to child component and props are read only.
States are used to manage data within components and we can change the state values.



Benefits

Performances Dew to Virtual DOM  nature the application is speed
Declarative with help of we can write the code in readable to describe the user interface
Components that can be shared and reused in other applications
dataBinding when we change the data in component then will update in component
   Change in data faster changes in UI also.


DOm (document object model) like-tree used to Update the Html elements
Dom create structure to hierarchical  order to use  Programming languages like Js to interacting with webpages
 And manipulate the node in html
Dom interacting the web page use programming  language or Script languages

React Dom is a package that contains DoM-specific methods used by react to enable itself to interact with the DOm
React Dom is used for multiple  web, mobile and Virtual Reality.
React contain the package method


Ui withOut ReactJs
Decomposton 
We can create small isolated individual components,
State Management
Performance
Debubbing


Es6 Features

Variable Declaration
Arrow function
Destructuring
Classes

Advantages

Scalable : -means will works in all sizes application and also big application like fb, Instagram
Compositional Ui : it is a small Compositional -Ui   to track user interface
Portable : means React components are move from one project to another
Performate : 

Disadvantages

Learn is curve
Documentation
Jsx it is javascript syntax extension where we can write html within javascript
    In react we have a babel transpiler to convert 
Statemangement
      Depending on how our application is structures managing the state and sharing 


Virtual Dom
 it is Ui kep memory and synced  with real dom , to maintain the fast application
It is reactDomPackage used in web

React uses virtual Dom to improve the performance when real Dom are updated only needed. The process of updating realDOM from virtual Dom is called the reconciliation.

With help of Jsx the complex code will make easy

Probs is a property will sent the argument to  a components and parent components to used 

Probs is a read only cannot modified the components  of its own can only the modify  parent components 

State is similar to the probs fully controlled by the components
State is used by the components. What want to display in screen mange by the components itself other components do not have the state
State :-  are used to manage data within a component. We can change state values because they are mutable

In react components state should not change by the directly they change by only the setter method  because of the react kept the trake of the state,




LifeCycle 

Every component has their own lifecycle.
Mounting the lifecycle method allows developers to execute code after a component is added to the DoM. it is ideal for adding the fetched data to the Dom nodes are adding event listeners to the Dom
componentDidMount

Updating  when their is any change in props and state
componentDidUpdate 
The lifeCycle method  allows developers to execute code after a component gets updated, which could be due to the updated, which  could be due to the updating of props and /or state 

Unmounting        when we leave from the component is removed from the Dom 
componentwillUnMount

React manages  the LifeCycle  of the components such as adding ,removing a components the DOM 

Components are building blocks of the application
Class components
Function components

Axios it is  3RD party library
Npm i axios  –save


Sort command to create function component
Rafce 
Bootstrap 
 
index.js
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";



Hooks 


Hooks are function feature and from there we can mange state in function components
Call react hool are called in function react
Hook are use in function components and improve speed of the webapplication
Hooks are used to build the react-app more effectively hooks are new addition to react 
Hooks are used in top level in a function 

 useRef hook;- 
                 It allows to directly create a reference to the Dom element in the function component if we change the value of useRef it will not re-render the webpage as state, It preserves values across various re-render .It returns a mutual Object.This object has a current property.

useMemo() hook :- is designed to optimise performance by memoizing expensive 
Computation
React stores the result of a function call and reuses it when the dependencies of that function have not changed, rather than recalculating the value on every render.


Usestate hook in order to enable our functional react components to have internal state which is managed by react   return a state variable and a function to set that variable in future, these are returned  as an array.

Use effect  useEffect is a React Hook that lets you synchronise a component with an external system.
  Will run after rendering the component  
To mange side effects it work as a lifecycle method of the  function component for all phases like mounting , updating and unmounting,
mounting   when a component is initilized or loaded
useeffect(()=> { },[])
updating   when there is any update in state or propse
useeffect(()=> { },[state, props])
 
unmounting  when we leave from the ciomponent(cleanup date)
useeffect(()=> { 
 return(){}
 },[])

Use content  
Use ref useRef is a React Hook that lets you reference a value that’s not needed for rendering.
Usemeno it used to speed up the application  it will render only dependencies 
   Will run during render the component  

Usecontext 


UseRef  hook : It allows to directly  create a reference to the Dom Element in the function component.if we change the value of  useRef it will not re-render the webpage as state. It preserver value re-render It return a mutable object, this object have a current property



    
useMemo, but the main difference is that useMemo will call the function passed to it whenever its dependencies change and will return the value of that function call. 
Is design to optimise performance by memoizing expensive computation
React store the result of a function call and reuse it when the dependencies of the function have n’t changed rather than recalculate the value on every render
 Or 
Is designed to optimize performance by memoizing expensive computation.
React store the result of  a function call and reuse it when the dependencies of that function haven’t changed,rather than recalculating the value on every render

useCallback on the other hand will not call the function passed to it and instead will return a new version of the function passed to it whenever the dependencies change 

useReducer also re-renders a component when the state changes just like useState
Custom Hook
Custom Hooks are named with "use" as prefix. For example, a custom hook could be named useLocalStorage or useAuthentication. In our case, the custom hook will be named useBoolean.
High Order Components
A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of the React API, per se. They are a pattern that emerges from React’s compositional nature.
HOC is pattern function except components return enhance components
================================================================================
Software developers typically deal with several types of states or approaches to state management including the following:
State management libraries are a specific type of software library used to ensure the implementations of front-end or back-end state management work together to successfully obtain and provide understanding and control of the application.
Local. The state of a local component -- such as an individual module -- which can't be accessed or modified by other components.
Inter-module. The state of parent and child components as data is passed between them. In this case, one state of one software module can affect the state of another.
Global. The global state of the application, which can include a more holistic look at how that application interacts with users and other enterprise applications.
contextAPI is a kind of feature used to share data with multiple components.with out passing data through the probs  
