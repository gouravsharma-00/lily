import React from 'react'

export default function Loading() {
    const divs = [
        {color: 'bg-green-400'},
        {color: 'bg-green-400'},
        {color: 'bg-green-400'},
        {color: 'bg-green-400'}
    ]
    return(
        <div className='absolute top-0 min-w-full h-full flex justify-center items-center backdrop-blur-sm'>
            <div className='grid grid-cols-2 gap-1.5 animate-spin'>
                {
                    divs.map((div, key) => {
                        return(
                            <div key={key} className='w-7 h-7 outline-1 bg-green-400 animate-pulse duration-1000'>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}