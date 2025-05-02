import { NextResponse } from "next/server";
import { prisma } from '@/lib/prisma'
import type { NextRequest } from 'next/server'
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";


export async function POST(req: NextRequest) {
    const session = await getServerSession(authOptions); // ✅ 関数内で await
  
    const body = await req.json();
    const { title, content } = body;
  
    if (!session || !session.user?.id) {
      return NextResponse.json({ error: "未認証です" }, { status: 401 });
    }
  
    try {
      const article = await prisma.article.create({
        data: {
          title,
          content,
          userId: session.user.id,
          createdAt: new Date
        }
      });
  
      return NextResponse.json(article, { status: 201 });
    } catch (error) {
        console.error("記事作成エラー:", error)
      return NextResponse.json({ error: "登録失敗" }, { status: 500 });
    }
  }
export async function GET() {
    try {
        const articles = await prisma.article.findMany({
            include: {
                user: true,
            },
            orderBy: { id: "desc" },
        }); 
        return NextResponse.json(articles)
    } catch (error) {
        return NextResponse.json({ error: '取得失敗' }, { status: 500 })
    }


}