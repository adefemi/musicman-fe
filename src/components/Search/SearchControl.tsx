import { useEffect, useRef } from "react";
import SearchSvg from "../svgs/search";


const SearchControl = ({setSearch}:{setSearch: (value:string) => void}) => {
  const searchInput = useRef<HTMLInputElement>(null);

  const handleInputChangeEffect = () => {
    const searchControl = document.querySelector('.searchControl');
    setSearch(searchInput.current?.value || "")
    if(searchInput.current?.value){
        searchControl?.classList.add('hasContent')
    }
    else{
        searchControl?.classList.remove('hasContent')
    }
  };

  useEffect(() => {
    document
      .querySelector("input")
      ?.addEventListener("input", handleInputChangeEffect);
    return () => {
      document
        .querySelector("input")
        ?.removeEventListener("input", handleInputChangeEffect);
    };
  }, []);

  return (
    <div className="searchControl">
      <span>
        <SearchSvg />
      </span>
      <input
        ref={searchInput}
        type="text"
        placeholder="Search you favorite songs"
      />
    </div>
  );
};
export default SearchControl;
