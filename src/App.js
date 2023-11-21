import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={todo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setTodos([...todos,{id:Date.now(), text:todo, status:false}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
      {
        todos.map((value)=>{
          return (
        <div className="todo">
          <div className="left">
            <input onChange={(e)=>{
              setTodos(todos.filter(obj =>{
                if(obj.id===value.id){
                  obj.status = e.target.checked
                }
                return obj
              }))

            }} value={value.status} type="checkbox" name="" id="" />
            <p>{value.text}</p>
          </div>
          <div className="right">
            <i onClick={(e)=>{
              setTodos(todos.filter(obj =>{
                if(obj.id===value.id){
                  obj = null
                }
                return obj
              }))

            }} className="fas fa-times"></i>
          </div>
        </div>
          )
        })
      }
      {
        todos.map((value)=>{
          if(value.status){
            return(
              <h1>{value.text}</h1>
            )

          }
          return null
        })
      }
      </div>
    </div>
  );
}

export default App;