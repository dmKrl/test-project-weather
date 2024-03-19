import { createContext } from 'react';

const showingSearchContext = createContext({
  isShowingInput: false,
  changeIsShowing: () => {},
});

export default showingSearchContext;
