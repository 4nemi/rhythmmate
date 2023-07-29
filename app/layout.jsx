"use client";

import 'styles/global.css';
import { NameProvider } from '@/contexts/NameContext';
import { Montserrat, Noto_Sans_JP, DotGothic16 } from "@next/font/google";


export const metadate = {
    title: 'RhythmMate', 
    description: 'RhythmMate is a sleep tracker'
}

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

const RootLayout = ({ children, pageProps, router }) => {
    return (
        <html lang="en">
            <body className={montserrat.className}>
                <div>
                    {/*<div className="gredient" />*/}
                </div>

            <main>
                <NameProvider>
                    {children}
                </NameProvider>
            </main>
            </body>
        </html>
    )
}

export default RootLayout;