import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { MenuItem } from "../context/initialState";

interface SearchProps {
  search: string;
}

interface SearchResult {
  handleSearch: () => MenuItem[];
}

const useSearch = ({ search }: SearchProps): SearchResult => {
  const context = useContext(AppContext);
  
  if (!context) {
    throw new Error("useSearch must be used within an AppProvider");
  }
  
  const { menuData } = context;

  function handleSearch(): MenuItem[] {
    let filteredItems = menuData.filter(item => {
      if (search === '') {
        return item;
      } else {
        return (
          item.dishUpper.toLowerCase().includes(search.toLowerCase())
        )
      }
    });

    return filteredItems;
  };

  return { handleSearch };
};

export default useSearch;