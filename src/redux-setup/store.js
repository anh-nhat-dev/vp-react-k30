import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const initState = {
  name: "ABC",
};

const initCartState = {
  items: [],
};

const cartReducer = function (state = initCartState, action) {
  console.log("🚀 ~ file: store.js ~ line 12 ~ cartReducer ~ action", action);
  switch (action.type) {
    case "ADD_TO_CART":
      const product = action.payload;
      const cart = state.items;

      let check = false;

      cart.map((item) => {
        if (item.id === product.id) {
          check = true;
          item.qty += product.qty;
        }
        return item;
      });

      if (!check) {
        cart.push(product);
      }

      return { ...state, items: cart };
    case "DELETE_CART_ITEM":
      const cart1 = state.items.filter((item) => item.id !== action.payload);
      return { ...state, items: cart1 };
    case "UPDATE_CART_ITEM":
      const { id, qty } = action.payload;
      const cart2 = state.items.map((item) => {
        if (item.id === id) {
          item.qty = qty;
        }
        return item;
      });
      return { ...state, items: cart2 };
    default:
      return state;
  }
};

const userReducer = function (state = initState, action) {
  switch (action.type) {
    default:
      return state;
  }
};

const reducers = combineReducers({
  cart: cartReducer,
  user: userReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer);
persistStore(store);

export default store;
