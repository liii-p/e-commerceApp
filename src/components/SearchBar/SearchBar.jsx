import styles from "./SearchBar.module.scss";
import { useEffect, useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log("Search input:", search);
  }, [search]);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className={styles.SearchBar}>
      <input
        type="text"
        id="search"
        placeholder="Search for a product..."
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
