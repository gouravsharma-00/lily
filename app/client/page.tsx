"use client"
import React from 'react'
import { useSearchParams } from 'next/navigation'
import ImageUpload from '@components/ui/ImageUpload'

export default function ClientPage() {
    const params = useSearchParams()
    const tab = params.get('tab')
    return(
        <div>
            <ImageUpload />
        </div>
    )
}