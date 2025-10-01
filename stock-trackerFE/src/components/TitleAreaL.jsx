import React, { useState } from 'react'

const TitleAreaL = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      <div className='flex flex-col gap-10'>
        <div className='text-8xl'>Track it. Scroll it. Save it.</div>
        <div className='text-3xl'>The one platform to track your stocks</div>

        <div className='w-3/4 relative'>
          <input type="search"
            placeholder="Eg. AAPL"
            value={searchQuery}
            onChange={(e)=>setSearchQuery(e.target.value)}
            className='w-full px-6 text-xl rounded-full h-14 border-3 border-gray-300 focus:border-[rgb(223,111,149)] hover:border-[rgb(223,111,149)]
            focus:outline-none bg-gray-100'/>
        </div>
      </div>

    </>
  )
}

export default TitleAreaL