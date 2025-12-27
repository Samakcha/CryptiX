"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const Header = () => {
  const pathName = usePathname()
  return (
    <header>
      <div className="main-container inner">
        <Link href={'/'} className="flex">
          <Image src={'/new_logo.svg'} alt="Crytix logo" width={40} height={20} />
          <Image src={'/new_name.svg'} alt="Crytix logo" width={100} height={20} />
        </Link>

        <nav>
          <Link href={'/'}
            className={
              cn('nav-link', { 'is-active': pathName === '/', 'is-home': true })
            }
          >
            Home
          </Link>

          <p>Search Model</p>

          <Link href={'/coins'}
            className={
              cn('nav-link', { 'is-active': pathName === '/coins' })
            }
          >
            Coins
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header