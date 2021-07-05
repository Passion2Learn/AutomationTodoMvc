/// <reference types="cypress" />

import { 
    navigate,
    addTodo,
    toggleTodo, 
    validateTodoText ,
    validateToggleState ,
    validateTodoCompletedState,
     validateNumberOfTodosShown, 
     clearCompleted 
    } from '../page-objects/todo-pageFn'

describe('todo actions', () => {
  beforeEach(() => {
    navigate()

    addTodo('Clean room')
  })

  it('should add a new todo to the list', () => {
    validateTodoText(0, 'Clean room')

    validateToggleState(0, false)
  })
})

  describe('toggling todos', () => {
    it('should toggle test correctly', () => {
      toggleTodo(0)
      validateTodoCompletedState(0, true)
    })

    it('should clear completed', () => {
      
        clearCompleted()
        
        validateNumberOfTodosShown(0)
        
      })
})
