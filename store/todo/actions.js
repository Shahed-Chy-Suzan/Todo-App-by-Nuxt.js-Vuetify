export default {
  saveTodo(context, payload) {
    context.commit('setTodos', payload)
  },
  deleteTodo(context, id) {
    context.commit('setTodosDelete', id)
  },
}
