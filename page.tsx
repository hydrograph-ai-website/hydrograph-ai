export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-8 py-20 text-center">
        <h1 className="text-6xl font-bold text-blue-900 mb-6">HydroGraph AI</h1>
        <p className="text-2xl text-gray-700 mb-12">
          The Financial Brain for Water Utilities<br/>
          Generative AI • Digital Twins • 20 % Success-Fee Model
        </p>
        <div className="space-x-6">
          <a href="/demo" className="bg-blue-600 text-white px-10 py-5 rounded-lg text-xl hover:bg-blue-700">
            Private Demo (DEWA)
          </a>
          <a href="/pricing" className="border-2 border-blue-600 text-blue-600 px-10 py-5 rounded-lg text-xl hover:bg-blue-50">
            Pricing
          </a>
        </div>
        <p className="mt-20 text-3xl font-light text-gray-600">
          DEWA projected net savings: <span className="font-bold text-blue-600">AED 53.5 M/year</span>
        </p>
      </div>
    </main>
  )
}
