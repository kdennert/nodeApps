import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { Todo } from '../resources/data/todo-object';
@inject(Router, Todo)
export class Todos {
    constructor(router, todos) {
        this.router = router;
        this.todos = todos;
        this.message = 'Todos';
        this.showTodoEditForm = false;
    }
    async activate() {
        await this.getTodos();
    }
    attached() {
        feather.replace()
    }
    async getTodos() {
        await this.todos.getTodos();
    }
    newTodo() {
        this.todo = {
            todo: "",
            priotity: "Medium",
            done: "false",
        }
        this.openEditForm();
        this.showTodoEditForm = true;
    }
    editTodo(todo) {
        this.todo = todo;
        this.showTodoEditForm = true;
    }

    openEditForm() {
        this.showTodoEditForm = true;
        setTimeout(() => { $("#todo").focus(); }, 500);
    }

    async save() {
        if (this.todo && this.todo.todo && this.todo.priotity) {
            await this.todos.save(this.todo);
            await this.getTodos();
            this.back();
        }
    }
    
    async delete() {
        if (this.todo) {
            await this.todos.delete(this.todo);
            await this.getTodos();
            this.back();
        }
    }
    logout() {
        this.router.navigate('home');
    }
    
    back() {
        this.showTodoEditForm = false;
    }
   
}
