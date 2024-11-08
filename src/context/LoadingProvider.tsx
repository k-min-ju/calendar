import React, { Context, createContext, useContext, useState } from 'react';
import { LoadingContextProps } from '@/types';

const LoadingContext: Context<LoadingContextProps | undefined> = createContext<LoadingContextProps | undefined>(
  undefined
);

/**
 * loading state management provider
 * @param children - ReactNode
 * @constructor
 */
export default function LoadingProvider({ children }: { children: React.ReactNode }): React.JSX.Element {
  const [isLoading, setIsLoading] = useState(false);

  return <LoadingContext.Provider value={{ isLoading, setIsLoading }}>{children}</LoadingContext.Provider>;
}

export const useLoading = (): LoadingContextProps => {
  const context: LoadingContextProps | undefined = useContext(LoadingContext);
  if (!context) throw new Error('LoadingProvider Error');
  return context;
};
