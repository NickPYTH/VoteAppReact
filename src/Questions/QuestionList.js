import React from 'react'
import PropTypes from 'prop-types'
import NumbersItem from './NumersQuestion/QuestionItemNumbers'
import CustomItems from './CustomQuestion/QuestionItemCustom'
import GroupItems from './GroupQuestion/GroupQuestions'

const styles = {

}

function TodoList(props) {
    return (
        <div>
            {props.todos.map((todo, index) => {
                if (todo.title === "numbers"){
                    return (
                        <NumbersItem
                        todo={todo}
                        key={todo.id}
                        index={index}
                        onChange={props.onToggle}
                        />
                    )
                }
                else if (todo.title === "custom"){
                    return (
                        <CustomItems
                        todo={todo}
                        key={todo.id}
                        index={index}
                        onChange={props.onToggle}
                        />
                    )
                }
                else if (todo.title === "group"){
                    return (
                        <GroupItems
                        todo={todo}
                        key={todo.id}
                        index={index}
                        onChange={props.onToggle}
                        />
                    )
                }
                
            })}
        </div>
    )
    }

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired
}

export default TodoList