import { useContext, useReducer } from 'react';
import SearchContext from './search.context';
import moment from 'moment';

const initialState = {
  from: moment(new Date()).format('DD/MM/YYYY'),
  to: moment(new Date()).add(1, 'days').format('DD/MM/YYYY'),
  room: '',
  numberOfGuests: '',
};

function reducer(state, action) {
  state = { ...state, ...action.payload };
  // switch (action.type) {
  //   case 'increase':
  //     state = { ...state, count: state.count + 1 };
  //     break;
  //   case 'decrease':
  //     state = { ...state, count: state.count - 1 };
  //     break;
  //   default:
  //     return state;
  // }

  return state;
}

function SearchProvider({ children }, ...props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
}

function useSearch() {
  const context = useContext(SearchContext);

  if (context === undefined)
    throw new Error('Context should be use within a CartProvider');

  return context;
}

export default SearchProvider;
export { useSearch };
