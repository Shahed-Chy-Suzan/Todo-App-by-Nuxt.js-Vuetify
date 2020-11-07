export default {
  saveTodo(context, payload) {                  // --5.1 >>mutations
    context.commit('setTodos', payload)
  },
  deleteTodo(context, id) {                     // --8.3 >>mutations
    context.commit('setTodosDelete', id)
  },
}
