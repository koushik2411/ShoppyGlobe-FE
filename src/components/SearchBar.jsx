import React from 'react'
import { useDispatch } from 'react-redux'

function SearchBar() {

    const dispatch = useDispatch();

  return (
    <div className='searchBar'>

        <input 
            type='text'
            placeholder='Search products...'
            onChange={(e) =>
              dispatch(
                setSearchTerm(e.target.value)
              )
            }
            className='searchInput'
        />

    </div>
  )
}

export default SearchBar