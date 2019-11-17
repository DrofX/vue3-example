<template>
  <div>
    <form
      @submit.prevent="addToDo"
    >
      <b-field
        :type="{'is-danger': !toDoValidation.valid.value}"
        :message="toDoValidation.errors.value.name"
        label="To-Do Name"
        class="field__to-do-name"
      >
        <b-input v-model="toDo.name" />
      </b-field>
      <b-button
        type="is-primary"
        native-type="submit"
      >
        Add
      </b-button>
    </form>
    <br>
    <br>
    <br>
    <to-do-list />
  </div>
</template>

<script>
/* eslint-disable no-console */
import { createComponent, ref, reactive } from '@vue/composition-api';

import { useToDoStore } from '../store/to-do';
import useValidation from '../composables/use-validation';
import ToDoList from '../components/ToDoList';


const toDoRules = {
  name: 'required',
}

export default createComponent({
  name: 'ToDos',
  components: {
    ToDoList,
  },
  setup() {
    const initToDo = () => {
      return reactive({
        name: '',
      });
    };

    const toDo = ref(initToDo());
    const toDoValidation = useValidation(toDo, toDoRules);
    const toDoStore = useToDoStore();

    const addToDo = () => {
      toDoValidation.validate();
      if (toDoValidation.valid.value) {
        toDoStore.addToDo(toDo.value);
        toDo.value = initToDo();
        toDoValidation.reset();
      }
    };

    return {
      toDo,
      toDoValidation,
      toDoStore,
      addToDo,      
    };
  },
});
</script>

<style lang="scss">
.field__to-do-name {
  width: 200px;
}
</style>
