import { useContext, useReducer } from 'react';
import CartContext from './cart.context';

const initialState = {
  count: 1,
};

function reducer(state, action) {
  switch (action.type) {
    case 'increase':
      state = { ...state, count: state.count + 1 };
      console.log(
        '🚀 ~ file: cart.provider.jsx ~ line 12 ~ reducer ~ state',
        state
      );
      break;
    case 'decrease':
      state = { ...state, count: state.count - 1 };
      break;
    default:
      return state;
  }

  return state;
}

function CartProvider({ children }, ...props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

function useCount() {
  const context = useContext(CartContext);

  if (context === undefined)
    throw new Error('Context should be use within a CartProvider');

  return context;
}

export default CartProvider;
export { useCount };
