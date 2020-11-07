export default {
  setTodos(state, todo) {                   // --5.2 >>state
    state.todos.push(todo)
  },
  setTodosUpdate(state, todo) {            // --7.3 >>state
    console.log(todo)
    state.todos[todo.index] = todo.data
  },
  setTodosDelete(state, id) {               // --8.4 >>state
    state.todos.splice(id, 1)
  },
}
