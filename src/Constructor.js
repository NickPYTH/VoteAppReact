import React, { useEffect } from 'react'
import QuestionList from './Questions/QuestionList'
import AddQuestion from './Questions/AddQuestion'
import Loader from './Loader'
import Context from './context'

const AddTodo = React.lazy(
    () =>
      new Promise(resolve => {
        setTimeout(() => {
          resolve(import('./Questions/AddQuestion'))
        }, 3000)
      })
  )
  

export default function App() {
    const [todos, setTodos] = React.useState([])
    const [loading, setLoading] = React.useState(true)

      function toggleTodo(id) {
        setTodos(
          todos.map(todo => {
            if (todo.id === id) {
              todo.completed = !todo.completed
            }
            return todo
          })
        )
      }
    
      function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
      }
    
      function addTodo(title) {
        setTodos(
          todos.concat([
            {
              title,
              id: Date.now(),
              completed: false
            }
          ])
        )
      }
    

    return (
        <Context.Provider value={{ removeTodo }}>
        <div className="container mt-4 mt-lg-5">
            <div className="row">
                <div className="col-12">
                    <div class="card mb-3">
                        <div class="card-body">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span style={{'width': 14+'rem',}} className="input-group-text">Имя формы</span>
                                </div>
                                <input type="text" className="form-control"></input>
                            </div>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span style={{'width': 14+'rem',}} className="input-group-text">Пароль к результатам</span>
                                </div>
                                <input type="text" className="form-control"></input>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3">
                        <div class="card-body">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span style={{'width': 14+'rem',}} className="input-group-text">Дата окончания</span>
                                </div>
                                <input type="date" className="form-control"></input>
                                <button className="btn btn-outline-secondary ml-2">Бессрочная форма</button>
                            </div>
                        </div>
                    </div>

                    {loading && <Loader />}

                    <QuestionList todos={todos} onToggle={toggleTodo} />

                    <React.Suspense fallback={<Loader />}>
                        <AddQuestion onCreate={addTodo} />
                    </React.Suspense>

                </div>
            </div>
        </div>
        </Context.Provider>
    )
}