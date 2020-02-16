import update from 'immutability-helper';

const duckRoot = 'app/groceries/';

// Constants
export const ADD_ITEM = `${duckRoot}ADD_ITEM`;
export const REMOVE_ITEM = `${duckRoot}REMOVE_ITEM`;
export const SELECT_ITEM = `${duckRoot}SELECT_ITEM`;
export const DESELECT_ITEM = `${duckRoot}DESELECT_ITEM`;

export const initialState = {
  list: [
    {
      id: 66,
      name: 'Bananas',
      category: 'Fruit',
      deliveryMethod: 'Air',
    },
    {
      id: 16,
      name: 'Whole Grain Bread',
      category: 'Grains',
      deliveryMethod: 'Air',
    },
    {
      id: 100,
      name: 'Lettuce',
      category: 'Vegitable',
      deliveryMethod: 'Ground',
    },
    {
      id: 10,
      name: 'Roasted Turkey',
      category: 'Deli',
      deliveryMethod: 'Ground',
    },
  ],
  isItemSelected: false,
  selectedItem: {
    id: 0,
    name: '',
    category: '',
    deliveryMethod: '',
  },
};

// Reducers
export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_ITEM:
      return update(state, {
        list: { $push: [payload] },
      });

    case REMOVE_ITEM:
      // Write a custom reducer that will remove an item from the list array
      return update(state, {
        list: { $set: [...removeFn(state, payload)] },
      });

    case SELECT_ITEM:
      // Write a custom reducer that will select an item
      return update(state, {
        selectedItem: { $set: {...selectFn(payload)} },
      });

    case DESELECT_ITEM:
      // Write a customer reducer that will deselect an item
      return update(state, {
        selectedItem: { $set: {...deselectFn()} },
      });

    default:
      return state;
  }
};

// Action Creators
export const addItem = item => ({
  type: ADD_ITEM,
  payload: item,
});

export const remove = item => ({
  type: REMOVE_ITEM,
  payload: item,
});

export const select = item => ({
  type: SELECT_ITEM,
  payload: item,
});

export const deselect = item => ({
  type: DESELECT_ITEM,
  payload: item,
});

// State mutation functions
const removeFn = (state, payload) => {
  const newState = {...state};
  const { list } = newState;
  let index;
  list.forEach((data, i) => {
    data.id === payload && (index = i)
  });
  list.splice(index, 1);
  return list;
}

const selectFn = (payload) => {
  return payload;
}

const deselectFn = () => {
  return {
    id: 0,
    name: '',
    category: '',
    deliveryMethod: '',
  };
}
