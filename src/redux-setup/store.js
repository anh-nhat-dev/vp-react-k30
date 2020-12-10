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

      const check =
        cart.length &&
        cart.every(
          (item) => item.id === product.id && (item.qty += product.qty)
        );

      if (!check) {
        cart.push(product);
      }
      console.log("🚀 ~ file: store.js ~ line 17 ~ cartReducer ~ cart", cart);

      return { ...state, items: cart };
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
