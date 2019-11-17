import { 
  reactive,
  provide,
  inject,
  toRefs,
  computed,
} from '@vue/composition-api';

const key = Symbol('to-do');
let store;
let id = 1;

const state = reactive({
  toDos: [],
});

const actions = {
  addToDo(toDo) {
    state.toDos.push({
      id: id++,
      completed: false,
      name: toDo.name,
    });
  },

  removeToDo(id) {
    state.toDos = state.toDos.filter(t => t.id !== id);
  },

  getToDos(showCompleted) {
    return state.toDos.filter(t => !t.completed || (showCompleted && t.completed));
  }
};

const computeds = {
   numOfCompleted: computed(() => state.toDos.filter(t => t.completed).length),
 };

export const useToDoStore = () => {
  if (store) return store;

  provide(key, {
    ...toRefs(state),
    ...actions,
    ...computeds,
  });
  store = inject(key);

  return store;
};
