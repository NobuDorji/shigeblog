'use client'
import { signOut } from 'next-auth/react'

export default function LogoutButton() {
    return(
        <button
            className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
            onClick={() => signOut({ callbackUrl: "/"})}
            >
            
            ログアウト
            </button>
            
    )
}