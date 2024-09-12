import React from 'react'

function Team() {
  return (
    <div className='bg-[#222020] px-20 h-screen'>
        <div className="flex justify-between pt-20">
            <h2 className='text-[#FFD318] text-3xl font-bold'>The Masky Team</h2>
            <div className='flex'>
                <div className='text-7xl font-thin'>&larr;</div>
                <div className='text-[#FFD318] text-7xl font-black'>&rarr;</div>
            </div>
        </div>
        <div className="bg-[url('/GridBackGround.svg')] bg-cover center">

        </div>
    </div>
  )
}

export default Team