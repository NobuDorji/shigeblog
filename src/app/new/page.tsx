'use client'
import { useRouter } from "next/navigation";

export default function NewArticlePage() {
  const router = useRouter();
  const postAction = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const title = formData.get("title")
    const content = formData.get("content")

    await fetch("/api/articles", {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    router.push("/articles")
};
  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📚新しい記事を作成</h1>
      <form onSubmit={postAction} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">タイトル</label>
          <input
            type="text"
            name="title"
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <label className="block text-sm font-medium">内容（Markdown 可</label>
        <textarea
          name="content"
          rows={10}
          required
          className="w-full border px-3 py-2 rounded"
        ></textarea>
        <div className="grid gap-8">
        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
        >
          投稿する
        </button>
        <a href="./articles">
            戻る
        </a>
        </div>
      </form>
    </div>
  );
}
