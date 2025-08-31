"use client"
import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export default function Tabbar() {
    const router = useRouter()
    const params = useSearchParams()
    const tabID = params.get('tab');
    const tabs = [
        {id: 1, name: 'remove', alt: 'Remove background', src: '/images/remove.webp'},
        {id: 2, name: 'blur', alt: 'Blur background', src: '/images/ai.webp'},
        {id: 3, name: 'ai', alt: 'AI background', src: '/images/remove.webp'},
        {id: 4, name: 'detect', alt: 'Detect background', src: '/images/remove.webp'}
    ]
    return(
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {
                tabs.map(tab => {
                    const isActive = tabID === tab.name;
                    return(
                        <button key={tab.id} onClick={() => router.push(`/client?tab=${tab.name}`)}
                            className={`bg-white rounded-xl cursor-pointer outline-1 transition-all
                            transition-200 ease-in-out
                            ${
                                isActive ? 'outline-gray-600' : 'outline-gray-100'
                            }`} >
                                <picture>
                                    <img src={tab.src} alt={tab.alt} className='rounded-t-xl' />
                                </picture>
                                <h3 className='text-sm font-semibold text-center pt-2 pb-2 text-gray-800'>
                                    {tab.alt}
                                </h3>
                        </button>
                    )
                })
            }
        </div>
    )
}
