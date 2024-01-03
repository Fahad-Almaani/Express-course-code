import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
export default function Home() {
    let name2 = "fahad"
    const [name, setName] = useState("fahad")


    useEffect(() => {
       
    }, [])
    return (
        <div>
            <h1>Home</h1>

            <br />
            <h4>{name}</h4>
            <input type="text" name="" id="" onChange={(e) => setName(e.target.value)} />
        </div>
    )
}
