import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Course Comparison | EUS vs ProQual CAT 1 Training | Sygma',
  description: 'Compare EUSR CAT 1, ProQual CAT 1, and ProQual CAT 1 Plus training courses from Sygma Solutions.',
  canonical: '/courses/comparison',
  openGraph: {
    title: 'Course Comparison | EUS vs ProQual CAT 1 Training | Sygma',
    description: 'Detailed comparison of EUSR and ProQual CAT 1 training options.',
  },
};

export default function CourseComparisonPage() {
  const comparisonData = [
    {
      feature: 'Training Duration',
      eusr: '1 day',
      proqualCat1: '2 days',
      proqualCat1Plus: '2 days',
    },
    {
      feature: 'Hands-on Practicals',
      eusr: 'Yes',
      proqualCat1: 'Yes',
      proqualCat1Plus: 'Yes (Extended)',
    },
    {
      feature: 'Cable Detection',
      eusr: 'Core focus',
      proqualCat1: 'Core focus',
      proqualCat1Plus: 'Advanced techniques',
    },
    {
      feature: 'Certification Body',
      eusr: 'EUSR approved',
      proqualCat1: 'ProQual approved',
      proqualCat1Plus: 'ProQual approved',
    },
    {
      feature: 'UK Recognition',
      eusr: 'Widely recognised',
      proqualCat1: 'Widely recognised',
      proqualCat1Plus: 'Widely recognised',
    },
    {
      feature: 'Assessment Method',
      eusr: 'Practical & Theory',
      proqualCat1: 'Practical & Theory',
      proqualCat1Plus: 'Practical & Theory',
    },
    {
      feature: 'Cost',
      eusr: 'Competitive',
      proqualCat1: 'Moderate',
      proqualCat1Plus: 'Premium',
    },
    {
      feature: 'Best For',
      eusr: 'Quick qualification',
      proqualCat1: 'Thorough training',
      proqualCat1Plus: 'Advanced operatives',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold mb-4">CAT 1 Course Comparison</h2>
        <p className="text-lg text-gray-600 mb-8">
          Compare EUSR CAT 1, ProQual CAT 1, and ProQual CAT 1 Plus training programmes to find the right fit for your needs.
        </p>

        <div className="overflow-x-auto my-12">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left font-semibold">Feature</th>
                <th className="border border-gray-300 p-4 text-center font-semibold">EUSR CAT 1</th>
                <th className="border border-gray-300 p-4 text-center font-semibold">ProQual CAT 1</th>
                <th className="border border-gray-300 p-4 text-center font-semibold">ProQual CAT 1 Plus</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="border border-gray-300 p-4 font-semibold">{row.feature}</td>
                  <td className="border border-gray-300 p-4 text-center">{row.eusr}</td>
                  <td className="border border-gray-300 p-4 text-center">{row.proqualCat1}</td>
                  <td className="border border-gray-300 p-4 text-center">{row.proqualCat1Plus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
          <div className="border rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-4">EUSR CAT 1</h3>
            <p className="text-gray-700 mb-6">
              Single-day intensive training providing industry-standard cable detection qualification.
            </p>
            <Link href="/courses/eus-cat1" className="inline-block text-blue-600 hover:text-blue-700 font-semibold">
              Learn More →
            </Link>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-4">ProQual CAT 1</h3>
            <p className="text-gray-700 mb-6">
              Two-day comprehensive training combining theory and extensive practical experience.
            </p>
            <button className="inline-block text-blue-600 hover:text-blue-700 font-semibold">
              Learn More →
            </button>
          </div>
          <div className="border border-blue-300 rounded-lg p-6 bg-blue-50">
            <h3 className="text-2xl font-semibold mb-4">ProQual CAT 1 Plus</h3>
            <p className="text-gray-700 mb-6">
              Premium two-day programme with advanced techniques and extended practical training.
            </p>
            <button className="inline-block text-blue-600 hover:text-blue-700 font-semibold">
              Learn More →
            </button>
          </div>
        </div>

        <div className="my-12 bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-4">Need Help Choosing?</h3>
          <p className="text-gray-700 mb-6">
            Our training advisors can help you select the right qualification for your experience level and career goals.
          </p>
          <Link href="/contact" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Get Advice
          </Link>
        </div>
      </div>
    </div>
  );
}