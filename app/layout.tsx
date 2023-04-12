import Link from 'next/link'

function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='ja'>
            <head />
            <body>
                <header>
                    <h1>Next.js + TypeScript</h1>
                </header>
                <nav>
                    <Link href='/'>Home </Link>
                    <Link href='/about'>About   </Link>
                </nav>
                {children}
                <footer>
                    <small>© 2023 otkrickey</small>
                </footer>
            </body>
        </html>
    )
}
export default RootLayout
