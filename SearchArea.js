import React from 'react';


const SearchArea = (props) =>{
  return(
    <div className="search-area">
    <form onSubmit={props.searchBook} action="">
    <input onChange={props.handleSearch} type="text" />
    <button type="submit">search</button>
    </form>

    </div>
  )
}



export default SearchArea;
