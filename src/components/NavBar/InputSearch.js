"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (event) => {
        event.preventDefault()
        const searchValue = searchRef.current.value
        
        router.push(`/search/${searchValue}`)
    } 

  return (
    <div className="relative">
        <input 
            placeholder='search anime' 
            className='w-full p-2 rounded'
            ref={searchRef}
        />
        <button className="absolute top-2 end-1" onClick={handleSearch}>
            <MagnifyingGlass size={25} />
        </button>
    </div>
  )
}

export default InputSearch