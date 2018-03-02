<template>
  <v-layout>
    <v-flex text-xs-center>
      <ul>
        <li v-for="(todo, index) in todos" v-bind:key="index">
          <input type="checkbox" :checked="todo.done" @change="toggle(todo)">
          <span>{{ todo.text }}</span>
        </li>
        <li><input placeholder="What needs to be done?" @keyup.enter="addTodo"></li>
      </ul>
    </v-flex>
  </v-layout>
</template>

<script>

import { mapMutations } from 'vuex'

export default {
  computed: {
    todos () { return this.$store.state.todos.list }
  },
  methods: {
    addTodo (e) {
      this.$store.commit('add', e.target.value)
      e.target.value = ''
    },
    ...mapMutations({
      toggle: 'toggle'
    })
  }
}
</script>