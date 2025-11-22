export default function Demo() {
  return (
    <div className="min-h-screen" flex items-center justify-center bg-gray-50">
      <div className="text-center p-12 bg-white rounded-2xl shadow-2xl max-w-lg">
        <h1 className="text-4xl font-bold text-blue-900 mb-6">
          HydroGraph AI – Private GenAI Demo
        </h1>
        <p className="text-xl text-gray-700 mb-10">
          Redirecting to your secure, password-protected demo…
        </p>
        <div className="animate-pulse">
          <div className="h-4 bg-blue-200 rounded w-48 mx-auto"></div>
        </div>

        {/* ← THIS IS THE ONLY LINE THAT MATTERS */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.location.href = "https://hydrograph-genai-app-v3ebryjoomfsqfdxvkdefb.streamlit.app"`,
          }}
        />
      </div>
    </div>
  )
}
