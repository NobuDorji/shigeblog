'use client'

import { useSession } from 'next-auth/react'
import UserButton from '../login/UserButton';

export const HeaderAfterLogin = () => {
  const { data: session } = useSession();

  return (
    <div className="border bg-white">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 sticky top-0">
        {/* 親要素に relative をつけて、中央ボタンを absolute で中央に */}
        <div className="relative flex items-center justify-between">
          {/* 左：ロゴ＋サイト名 */}
          <a
            href="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            <svg
              className="w-8 text-deep-purple-accent-400"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
              sigeblog
            </span>
          </a>

          {/* 中央：投稿するボタン（absoluteで中央に配置） */}
          <a
            href="./new"
            className="absolute left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            投稿する
          </a>

          {/* 右：ユーザーアイコン */}
          {session && <UserButton image={session.user?.image} />}
        </div>
      </div>
    </div>
  );
};