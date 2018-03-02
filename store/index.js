import Vuex from 'vuex'
// import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: { counter: 0 },
    mutations: {
      increment (state) {
        state.counter++
      },
      add (state, text) {
        state.todos.list.push({
          text: text,
          done: false
        })
      },
      remove (state, { todo }) {
        state.todos.list.splice(state.list.indexOf(todo), 1)
      },
      toggle (state, todo) {
        todo.done = !todo.done
      }
    },
    modules: {
      todos: {
        state: {
          list: []
        }
      }
    }
    // actions: {
    //   async GET_STARS ({ commit }) {
    //     const { data } = await axios.get('http://my-api/stars')
    //     commit('list', data)
    //   }
    // }
  })
}

export default createStore
