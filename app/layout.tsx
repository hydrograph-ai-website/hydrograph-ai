export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <nav className="bg-blue-900 text-white p-6">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <a href="/" className="text-2xl font-bold">HydroGraph AI</a>
            <div className="text-lg">
              Dubai • Toronto • 2026
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-gray-900 text-white text-center py-8 mt-20">
          © 2026 HydroGraph AI — All rights reserved
        </footer>
      </body>
    </html>
  )
}
