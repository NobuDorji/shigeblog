// components/UserProfile.tsx
'use client'

type Props = {
  image?: string | null;
  email?: string | null;
}

export default function UserProfile({ image, email }: Props) {
  return (
    <div className="flex items-center">
      <a href="/" aria-label="Author" title="Author" className="mr-3">
        <img
          src={image ?? "/default.png"}
          alt="User Icon"
          width={40}
          className="object-cover w-10 h-10 rounded-full shadow-sm"
        />
      </a>
      <div>
        <a
          href="/"
          aria-label="Author"
          title="Author"
          className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
        >
          {email}
        </a>
      </div>
    </div>
  )
}