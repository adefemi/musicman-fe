import SearchControl from "./SearchControl";
import "./Search.css";
import { TrackProps } from "../Track/TrackCard";
import { useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import { useQuery } from "@tanstack/react-query";
import { searchTrack } from "../../utils/network";
import SearchList from "./SearchList";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedValue = useDebounce(searchTerm, 300);

  const { isLoading, error, data } = useQuery({
    queryKey: [debouncedValue],
    queryFn: async () => {
      const res = await fetch(searchTrack(debouncedValue));
      const data = await res.json();
      return data.result.data as TrackProps[];
    },
    enabled: !!debouncedValue,
  });

  const getContent = (): React.ReactNode => {
    if (!searchTerm) return null;
    if (error) {
      return <div>An error occured</div>;
    }

    return <SearchList data={data} loading={isLoading} />;
  };

  return (
    <div className="searchContainer">
      <SearchControl setSearch={setSearchTerm} />
      {getContent()}
    </div>
  );
};
export default Search;
