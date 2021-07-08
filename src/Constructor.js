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
    const [formInfo, setFormInfo] = React.useState({
      name: "",
      description: "",
      date: ""
    })
    const [errors, setErrors] = React.useState([])
    const [isInfinity, setIsInfinity] = React.useState(false)
    const [todos, setTodos] = React.useState([])
    const [countQuestion, setCountQuestion] = React.useState(0)
    const [loading, setLoading] = React.useState(true)

      function toggleTodo(type, id=undefined, value=undefined, customRemove=undefined) {
        if (type === "numbers"){
          var tmp = todos
          tmp.map((val)=>{
            if (val.questionNumber == id){
              val.data = [1,2,3,4,5]
            }
          })
          setTodos(tmp)
        }
        else if(type === "custom"){
          if (customRemove === undefined){
          var tmp = todos
          tmp.map((val)=>{
            if (val.questionNumber == id){
              val.data.push(value)
            }
          })
          setTodos(tmp)
        }
        else{
          var tmp = todos
          tmp.map((val)=>{
            if (val.questionNumber == id){
              val.data = val.data.filter(word => word != value)
            }
          })
          setTodos(tmp)
        }
      }
      else if(type === "groups"){
        var tmp = todos
        tmp.map((val)=>{
          if (val.questionNumber == id){
            val.data = value
          }
        })
        setTodos(tmp)
      }
        
      }
    
      function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
      }
    
      function addTodo(title) {
        setCountQuestion(countQuestion+1)
        setTodos(
          todos.concat([
            {
              questionNumber: countQuestion,
              title,
              id: Date.now(),
              data: [],
            }
          ])
        )
      }

    function changeGroupChild(childs) {
      var tmp = todos
        tmp.map((todos_item)=>{
          todos_item.data.map((data)=>{
              childs.map((child)=>{
                if (data.key == child.group_id){
                  if (!data.childs.has(child.child_id)){
                    data.childs.set(child.child_id, child.value)
                  }
                  else{
                    data.childs.delete(child.child_id);
                    data.childs.set(child.child_id, child.value)
                  }
                }
              })
          })

        })
        setTodos(tmp)
      }

      function removeGroupChild(childs, child_id) {
        var tmp = todos
          tmp.map((todos_item)=>{
            todos_item.data.map((data)=>{
                childs.map((child)=>{
                  if (data.key == child.group_id){
                      data.childs.delete(child_id);
                  }
                })
            })
  
          })
          setTodos(tmp)
        }
    
    
    function showData(){
      var form = new Map()
      form.set("form_name", formInfo.name)
      form.set("form_description", formInfo.description)
      form.set("form_date", formInfo.date)
      form.set("questions", todos)
      //console.log(form)
      
    }

    return (
        <Context.Provider value={{ removeTodo, changeGroupChild, removeGroupChild }}>

          
        <div className="container mt-4 mt-lg-5">
            <div className="row">
                <div className="col-12">
                    <div className="card mb-3">
                        <div className="card-body">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span style={{'width': 14+'rem',}} className="input-group-text">Имя формы</span>
                                </div>
                                <input type="text" className="form-control" 
                                  onChange={(e)=>{
                                    setFormInfo({
                                      name: e.target.value,
                                      description: formInfo.description,
                                      date: formInfo.date
                                    })
                
                                  }}
                                  required={true}
                                  defaultValue={formInfo.name}
                                  />
                            </div>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span style={{'width': 14+'rem',}} className="input-group-text">Пароль к результатам</span>
                                </div>
                                <input type="text" className="form-control"
                                onChange={(e)=>{
                                  setFormInfo({
                                    name: formInfo.name,
                                    description: e.target.value,
                                    date: formInfo.date
                                  })
                                }}
                                defaultValue={formInfo.description}
                                ></input>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3">
                        <div className="card-body">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span style={{'width': 14+'rem',}} className="input-  -text">Дата окончания</span>
                                </div>
                                <input type="date" className="form-control" 
                                onChange={(e)=>{
                                  setFormInfo({
                                    name: formInfo.name,
                                    description: formInfo.description,
                                    date: e.target.value
                                  })
                                }}
                                defaultValue={formInfo.date}></input>
                                <button className="btn btn-outline-secondary ml-2"
                                  onClick={(e)=>{

                                  }}
                                >Бессрочная форма</button>
                            </div>
                        </div>
                    </div>

                    {loading && <Loader />}

                    <QuestionList todos={todos} onToggle={toggleTodo} />

                    <React.Suspense fallback={<Loader />}>
                        <AddQuestion onCreate={addTodo} />
                    </React.Suspense>

                    <div className="row">
                        
                          {formInfo.name.trim() == "" && 
                            <div className="col-12 mt-2 justify-content-center text-center">
                            <div class="alert alert-danger" role="alert">
                              Заполните имя формы
                            </div>
                            </div>
                          }
                            {formInfo.description.trim() == "" && 
                            <div  className="col-12 justify-content-center text-center">
                            <div class="alert alert-danger" role="alert">
                              Заполните описание формы
                            </div>
                            </div>
                          }
                        </div>
                        </div>
                      
                      <div className="col-12 text-center">
                        <button className="btn btn-outline-secondary m-2" onClick={showData} type="submit">Создать</button>
                      </div>
                      
                    </div>

                </div>
        </Context.Provider>
    )
}