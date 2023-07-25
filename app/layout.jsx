import 'styles/global.css';

export const metadate = {
    title: 'RhythmMate', 
    description: 'RhythmMate is a sleep tracker'
}

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <div className="main">
                    <div className="gredient" />
                </div>

            <main classNam="app">
                {children}
            </main>
            </body>
        </html>
    )
}

export default RootLayout;