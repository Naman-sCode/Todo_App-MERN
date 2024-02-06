// TODO APP -1:34:00 6.1 React Hooks
import { useState } from "react";
let counter = 4;

function App(){
  const[TODOS, setTODOS] = useState([{
    id:1,
    title: "Cohort",
    description: "Complete cohort assignments"},
    {
      id:2,
      title: "Internship",
      description: "Complete internship tasks"
    },{
      id:3,
      title: "College",
      description: "Complete college subjects."
    }]);

function addTODO(){
  // Better syntax
  setTODOS([...TODOS,{
    id: counter++,
    title: Math.random(),
    description: Math.random()
  }]);

  // OR 
  // ugly syntax
  // const newTODOS = [];
  // for(let i = 0; i < TODOS.length; i++){
  //   newTODOS.push(TODOS[i]);
  // }

  // newTODOS.push({
  //   id: 4,
  //   title: Math.random(),
  //   description: Math.random()
  // })

  // setTODOS(newTODOS);
}
return (
  <div>
    <button onClick={addTODO}>Add a todo</button>
    {TODOS.map(todo => <TODO key = {todo.id} title={todo.title} description={todo.description}/>) }
    {/*
    {TODOS.map(function(todo){
      return <TODO title={todo.title} description={todo.description}/>
    })}
    */}
  </div>
  )
}



function TODO({title, description}) { 
  return( 
  <div>
    <h1>
      {title}
    </h1>
    <h5>
      {description}
    </h5>
  </div>);
}

export default App

// Code to make only a certain header rerender and not the other components and app

// import React, { useState, Fragment } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';

// function App() {
//   return (
//     <div>    
//       <HeaderWithRerender />
//       <Header title="naman1"></Header>
//       <Header title="naman2"></Header>
//       <Header title="naman3"></Header>
//       <Header title="naman4"></Header>
//       <Header title="naman5"></Header>
//       <Header title="naman6"></Header>
//       <Header title="naman7"></Header>
//     </div>
//   );
// }
// function HeaderWithRerender(){
//   const [title, setTitle] = useState("My name is Naman.");
//   function updateTitle() {
//     setTitle("My name is " + Math.random());
//   } 

//   return <div>
//     <button onClick={updateTitle}> Update the Title</button>
//     <Header title={title}></Header>
//   </div>
// }
// const Header = React.memo( // memo - lets you skip the unchanged component and only re renders the changed one's
//   function ({ title }) {
//      return <div>{title}</div>;
// })


// export default App;



// Code work but the whole app rerenders.

// import React, { useState, Fragment } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';

// function App() {
//   const [title, setTitle] = useState("My name is Naman.");

//   function updateTitle() {
//     setTitle("My name is " + Math.random());
//   } 

//   return (
//     <Fragment>    
//       <button onClick={updateTitle}> Update the Title</button>
//       <Header title={title}></Header>
//       <Header title="naman2"></Header>
//     </Fragment>
//   );
// }

// function Header({ title }) {
//   return <div>{title}</div>;
// }

// export default App;

// Didn't work - most robably because { useState } and not { useState, Fragment was defined}

// import React,{ useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [title, setTitle] = useState("My name is Naman.");

//   function updateTitle() {
//     setTitle("My name is " + Math.random());
//   } 

//   return (
//     <Fragment>    
//       <button onClick={ updateTitle }> Update the Title</button>
//       <Header title="naman1"></Header>
//       <Header title="naman2"></Header>
//     </Fragment>
//   );
// }

// function Header({title}){
//   return <div>
//     {title}
//   </div>
// }

// export default App
