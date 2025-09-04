import React from 'react'
import { NextResponse } from 'next/server'
import { writeFile } from 'fs/promises'
import path from 'path'

export async function POST(req: Request) {
   try {
    const file = (await req.formData()).get('file') as File | null
    console.log(file)

    const bytes  = await file.arrayBuffer();
    const buffer = Buffer.from(bytes); // image

    const filePath = path.join(process.cwd(), 'app', 'client', 'assets', file.name)
    writeFile(filePath, buffer)

    return NextResponse.json({message: "OK", status: 200}, {status: 200})

   }catch(err) {

    return NextResponse.json({message: 'Error'}, {status: 500})
   }
}