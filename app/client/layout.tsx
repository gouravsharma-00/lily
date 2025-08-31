import React from 'react'
import Tabbar from '@components/ui/Tabbar'


export default function ClientLayout({children} : {children : React.ReactNode}) {
    return(
        <main className='flex justify-center items-center flex-col min-h-screen p-2'>
            <div className='max-w-2xl flex justify-center  flex-col gap-3'>
                {children}
                <Tabbar />
            </div>

        </main>
    )
}