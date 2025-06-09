import {MenuItem} from "../context/initialState";
import { useAppSelector } from "../../redux/hooks";

interface SearchProps {
  search: string;
}

interface SearchResult {
  handleSearch: () => MenuItem[];
}

const useSearch = ({ search }: SearchProps): SearchResult => {
  const { menuData } = useAppSelector(state => state.menu);

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
