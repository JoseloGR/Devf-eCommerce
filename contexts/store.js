import React, { useContext, createContext } from 'react';
export const Context = createContext(null);

export const SearchProvider = ({children})  => {
  const [searchState, setSearchState] = React.useState('all');

  React.useEffect(() => {}, []);
  const values = React.useMemo(() => (
    {
      searchState,
      setSearchState,
    }
  ), [searchState]);

  return <Context.Provider value={values}>
    {children}
  </Context.Provider>
}

export function useSearchContext() {
  const context = useContext(Context);
  if (!context) {
    console.error("Error deploying Search Context")
  }
  return context;
}

export default useSearchContext;