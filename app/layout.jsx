import "./globals.css";

export const metadata = {
  title: "沐爪宠物洗护",
  description: "沐爪宠物洗护单页官网",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
