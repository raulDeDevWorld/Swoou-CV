'use client'

import { useState } from "react"
import Link from 'next/link'

export default function Home() {



const [url, setUrl] = useState(null);


 async function intro () {
  const data = await fetch('/api')
  const db = await data.arrayBuffer()
  setUrl(new Uint8Array(db).toString('base64'))

  return 

  // const bufferDB = await db.read()
  // console.log(bufferDB.value)

  }
  

  return (
    <div className="h-full bg-[#0064FA] flex flex-col justify-center items-center p-5"
   >
                <button onClick={intro}>descargar</button>

 <a href='./my.pdf' download>down</a>

    </div>
  )
}





