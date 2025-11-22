export default function Demo() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-12 bg-white rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold mb-6">HydroGraph AI Private Demo</h1>
        <p className="text-xl mb-8">Redirecting to secure environment…</p>
        <script dangerouslySetInnerHTML={{__html: 
          `window.location.href = "https://YOUR-PRIVATE-STREAMLIT-URL"`}} />
      </div>
    </div>
  )
}
