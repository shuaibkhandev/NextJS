// app/context/LoadingContext.tsx
"use client";
import { createContext, useContext, useState } from "react";

const LoadingContext = createContext({
  isLoading: false,
  setLoading: (loading: boolean) => {},
});

export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading: setIsLoading }}>
      {children}
     {isLoading && (
        <div className="wrapper">
  <div className="mention-loader">
    <div className="inner-mention-loader"></div>
    </div>
  </div>
)}

    </LoadingContext.Provider>
  );
};
