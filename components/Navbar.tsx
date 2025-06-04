import { auth, signIn, signOut } from '@/auth'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { loginWithGithub, logoutWithGithub } from '../app/actions/authActions'
import { BadgePlus, LogOut } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Navbar = async () => {
  const session = await auth();

  return (
    <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
      <nav className='flex justify-between items-center'>
        <Link href="/">
          <Image src="/logo.png" alt='logo' width={144} height={30} />
        </Link>

        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            <>
              <Link href='/startup/create'>
                <span className='max-sm:hidden'>Create</span>
                <BadgePlus className='size-6 sm:hidden' />
              </Link>

              <form action={logoutWithGithub}>
                <button type='submit' className='cursor-pointer'>
                  <span className='max-sm:hidden'>Logout</span>
                  <LogOut className='size-6 sm:hidden text-red-500' />

                </button>
              </form>

              <Link href={`/user/${session?.id}`}>
                {/* <span>{session?.user?.name}</span> */}
                <Avatar>
                  <AvatarImage src={session?.user?.image!} />
                  <AvatarFallback>AV</AvatarFallback>
                </Avatar>
              </Link>
            </>
          ) : (
            <form action={loginWithGithub}>
              <button type='submit' className='cursor-pointer'>
                Login
              </button>
            </form>
          )}
        </div>
      </nav>

    </header>
  )
}

export default Navbar