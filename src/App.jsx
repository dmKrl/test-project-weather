import { useState } from 'react';
import './App.css';
import AppRoutes from './routes';
import ShowingSearchContext from './context/showingSearchContext';

function App() {
  const [isShowingSearchInput, setIsShowingSearchInput] = useState(false);
  return (
    <ShowingSearchContext.Provider
      value={{
        isShowingInput: isShowingSearchInput,
        changeIsShowing: setIsShowingSearchInput,
      }}
    >
      <AppRoutes />;
    </ShowingSearchContext.Provider>
  );
}

export default App;
