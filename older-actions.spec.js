/// <reference types ="cypress"/>  

import { TodoPage } from "../page-objects/todo-page";

                        //mocha is the test runner comes built in with cypress
                        //can use site with delay --> //cy.visit('http://todomvc-app-for-testing.surge.sh/?delay-new-todo=5000')

describe('Test todo actions', ()=>{
    const todoPage = new TodoPage()

beforeEach( ()=>{
    todoPage.navigate()
    todoPage.addTodo('Clean room')
    
    //cy.get('.new-todo', {timeout:6000}).type("Learn Cypress{enter}")
})

    it('should navigate to the TodoMVC App', ()=>{
        cy.visit('http://todomvc-app-for-testing.surge.sh')
    })

    it('should add a new todo to the list', ()=>{
        todoPage.validateTodotxt(0, 'Clean room')


        
        
        cy.get('.toggle').should('not.be.checked')
        
    })

    it('should mark a todo as completed', ()=>{
        cy.get('.toggle').click()
        cy.get('label').should('have.css', 'text-decoration-line','line-through')

    })

    it('should clear completed todos', ()=>{
        cy.get('.toggle').click()
        cy.contains('Clear').click()
        cy.get('.todo-list').should('not.have.descendants','li')
    })
})

//filtering
/// <reference types ="cypress"/>

describe('Filtering', ()=>{
    beforeEach( ()=>{
        cy.visit('http://todomvc-app-for-testing.surge.sh/')
        cy.get('.new-todo').type("Clean room{enter}")
        cy.get('.new-todo').type("Learn Javascript{enter}")
        cy.get('.new-todo').type("Use Cypress{enter}")

        cy.get('.todo-list li:nth-child(2) .toggle').click()

    })

    it('should filter "Active" todos', ()=>{
        cy.contains('Active').click()
        cy.get('.todo-list li').should('have.length', 2)
    })
    it('should filter "Completed" todos', ()=>{
        cy.contains('Completed').click()
        cy.get('.todo-list li').should('have.length', 1)
    })
    it('should filter "All" todos', ()=>{
        cy.contains('All').click()
        cy.get('.todo-list li').should('have.length', 3)
    })
})



