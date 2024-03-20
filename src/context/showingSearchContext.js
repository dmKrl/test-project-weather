import { createContext } from 'react';

const showingSearchContext = createContext({
  isShowingInput: false,
  isShowingLoader: false,
  changeIsShowing: () => {},
  changeIsShowingLoader: () => {},
});

export default showingSearchContext;
