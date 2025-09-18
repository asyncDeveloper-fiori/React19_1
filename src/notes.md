the entry point to a react app is index.html
then we move to main and app files

COMPONENTS
-> a samll part of ui (mostly repeating parts are made using components and reusing them)
-> there can be components inside components (nested)
-> used by importing and using as tags <App /> or <App> </App>
-> Always starts with capital letter as small letter will be termed as html elements

function Fruit(){
return (

<h1>Apple</h1>
)
}
export default Fruit;

UPGRADE REACT VERSION
check version in package.json for react and react dom
to upgrade or downgrade change version in package.json and delete node modules and run npm i

STATE
to use variables in react app which updates in realtime
as normal variables needs to be re rendered to show new values so we use states so that the variable can be re rendered without reloading the whole web page
States are like containers to store varibales, react re-render it to show updated variables
These are mutable and dynamic
we need to use useState Hook
Hooks are special features for functional components , can be identified by seeing use at the begining

PROPS
used to transfer data from one component to another
can be consumed in two ways
let we sent name from app component to user component then in user component it can be accessed as data.name or props.name or as directly {name}

CONTROLLED COMPONENT
means there is a form inside a component and the input fields are controlled by state of react

HOOKS
special methods in functional comaponents that serve some functionality like dom manipulation, life cycle method etc.

useEffect Hook
to remove side effects from inside and outside of components
useEffect(()=>{
//code
},[state or props])
side effects means when a state or a prop updates then all the functions called are re called to stop this we use useEffect

LIFECYCLE METHODS
there are 3 methods mounting , updating and unmounting
mounting -> the time when a component is rendered onto the screen
updating -> some element of the component is updated and re-rendered
unmounting -> when the component is removed

useEffect in mounting
useEffect(()=>{

},[]);

useEffect in updating
useEffect(()=>{

},[state1 , state2 , prop1,prop2]);

useEffect in unmounting
useEffect(()=>{

});

useRef (ReferenceComponent)
it is used to pass the reference of a control so that it can be manipulated
like we can manipulate the style, values, focus etc

UNCONTROLLED COMPONENTS
means there is a form inside a component and the input fields are not controlled by state of react, we directly get the value by dom element

FORWARD REF (FwdRefComponent)
Transferring reference from parent component to child component
we use props.ref to use the ref transferred from parent to child

PURE COMPONENT
pure function are those whose output remains same if the input remains same
pure component are those that do no affect the things outside the component (data can only comme as pros)

DERIVED STATE
States whose values are derived from the values of other states or variables or props in the component.
So not required extra states can be declared are normal variables or constants.
Increase performance as more number of states slows down the application.

FRAGMENT IN REACT JS
It can be used in place of parent element and doesn't generate any html element
<Fragment> </Fragment> also used as <> </>

CONTEXT API
Suppose there are various components and one inside another like
inside App there is college and in college there is student and inside it there is student
so to pass data from app to student we use context api so we can transfer directly from app to student without passing props to each level
prop drilling passing props to each level from parent to child


REACT ROUTER
While using with react use the library not the framework (easy)
Client side routing -> means there is no request from server, frontend app on browser handles routing by itself
Lesser load on server
Browser router -> component that enables client side routing using browser's history API
Routes -> it renders appropriate component based on current URL, component
Route -> It defined a path and a component to be rendered.