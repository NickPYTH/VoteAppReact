import React, { useState } from 'react'
import PropTypes from 'prop-types'

function useInputValue(defaultValue = '') {
  const [value, setValue] = useState(defaultValue)

  return {
    bind: {
      value,
      onChange: event => setValue(event.target.value)
    },
    clear: () => setValue(''),
    value: () => value
  }
}

function AddTodo({ onCreate }) {
  const input = useInputValue('')

  function NumbersHandler(event) {
    event.preventDefault()
    onCreate("numbers")
  }

  function CustomHandler(event) {
    event.preventDefault()
    onCreate("custom")
  }

  function GroupHandler(event) {
    event.preventDefault()
    onCreate("group")
  }

  return (
      <div className="d-flex justify-content-lg-start">
            <form className="m-1" onSubmit={NumbersHandler}>
                <button className="btn btn-outline-secondary" type='submit'>Ответы 1-5</button>
            </form>
            <form className="m-1" onSubmit={CustomHandler}>
                <button className="btn btn-outline-secondary"  type='submit'>Свои ответы</button>
            </form>
            <form className="m-1" onSubmit={GroupHandler}>
                <button className="btn btn-outline-secondary"  type='submit'>Групповые ответы</button>
            </form>
      </div>
   
    
  )
}

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired
}

export default AddTodo