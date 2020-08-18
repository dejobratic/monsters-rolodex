import React, { useState } from "react"

import "./SearchBox.css"

const SearchBox = ({ placeholder = "Search", onInputChange }) => {
  const [, setSearchInput] = useState("")

  const onSearchInputChange = (event) => {
    const searchInput = event.target.value
    setSearchInput(searchInput)

    onInputChange(searchInput)
  }

  return (
    <input
      className="search-box"
      type="search"
      placeholder={placeholder}
      onChange={onSearchInputChange}
    />
  )
}

export default SearchBox
