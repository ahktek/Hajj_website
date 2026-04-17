export default function OfficesPage() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-serif font-bold text-brand-green-900 dark:text-white mb-4">Our Offices</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Visit us at one of our branches across Bangladesh for personalized assistance.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="card-container p-8">
          <h2 className="text-2xl font-serif font-semibold text-brand-green-900 dark:text-white mb-2">Dhaka Head Office</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            123 Motijheel Commercial Area, Dhaka 1000, Bangladesh
          </p>
          <p className="font-medium text-brand-green-700 dark:text-brand-green-400">Phone: 01711-000000</p>
        </div>
        <div className="card-container p-8">
          <h2 className="text-2xl font-serif font-semibold text-brand-green-900 dark:text-white mb-2">Chittagong Branch</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            45 Agrabad Commercial Area, Chittagong 4000, Bangladesh
          </p>
          <p className="font-medium text-brand-green-700 dark:text-brand-green-400">Phone: 01811-000000</p>
        </div>
      </div>
    </div>
  );
}
