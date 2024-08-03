<template>
    <div class="space-y-2">
        <TodoItem 
            v-for="todo in reversedTodos"
            :key="todo.id"
            :todo="todo"
        />
    </div>
</template>

<script>
import TodoItem  from '@/components/TodoItem';
import { useStore }  from 'vuex';
export default {
    components: { TodoItem },

    setup() {
        const store = useStore();
        const reversedTodos = store.state.todos.reverse();
        return {
            reversedTodos
        }
    }

    /* Options api
    data() {
        return {
            reversedTodos: this.$store.state.todos.reverse()
        }
    }
    */
}
</script>