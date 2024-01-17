// components/SearchBar.tsx
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Input, IconButton, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import useShallowRouter from "@/hooks/useShallowRouter";
import useDebounce from "@/hooks/useDebounce";

const SearchBar: React.FC = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const shallowRouter = useShallowRouter();

  const handleSearch = () => {
    // Update the URL with the new search term
    router.push(`/search?searchTerm=${encodeURIComponent(searchTerm)}`);
  };
  const debouncedOnSearchQueryChange = useDebounce((value) => {
    shallowRouter.updateQueryParam({ search: (value === "" || value == null) ? undefined : value});
  });

  return (
    <Box display={'flex'}>
      <Input
        type="text"
        onChange={(e) => debouncedOnSearchQueryChange(e.target.value)}
        placeholder="Search..."
        fullWidth={true}
      />
      <IconButton onClick={handleSearch}>
        <SearchIcon />
      </IconButton>
    </Box>
  );
};

export default SearchBar;
