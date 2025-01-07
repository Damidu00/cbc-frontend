import { createClient } from '@supabase/supabase-js'
import React, { useState } from 'react'


const key =  `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5eWN3cHRwdXB6dmp3b2ZkZWdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYyMjM4OTksImV4cCI6MjA1MTc5OTg5OX0.IoV8pQdDBJyyD-pLGvO0ua2nJOkj8KZty3cTvHwmHRc`

const url = "https://lyycwptpupzvjwofdegk.supabase.co"

export default function FileUploadTest() {

    const [file,setFile] = useState(null)

    function handleUpload(){
        if(file == null){
            alert("Please select a file")
            return
        }
        let fileName = file.name
        const extention = fileName.split(".")[fileName.split(".").length-1]
        
        if(extention !="jpg" && extention !="png"){
            alert("Please select a jpg or png file")
            return
        }
        const supabase = createClient(url,key)

        const timeStamp = new Date().getTime()

        fileName = timeStamp + fileName +"." + extention

        console.log(fileName)

        supabase.storage.from("images").upload(fileName,file,{
            cacheControl : "360",
            upset : false
        }).then((res)=>{
            console.log(res)
        })

        const responseurl = supabase.storage.from("images").getPublicUrl(fileName)
            console.log(responseurl)


    }


  return (
    <div>
        <h1>File upload test</h1>
        <input type="file" onChange={(e)=>{
            setFile(e.target.files[0])
        }} />
        <br/>
        <button className='bg-blue-500 text-blue-50 p-2 m-2 rounded-lg' onClick={handleUpload}>Upload</button>
    </div>
  )
}
