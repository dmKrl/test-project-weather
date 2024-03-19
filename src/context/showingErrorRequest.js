import { createContext } from 'react';

const showingErrorRequest = createContext({
  errorRequest: {},
  changeErrorRequest: () => {},
});

export default showingErrorRequest;
