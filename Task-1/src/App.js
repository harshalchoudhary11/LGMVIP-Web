import './App.css';
import React, { useEffect, useState } from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri'
import { FiThumbsUp } from 'react-icons/fi'

function App() {

  const [NewTitle, setNewTitle] = useState('');
  const [Description, setNewDescription] = useState('');
  const [AllTodos, setTodos] = useState([]);
  const [fullScreen, setfullScreen] = useState(false);
  const [completeTask, setCompleteTask] = useState([]);

  const AddTodo = () => {

    let Time = new Date();
    let dd = Time.getDate();
    let mm = Time.getMonth() + 1;
    let yyyy = Time.getFullYear();
    let h = Time.getHours();
    let m = Time.getMinutes();
    let s = Time.getSeconds();
    let AddOn ="  "+dd + ' /' + mm + ' /' + yyyy+" "+"( "+h+"  ."+m+" . "+s+" )";

    //ADD Item In Todos
    let NewTodoItem = {
      title: NewTitle,
      Description: Description,
      AddOn: AddOn,
    }
    //Create And Push New Todo
    let UpdatedTodoArray = [...AllTodos];
    UpdatedTodoArray.push(NewTodoItem);
    setTodos(UpdatedTodoArray);
    localStorage.setItem('todolist', JSON.stringify(UpdatedTodoArray));
  };

  // In Which We Delete Todos On Todo 
  const DeleteTodo = (index) => {
    let removeTodo = [...AllTodos];
    removeTodo.splice(index, 1);

    localStorage.setItem('todolist', JSON.stringify(removeTodo));
    setTodos(removeTodo);
  }

  //Delete Completed To Todo
  const DeleteCompletedTodo = (index) => {
    let reducedTodo = [...completeTask];
    reducedTodo.splice(index, 1);

    localStorage.setItem('CompleteTask', JSON.stringify(reducedTodo));
    setCompleteTask(reducedTodo)
  }

  //in Which We Completed And ToDo Item
  const CompletedTodo = (index) => {
    let Time = new Date();
    let dd = Time.getDate();
    let mm = Time.getMonth() + 1;
    let yyyy = Time.getFullYear();
    let h = Time.getHours();
    let m = Time.getMinutes();
    let s = Time.getSeconds();
    let CompletedOn = dd + ' /' + mm + ' /' + yyyy+" "+"( "+h+"  ."+m+" . "+s+" )";
    let filteredItem = {
      ...AllTodos[index],
      Description: Description,
      CompletedOn: CompletedOn,
    };

    let updatedCompletedArr = [...completeTask];
    updatedCompletedArr.push(filteredItem);
    setCompleteTask(updatedCompletedArr);
    DeleteTodo(index, 1);
    localStorage.setItem('CompleteTask', JSON.stringify(updatedCompletedArr));
  }

  useEffect(() => {
    let SavedTodo = JSON.parse(localStorage.getItem('todolist'));
    let SavedCompletedTodo = JSON.parse(localStorage.getItem('CompleteTask')
    );
    if (SavedTodo) {
      setTodos(SavedTodo);
    }
    if (SavedCompletedTodo) {
      setCompleteTask(SavedCompletedTodo);
    }
  }, []);

  return (
    <div className='App'>
      <h1 className='Title'>My Todos</h1>
      <div className='Wrapper'>
        <div className='Input'>
          <div className='todo-input'>
            <label>Title</label>
            <input
              type="text"
              value={NewTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="What's the Task title" />
          </div>

          <div className='todo-input'>
            <label>Description</label>
            <input type="text"
              value={Description}
              onChange={(e) => setNewDescription(e.target.value)}
              placeholder="What's the Task Description" />

          </div>

          <div className='todo-input'>

            <button
              type='button'
              onClick={AddTodo}
              className='Impo-Btn'>
              ADD
            </button>

          </div>
        </div>

        <div className='Button-Tab'>
          <button
            className={`SecondButton ${fullScreen === false && 'active'}`}
            onClick={() => setfullScreen(false)}>
            ToDo
          </button>

          <button
            className={`SecondButton ${fullScreen === true && 'active'}`}
            onClick={() => setfullScreen(true)}>
            Completed
          </button>
        </div>


        <div className='todo-list' >

          {fullScreen === false && AllTodos.map((item, index) => {
            return (
              <div className='todo-list-item' key={index}>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.Description}</p>
                  <p><small>Task Addon:{item.AddOn}</small></p>
                </div>

                <div>
                  <FiThumbsUp
                    className='check-icon'
                    onClick={() => CompletedTodo(index)}
                    title="Complete?"
                  />

                  <RiDeleteBin5Line
                    className="icon"
                    onClick={() => DeleteTodo(index)}
                    title="Delete?"
                  />
                </div>
              </div>
            );
          })}


          {fullScreen === true && completeTask.map((item, index) => {
            return (
              <div className="todo-list-item" key={index}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.Description}</p>
                  <p ><small>Comoleted on: {item.CompletedOn}</small></p>
                </div>

                <div>
                  <RiDeleteBin5Line
                    className='icon'
                    onClick={() => DeleteCompletedTodo(index)}
                    title="Delete?"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default App;