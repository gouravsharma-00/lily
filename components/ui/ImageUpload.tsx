"use client"
import React, { useState } from 'react'

export default function ImageUpload() {
    const [image, setImage] = useState
    <{file: File, src: string, alt: string, size: {KB: number, MB: number, BYTES: number}, type: string} | null>(null);

    const handleUpload = ({target}: {target: HTMLInputElement}) => {
        if(!target.files[0]) {
            return
        }
        const imgElement = target.files[0];
        () => {
            setImage({
            file: imgElement,
            src : URL.createObjectURL(imgElement),
            alt : imgElement.name,
            size: {
                KB: Math.floor(imgElement.size / 1024), 
                MB: Math.floor((imgElement.size / 1024) / 1024), 
                BYTES: Math.floor(imgElement.size)
            },
            type: imgElement.type 
        })}
        console.log(image)

        UploadToApi(imgElement)
    }

    const UploadToApi = async (imgElement: File) => {
        if(!imgElement) return
        try {
            const formData = new FormData()
            formData.append('file', imgElement)

            const response = await fetch('/api/client', {
                method: "POST",
                body: formData
            })
            if(!response.ok) {
                throw new Error('Image ai response failed 💻')
            }
            const resData = await response.json()
            if(resData.status !== 200) {
                throw new Error('Image ai is sleeping 😴')
            }
            
        }catch(err) {
            console.log("Error: ", err)
        }
    }

    return(
        <div 
        className='border-2 border-dashed rounded bg-gray-100 border-gray-300 hover:bg-blue-100 hover:border-black transition-colors transition-200 ease-in aspect-video relative
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