import React from "react";
import { connectSearchBox } from "react-instantsearch-dom";
import { Search as SearchIcon } from "@styled-icons/fa-solid";

const CustomSearchBox = ({ refine, currentRefinement, className, onFocus }) => (
    <form className={className}>
        <input
            className="form-control"
            type="text"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => refine(e.target.value)}
            value={currentRefinement}
            onFocus={onFocus}
        />
        <SearchIcon className="SearchIcon" />
    </form>
);

export default CustomSearchBox;
