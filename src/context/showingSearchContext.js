import { createContext } from 'react';

const ShowingSearchContext = createContext({
  isShowingInput: false,
  changeIsShowing: () => {},
});

export default ShowingSearchContext;
