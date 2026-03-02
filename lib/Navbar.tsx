"use client"

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Sun, Moon } from 'lucide-react'


const Navbar = () => {

    const {theme, setTheme} = useTheme()
   

    const [mounted, setMounted] = useState(false)

    useEffect(() => {setMounted(true)}, [])

  
 
   return (




    <>
        <nav className='flex flex-row justify-between py-1'>
            <Link className='py-1 px-2' href={`/`}>Home</Link>
            <div className="flex gap-10">
                <div>
                    <Button className='cursor-pointer' variant="outline" size="icon" onClick={() => {

                        if (theme == "dark") {
                            setTheme("light")
                            return ""
                        }

                        if (theme == "light") {
                            setTheme("dark")
                            return ""
                        }
                        
                        
                    }}>
                        {(mounted)? (
                            <>
                             <Sun className={(theme == "light")? "h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90": "hidden"} />
                         <Moon className={(theme == "dark")? "absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0": "hidden"} />
                            </>
                        ): (
                            <>
                             <span className='bg-[grey]/80 w-full h-full rounded-[6px]'></span>
                            </>)}
                        
                    </Button>
                </div>
                <Link className='py-2' href={`/cart`}>Cart</Link>
                <Link className='py-2' href={`/sign-in`}>Sign In</Link>
            </div>

        </nav>
    </>
  )
}

export default Navbar