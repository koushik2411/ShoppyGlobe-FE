import React from 'react'
import { useDispatch } from 'react-redux'

function SearchBar() {

    const dispatch = useDispatch();

  return (
    <div>

        <input 
            type='text'
            placeholder='Search products...'
            onChange={(e) =>
              dispatch(
                setSearchTerm(e.target.value)
              )
            }
        />

    </div>
  )
}

export default SearchBar