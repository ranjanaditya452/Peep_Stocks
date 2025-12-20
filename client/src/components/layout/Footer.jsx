import React from 'react'

const Footer = () => {
  return (
    <div className='h-12 flex justify-between items-center md:h-14 max-h-14 shrink-0 border-t border-gray-200'>
        <div className='flex gap-3.5 pl-6'>
            <div>&copy;Adi</div>
            <div>Repo</div>
        </div>
        <div className='flex gap-3.5 pr-6 '>
            <div>Terms</div>
            <div>Github</div>
        </div>
    </div>
  )
}

export default Footer