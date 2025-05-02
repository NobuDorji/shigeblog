'use client'

import { Footer } from "@/components/footers/footer";
import { HeaderAfterLogin } from "@/components/headers/HeaderAfterLogin";
import UserProfile from "@/components/userprofile/UserProfile";
import { useEffect, useState } from "react";

export default function Articles() {
  const [articles, setArticles] = useState<any[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const res = await fetch("/api/articles");
      const data = await res.json();
      setArticles(data);
    };
    fetchArticles();
  }, []);

  return (
    <>
      <HeaderAfterLogin />

      {/* ヘッダー下に余白追加 */}
      <div className="bg-neutral-100 min-h-screen py-10">
        <div className="container mx-auto px-4 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md mx-auto flex flex-col justify-between h-full"
            >
              {/* 上部の内容 */}
              <div>
                {/* 日付部分（仮） */}
                <div className="mb-4 border-b border-gray-300 pb-2 text-center">
                  <p className="text-sm text-gray-500">{new Date(article.createdAt).toLocaleString('en-US', { month: 'short' })}</p>
                  <p className="text-lg font-bold text-gray-700">{new Date(article.createdAt).getDate()}</p>
                </div>

                {/* タイトル */}
                <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-deep-purple-600 transition">
                  {article.title}
                </h2>

                {/* 本文 */}
                <p className="text-gray-700 mb-4">{article.content}</p>
              </div>

              {/* カード下部に固定表示されるプロフィール */}
              <div className="mt-auto pt-4 border-t border-gray-200">
                <UserProfile
                  image={article.user?.image}
                  email={article.user?.email}
                />
              </div>
            </div>
          ))}
        </div>

        {/* フッター前に余白追加 */}
        <div className="mt-12">
          <Footer />
        </div>
      </div>
    </>
  );
}