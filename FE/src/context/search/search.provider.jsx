import { useContext, useReducer } from 'react';
import SearchContext from './search.context';
import moment from 'moment';

const initialState = {
  From: moment(new Date()).format('MM/DD/YYYY'),
  To: moment(new Date()).add(1, 'days').format('MM/DD/YYYY'),
  room: '1 Room',
  numberOfGuests: '1 Adult',
};

function reducer(state, action) {
  switch (action.type) {
    case 'searchInput':
      state = { ...state, state };
      break;
    default:
      return state;
  }

  return state;
}

function SearchProvider({ children }, ...props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(
    '🚀 ~ file: search.provider.jsx ~ line 30 ~ SearchProvider ~ dispatch',
    dispatch
  );

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
