'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import React, { useState } from 'react';

export const metadata: Metadata = {
  title: 'Utility Mapping Training Bristol | Sygma Solutions',
  description: 'Professional utility mapping and cable detection training courses in Bristol. GPR, CAT, and PAS128 compliant training.',
  alternates: { canonical: 'https://sygma-solutions.com/utility-mapping-training-bristol' },
  openGraph: {
    title: 'Utility Mapping Training Bristol | Sygma Solutions',
    description: 'Professional utility mapping and cable detection training courses in Bristol. GPR, CAT, and PAS128 compliant training.',
  },
};

export default function UtilityMappingBristol() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const courseData = [
    {
      name: 'CAT and Genny Course',
      duration: '2 days',
      price: '£595',
      description: 'Cable Avoidance Tools and signal generators',
    },
    {
      name: 'GPR Course',
      duration: '2 days',
      price: '£595',
      description: 'Ground Penetrating Radar training',
    },
    {
      name: 'Combined CAT, Genny & GPR Course',
      duration: '3 days',
      price: '£795',
      description: 'All three detection methods',
    },
    {
      name: 'PAS128 Qualified CAT & Genny',
      duration: '3 days',
      price: '£895',
      description: 'Cable Avoidance Tools and signal generators with PAS128 qualification',
    },
    {
      name: 'PAS128 Qualified GPR Course',
      duration: '3 days',
      price: '£895',
      description: 'Ground Penetrating Radar with PAS128 qualification',
    },
  ];

  const faqData = [
    {
      question: 'What is utility mapping?',
      answer: 'Utility mapping is the process of locating and identifying underground services such as electrical cables, water pipes, gas pipes, telecommunications cables, and drainage systems. It is an essential part of the excavation process to prevent damage to services and ensure worker safety.',
    },
    {
      question: 'What is GPR (Ground Penetrating Radar)?',
      answer: 'GPR is a geophysical technique that uses radar pulses to image the subsurface. It sends electromagnetic waves into the ground and measures the reflections to create images of subsurface features. It is particularly useful for locating utilities.',
    },
    {
      question: 'What is CAT (Cable Avoidance Tool)?',
      answer: 'A CAT is a handheld electronic device used to locate underground cables. It detects electromagnetic signals produced by live electrical cables and can identify their position and depth. It is an essential tool for safe excavation.',
    },
    {
      question: 'What is PAS128?',
      answer: 'PAS128 is a Publicly Available Specification from the British Standards Institution (BSI) for the specification of underground utility detection using non-intrusive techniques. It defines quality levels for utility mapping and is widely recognised in the UK construction industry.',
    },
    {
      question: 'What equipment will I need?',
      answer: 'The equipment provided depends on the course selected. Our courses cover CAT and Genny (signal generators), GPR equipment, or combinations of these. All equipment is provided during the training.',
    },
    {
      question: 'Is the PAS128 qualification recognised across the UK?',
      answer: 'Yes, PAS128 is a nationally recognised specification that meets the requirements of many UK construction projects and insurance companies. It is widely acknowledged as the industry standard for utility detection quality.',
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div>
              <h1 className="text-5xl font-bold text-white mb-4">
                Utility Mapping Training
              </h1>
              <p className="text-xl text-slate-300 mb-6">
                Professional cable detection and underground utility mapping training in Bristol
              </p>
              <p className="text-slate-400 mb-8">
                Master the latest utility detection technologies including GPR, CAT, and Genny equipment. Our comprehensive courses are designed to meet PAS128 quality standards and industry best practice.
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
              <h2 className="text-2xl font-semibold text-white mb-6">
                Why Choose Our Training?
              </h2>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">✓</span>
                  <span>Industry-leading instructors with 20+ years experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">✓</span>
                  <span>Hands-on training with state-of-the-art equipment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">✓</span>
                  <span>PAS128 qualified trainers and programmes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">✓</span>
                  <span>Nationally recognised qualifications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">✓</span>
                  <span>Small class sizes for personalised attention</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-8 border border-slate-700 mb-12">
            <h2 className="text-3xl font-bold text-white mb-8">Course Options</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-600">
                    <th className="text-left py-4 px-4 text-white font-semibold">Course Name</th>
                    <th className="text-left py-4 px-4 text-white font-semibold">Duration</th>
                    <th className="text-left py-4 px-4 text-white font-semibold">Price</th>
                    <th className="text-left py-4 px-4 text-white font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {courseData.map((course, index) => (
                    <tr key={index} className="border-b border-slate-700 hover:bg-slate-700/50 transition-colors">
                      <td className="py-4 px-4 text-white font-medium">{course.name}</td>
                      <td className="py-4 px-4 text-slate-300">{course.duration}</td>
                      <td className="py-4 px-4 text-blue-400 font-semibold">{course.price}</td>
                      <td className="py-4 px-4 text-slate-400">{course.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">About GPR Training</h3>
              <p className="text-slate-300 mb-4">
                Ground Penetrating Radar (GPR) is one of the most advanced utility detection technologies available. Our GPR training covers:
              </p>
              <ul className="space-y-2 text-slate-400 mb-6">
                <li>• Equipment operation and maintenance</li>
                <li>• Data collection and interpretation</li>
                <li>• Advanced detection techniques</li>
                <li>• Safety protocols and best practice</li>
                <li>• Real-world case studies</li>
              </ul>
              <p className="text-slate-300">
                Perfect for professionals who need to locate utilities in complex ground conditions.
              </p>
            </div>

            <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">PAS128 Quality Levels</h3>
              <p className="text-slate-300 mb-4">
                Our PAS128 qualified courses meet strict industry standards:
              </p>
              <ul className="space-y-2 text-slate-400 mb-6">
                <li>• QL-A: Desk study only</li>
                <li>• QL-B: Non-intrusive survey with one technique</li>
                <li>• QL-C: Non-intrusive survey with two or more techniques</li>
                <li>• QL-D: Full intrusive investigation</li>
              </ul>
              <p className="text-slate-300">
                Most of our training qualifies for QL-B and QL-C standards.
              </p>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-8 border border-slate-700 mb-12">
            <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="border border-slate-600 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full px-6 py-4 bg-slate-700 hover:bg-slate-600 transition-colors text-left font-semibold text-white flex items-center justify-between"
                  >
                    <span>{faq.question}</span>
                    <span className="text-blue-400 text-xl">
                      {expandedFaq === index ? '−' : '+'}
                    </span>
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 py-4 bg-slate-800 text-slate-300 border-t border-slate-600">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Training?</h2>
            <p className="text-blue-100 mb-8">
              Book a course today and become a qualified utility mapping professional
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Book a Course
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
