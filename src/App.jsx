import { useState } from 'react'

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleform = (e) => {
    e.preventDefault();
    setTodoList([...todoList, {todoName: todo}]);
    setTodo("");
  }

  const deleteTodo = (deleteValue) => {
    const restTodoList = [...todoList.filter((val)=> {
      return val.todoName != deleteValue;
    })
  ];
  setTodoList(restTodoList);
  };

  return (
    <>
    <div className= "bg-grey-1200 w-full h-screen flex items-center">
      <div className='bg-blue-50 border-2 rounded-lg w-[500px] mx-auto text-center p-5'>
        <h1 className='text-5xl font-bold mb-8'>Todo List</h1>
        <form action="" onSubmit={handleform}>
          <input className='border-2 border-black w-full p-3 mb-5 placeholder:text-grey-500 rounded-lg text-black' type="text" placeholder='Add Todo'
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          />
          <button className='bg-red-600 text-white py-3 px-8 rounded-lg mb-8' type='submit'>Add Todo</button>
        </form>
        <div className="todo-show-area">
          <ul>
          {todoList.map((singleTodo, index) => {
            return(
            <li key={index} className='bg-black mb-3 flex justify-between text-white py-3 rounded-lg px-3'>{singleTodo.todoName}{" "}
              <span onClick={() => deleteTodo(singleTodo.todoName)} className='text-red-600 cursor-pointer'>
                delete
              </span>
            </li>
            );
            })}
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
