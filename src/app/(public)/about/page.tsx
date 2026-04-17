export default function AboutClientsPage() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-serif font-bold text-brand-green-900 dark:text-white mb-4">About Our Clients</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Hear from the thousands of pilgrims who have trusted us with their spiritual journey.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[1, 2, 3].map((item) => (
          <div key={item} className="card-container p-6 bg-white dark:bg-gray-800 border-t-4 border-brand-gold-500">
            <p className="italic text-gray-600 dark:text-gray-300 mb-4">
              "Al Haramain Hajj provided excellent service. The guides were knowledgeable and the accommodation was top-notch."
            </p>
            <div className="font-semibold text-brand-green-900 dark:text-white">- Hajj Pilgrim {2023 + item}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
