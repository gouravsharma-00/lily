"use client"
import React, { useState } from 'react'

export default function ImageUpload() {
    const [image, setImage] = useState
    <{src: string, alt: string, size: {KB: number, MB: number, BYTES: number}, type: string} | null>(null);

    const handleUpload = ({target}: {target: HTMLInputElement}) => {
        if(!target.files[0]) {
            return
        }
        const imgElement = target.files[0]
        setImage({
            src : URL.createObjectURL(imgElement),
            alt : imgElement.name,
            size: {
                KB: Math.floor(imgElement.size / 1024), 
                MB: Math.floor((imgElement.size / 1024) / 1024), 
                BYTES: Math.floor(imgElement.size)
            },
            type: imgElement.type 
        })
    }

    return(
        <div 
        className='border-2 border-dotted rounded bg-gray-300 border-gray-100 aspect-video relative
        flex justify-center items-center'>
            <div>
                <picture>
                    <img src='/icons/image-upload-icon.png' alt='image upload icon'  />
                </picture>
            </div>
            <input 
                onChange={handleUpload} 
                type='file' id='imageupload' name='imageupload' accept='image/*' 
                className='w-full h-full opacity-0 p-4 cursor-pointer absolute'
                />
        </div>
    )
}