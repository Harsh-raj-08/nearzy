import React from 'react'

const Searchbar = () => {
  return (
    <>
    <div className="searchBarContainer">
        <input type="search" name="search" id="search" placeholder='search anything...'/>
        <img src="searchbar.svg" alt="search" />
    </div>
    </>
  )
}

export default Searchbar