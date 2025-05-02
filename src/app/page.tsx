import { Footer } from "@/components/footers/footer";
import { Header } from "@/components/headers/header";

export default function Home() {
  return (
    <>
      <Header />

      {/* ヘッダー下に余白を追加 */}
      <div className="bg-neutral-100">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Brand new
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="pattern-dots"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect fill="url(#pattern-dots)" width="52" height="24" />
                </svg>
                <span className="relative">生成AI</span>
              </span>{" "}
              技術ブログ
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              日々の学習で学んだことをブログとして投稿し、その記事を元にChatGPTが復習問題を作成してくるインプットもアウトプットも兼ねた技術ブログになります。
            </p>
          </div>
        </div>

        <div className="grid gap-8 row-gap-0 lg:grid-cols-3">
          {["Step 1", "Step 2", "Step 3"].map((step, index) => (
            <div key={step} className="relative text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-20 sm:h-20">
                <svg
                  className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 text-2xl font-extrabold">{step}</h6>
              <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
                {index === 0 &&
                  "投稿ボタンを押して学習記事を作成する"}
                {index === 1 &&
                  "マイページから過去の記事を見返し、復習したい内容からChatGPTに問題を作成もらい知識の理解を深める"}
                {index === 2 &&
                  "新しくわからないことが出来たら再度記事作成を繰り返し知識の輪を広げるとともに知識を定着させる😃"}
              </p>
              {index < 2 && (
                <div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
                  <svg
                    className="w-8 text-gray-700 transform rotate-90 lg:rotate-0"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <line
                      fill="none"
                      strokeMiterlimit="10"
                      x1="2"
                      y1="12"
                      x2="22"
                      y2="12"
                    />
                    <polyline
                      fill="none"
                      strokeMiterlimit="10"
                      points="15,5 22,12 15,19 "
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* フッター前に余白 */}
        <div className="mt-12">
          <Footer />
        </div>
      </div>
    </>
  );
}
