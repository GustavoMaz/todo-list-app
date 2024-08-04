import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
    state: {
        todos: [

        ]
    },
    mutations: {
        storeTodos(state, payload) {
            state.todos = payload;
        },

        storeTodo(state, payload) {
            const index = state.todos.findIndex(todo => todo.id === payload.id);
            if (index >= 0) {
                state.todos.splice(index, 1, payload);
            } else {
                state.todos.unshift(payload);
            }
        },

        deleteTodo(state, id) {
            const index = state.todos.findIndex(todo => todo.id === id);

            if (index >= 0) {
                state.todos.splice(index, 1);
            }
        }

    },
    getters: {
    },
    actions: {
        getTodos({ commit }) {
          return axios.get('https://gustavomaz.github.io/todo-list-app/database.json/todo')  
          //return axios.get('http://localhost:8080/todo-list-app')
                .then((response) => {
                    commit('storeTodos', response.data);
                })
        },

        addTodo({ commit }, data) {
          return axios.post('https://gustavomaz.github.io/todo-list-app/database.json/todo', data)  
          //return axios.post('http://localhost:8080/todo-list-app/todo', data)
                .then((response) => {
                    commit('storeTodo', response.data);
                });
        },

        updateTodo({ commit }, { id, data }) {
          return axios.put(`https://gustavomaz.github.io/todo-list-app/database.json/todo/${id}`, data)  
          //return axios.put(`http://localhost:8080/todo-list-app/todo/${id}`, data)
                .then((response) => {
                    commit('storeTodo', response.data);
                });
        },

        deleteTodo({ commit },  id) {
          return axios.delete(`https://gustavomaz.github.io/todo-list-app/database.json/todo/${id}`)  
          //return axios.delete(`http://localhost:8080/todo-list-app/todo/${id}`)
                .then(() => {
                    commit('deleteTodo', id);
                });
        }
    },
    modules: {
    }
})
