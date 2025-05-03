'use client'

import { useSession } from "next-auth/react"
import { useState } from "react"
import LogoutButton from "./LogoutButton"

type Props = {
  image?: string | null
  size?: number
}

export default function UserButton({ image, size = 40 }: Props) {
  const { data: session } = useSession()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="relative ml-auto">
      <button
        aria-label="Toggle Menu"
        title="Toggle Menu"
        className="p-1 transition duration-200 rounded-full hover:ring-2 ring-gray-300"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <img
          src={image ?? "/default.png"}
          alt="User Icon"
          width={size}
          height={size}
          className="object-cover rounded-full shadow-sm"
        />
      </button>

      {isMenuOpen && (
  <div className="absolute right-0 mt-2 w-64 bg-gray-900 text-white rounded-lg shadow-lg z-50">
    <div className="p-4 border-b border-gray-700">
      <p className="text-sm font-semibold text-white truncate">
        {session?.user?.email ?? "no-email@example.com"}
      </p>
    </div>
    <ul className="p-4 space-y-3">
      <li>
        <a href="/mypage" className="hover:underline">マイページ</a>
      </li>
      <li>
        <LogoutButton />
      </li>
    </ul>
  </div>
)}
    </div>
  )
}
