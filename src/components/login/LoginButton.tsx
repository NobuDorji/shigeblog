'use client'
import { signIn } from 'next-auth/react'

export default function LoginButton() {
    return (
        <button
        className="bg-gray-800 text-white px-4 py-3 rounded hover:bg-blue-700 text-center ml-auto"
        onClick={() => signIn("google", {
          callbackUrl: "/articles",
          prompt: "select_account consent",
        })}
        >
        ログイン
      </button>
    )
}