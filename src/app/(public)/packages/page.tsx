export default function PackagesPage() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-serif font-bold text-brand-green-900 dark:text-white mb-4">Our Packages</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Choose from our carefully curated Hajj and Umrah packages designed for your spiritual comfort.
        </p>
      </div>
      {/* Packages Grid will go here */}
      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-8 text-center bg-gray-50 rounded-xl dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
          <p className="text-gray-500">Packages Loading...</p>
        </div>
      </div>
    </div>
  );
}
