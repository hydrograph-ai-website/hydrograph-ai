export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-8 py-20 text-center">

        <h1 className="text-6xl font-bold text-blue-900 mb-6">HydroGraph AI</h1>
        <p className="text-2xl text-gray-700 mb-12">
          The Financial Brain for Water Utilities<br/>
          Generative AI • Digital Twins • 20 % Success-Fee Model
        </p>

        {/* Pricing section */}
        <div className="my-20 bg-white p-12 rounded-2xl shadow-xl max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">You Only Pay When You Save</h2>
          <p className="text-2xl mb-6">AED 240,000 / year base</p>
          <p className="text-4xl font-bold text-green-600 mb-8">+ 20 % of verified NRW savings</p>
          <p className="text-xl text-gray-600">Average DEWA-scale customer → AED 12–18 M revenue for us</p>
        </div>

        {/* Private Demo button */}
        <a
          href="https://hydrograph-genai-app-v3ebryjoomfsqfdxvkdefb.streamlit.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-16 py-8 rounded-xl text-2xl text-2xl font-semibold hover:bg-blue-700 transition"
        >
          Open Private GenAI Demo → (password: dewa2026)
        </a>

        <p className="mt-20 text-3xl font-light text-gray-600">
          DEWA projected net savings: <span className="font-bold text-blue-600">AED 53.5 M/year</span>
        </p>
      </div>
    </main>
  )
}
