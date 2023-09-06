// ActualCategoryContext.ts (où vous créez le contexte)
import React, { createContext, useContext } from "react";
import useFilters from "@/components/hooks/useFilters";

interface ActualCategoryContextType {
  filterCategory: string;
  setFilterCategory: React.Dispatch<React.SetStateAction<string>>;
}

const ActualCategoryContext = createContext<
  ActualCategoryContextType | undefined
>(undefined);

export const ActualCategoryProvider = ({ children }: any) => {
  const { filterCategory, setFilterCategory } = useFilters();

  return (
    <ActualCategoryContext.Provider
      value={{ filterCategory, setFilterCategory }}
    >
      {children}
    </ActualCategoryContext.Provider>
  );
};

export const useActualCategory = (): ActualCategoryContextType => {
  const context = useContext(ActualCategoryContext);
  if (context === undefined) {
    throw new Error(
      "useActualCategory must be used within an ActualCategoryProvider"
    );
  }
  return context;
};
