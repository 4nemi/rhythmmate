import 'styles/global.css';

export const metadate = {
    title: 'RhythmMate', 
    description: 'RhythmMate is a sleep tracker'
}


const RootLayout = ({ children, pageProps, router }) => {
    return (
        <html lang="en">
            <body>
                <div>
                    {/*<div className="gredient" />*/}
                </div>

            <main>
                {children}
            </main>
            </body>
        </html>
    )
}

export default RootLayout;