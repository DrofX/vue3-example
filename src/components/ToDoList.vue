<template>
  <div>
    <span class="is-size-4 to-do-list__title">To-Do List</span>
    <b-switch v-model="showCompleted">Show completed</b-switch>
    <br>
    <span
      v-if="!showCompleted"
      class="is-size-7"
    >
      {{ 
        `+ ${toDoStore.numOfCompleted.value} 
        completed task${toDoStore.numOfCompleted.value > 1 ? 's' : ''}`
      }}
    </span>
    <br>
    <template v-for="toDo in toDoStore.getToDos(showCompleted)">
      <div
        :key="toDo.id"
        class="to-do-item"
      >
        <b-checkbox v-model="toDo.completed" />
        <div
          :class="`${toDo.completed ? 'to-do-item__name--success' : ''} to-do-item__name`"
        >
          {{ toDo.name }}
        </div>
        <b-button
          icon-right="delete"
          class="to-do-item__delete"
          @click="toDoStore.removeToDo(toDo.id)"
        />
      </div>
    </template>
  </div>
</template>

<script>
import { createComponent, ref } from '@vue/composition-api';

import { useToDoStore } from '../store/to-do';


export default createComponent({
  name: 'ToDoList',
  setup() {
    const showCompleted = ref(false);
    const toDoStore = useToDoStore();

    return { toDoStore, showCompleted };
  },
});
</script>

<style lang="scss" scoped>
.to-do-list__title {
  margin-right: 25px;
}

.to-do-item {
  display: flex;
  align-items: center;
  height: 40px;

  &__name {
    display: inline-block;
    margin-left: 15px;
    width: 200px;

    &--success {
      color: #23d160;
    }
  }

  &__delete {
    margin-left: 15px;
  }
}
</style>
