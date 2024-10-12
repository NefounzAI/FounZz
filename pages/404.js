/* eslint-disable react/no-unescaped-entities */
export default function Custom404() {
  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 animate-bounce">404</h1>
        <p className="text-2xl mb-6">Page Not Found</p>
        <p className="mb-8">Oops! It seems like the page you're looking for doesn't exist.</p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}
