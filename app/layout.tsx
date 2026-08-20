import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "偏航记录｜个人 AI 观察笔记",
  description: "从每天的 AI 新闻里，留下真正影响产品、工作方式和个人选择的信号。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
