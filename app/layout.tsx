import React from 'react'
import './globals.css'

/**
 * 
 * @returns { JSX.Element } renders the Root Layout
 */

export default function RootLayout({children} : {children : React.ReactNode}) {
    return(
        <html lang='en'>
            <head></head>
            <body>
                {children}
            </body>
        </html>
    )
}