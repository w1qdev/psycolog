import type { Metadata } from "next";
import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";
import { Roboto } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
    title: "Землянова Олеся",
    description:
        "Являюсь дипломированным психологом с опытом более 10 лет. Специализируюсь на оказании помощи людям, столкнувшимся с различными ситуациями в личной и профессиональной жизни",
};

const roboto = Roboto({
    subsets: ["cyrillic"], // Используем латинский алфавит
    weight: ["100", "300", "400", "500", "700", "900"], // Добавляем нужные начертания: обычный и жирный
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <body className={roboto.className}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
