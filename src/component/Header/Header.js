import React from 'react'

const Header = (props) => {

  const filterImage = (e) => {
    console.log(props.list);
    const inputValue=e.target.value;
    const filteredResults = props.list.filter(
      (item) =>
        // console.log(item.user.first_name)
        item.alt_description.toLowerCase().includes(inputValue.toLowerCase()) ||
       item.user.first_name
          .toLowerCase()
          .includes(inputValue.toLowerCase())
    );
    
console.log(filteredResults);
    // Update the filtered data state
    props.setList(filteredResults);
    console.log(e.target.value);
  }

  return (
    <div className='font-serif flex flex-row justify-between px-3 py-2 bg-gray-300 items-center' >
          <div>
              <span>Rishi Gallery</span>
          </div>
          <div className='flex gap-3'>
              <input placeholder='Search...' className='px-3 rounded-xl' onChange={(e)=>filterImage(e)}></input>
              <button className='rounded-md px-4 py-2 border-green-400 border-2 hover:bg-green-400 '>Search</button>
          </div>
    </div>
  )
}

export default Header
