"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

export default function Tabbar() {
    const router = useRouter()
    return(
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            <button onClick={() => router.push(`/client?tab=home`)}
                className='bg-white rounded-xl cursor-pointer'>
                    <picture>
                        <img src='/images/remove.webp' alt='remove background' className='rounded-t-xl' />
                    </picture>
                    <h3 className='text-sm font-semibold text-center pt-2 pb-2'>
                        Background remover
                    </h3>
            </button>
            <button onClick={() => router.push(`/client?tab=home`)}
                className='bg-white rounded-xl cursor-pointer'>
                    <picture>
                        <img src='/images/ai.webp' alt='remove background' className='rounded-t-xl' />
                    </picture>
                    <h3 className='text-sm font-semibold text-center pt-2 pb-2'>
                        Background remover
                    </h3>
            </button>
            <button onClick={() => router.push(`/client?tab=home`)}
                className='bg-white rounded-xl cursor-pointer'>
                    <picture>
                        <img src='/images/remove.webp' alt='remove background' className='rounded-t-xl' />
                    </picture>
                    <h3 className='text-sm font-semibold text-center pt-2 pb-2'>
                        Background remover
                    </h3>
            </button>
            <button onClick={() => router.push(`/client?tab=home`)}
                className='bg-white rounded-xl cursor-pointer'>
                    <picture>
                        <img src='/images/remove.webp' alt='remove background' className='rounded-t-xl' />
                    </picture>
                    <h3 className='text-sm font-semibold text-center pt-2 pb-2'>
                        Background remover
                    </h3>
            </button>
        </div>
    )
}
