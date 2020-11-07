export default {
  setTodos(state, todo) {
    state.todos.push(todo)
  },
  setTodosUpdate(state, todo) {
    console.log(todo)
    state.todos[todo.index] = todo.data
  },
  setTodosDelete(state, id) {
    state.todos.splice(id, 1)
  },
}
