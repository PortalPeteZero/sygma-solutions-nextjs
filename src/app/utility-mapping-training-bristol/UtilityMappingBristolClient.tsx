'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';

export default function UtilityMappingBristolClient() {
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
      {/* Hero Section */}
      <div className="relative w-full h-96 overflow-hidden bg-foreground">
        <Image
          src="Utility-Mapping-04"
          alt="Utility mapping training in Bristol"
          fill
          className="absolute inset-0 object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/30" />
        <div className="absolute inset-0 border-l-4 border-accent" />
        <div className="relative flex flex-col justify-end p-8 md:p-12 h-full">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-primary-foreground mb-3">
            Utility Mapping Training Bristol
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-3xl">
            Professional cable detection and underground utility mapping training in Bristol. Master GPR, CAT, and Genny equipment. PAS128 compliant courses.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <p className="eyebrow text-primary mb-3">About This Training</p>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Utility Mapping Training
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Professional cable detection and underground utility mapping training in Bristol
            </p>
            <p className="text-muted-foreground">
              Master the latest utility detection technologies including GPR, CAT, and Genny equipment. Our comprehensive courses are designed to meet PAS128 quality standards and industry best practice.
            </p>
          </div>
          <div className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Why Choose Our Training?
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1 shrink-0">✓</span>
                <span>Industry-leading instructors with 20+ years experience</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1 shrink-0">✓</span>
                <span>Hands-on training with state-of-the-art equipment</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1 shrink-0">✓</span>
                <span>PAS128 qualified trainers and programmes</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1 shrink-0">✓</span>
                <span>Nationally recognised qualifications</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1 shrink-0">✓</span>
                <span>Small class sizes for personalised attention</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-card rounded-lg p-8 border border-border mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-8">Course Options</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 text-foreground font-semibold">Course Name</th>
                  <th className="text-left py-4 px-4 text-foreground font-semibold">Duration</th>
                  <th className="text-left py-4 px-4 text-foreground font-semibold">Price</th>
                  <th className="text-left py-4 px-4 text-foreground font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                {courseData.map((course, index) => (
                  <tr key={index} className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-4 text-foreground font-medium">{course.name}</td>
                    <td className="py-4 px-4 text-muted-foreground">{course.duration}</td>
                    <td className="py-4 px-4 text-primary font-semibold">{course.price}</td>
                    <td className="py-4 px-4 text-muted-foreground">{course.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-card rounded-lg p-8 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">About GPR Training</h3>
            <p className="text-muted-foreground mb-4">
              Ground Penetrating Radar (GPR) is one of the most advanced utility detection technologies available. Our GPR training covers:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-6">
              <li>• Equipment operation and maintenance</li>
              <li>• Data collection and interpretation</li>
              <li>• Advanced detection techniques</li>
              <li>• Safety protocols and best practice</li>
              <li>• Real-world case studies</li>
            </ul>
            <p className="text-muted-foreground">
              Perfect for professionals who need to locate utilities in complex ground conditions.
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">PAS128 Quality Levels</h3>
            <p className="text-muted-foreground mb-4">
              Our PAS128 qualified courses meet strict industry standards:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-6">
              <li>• QL-A: Desk study only</li>
              <li>• QL-B: Non-intrusive survey with one technique</li>
              <li>• QL-C: Non-intrusive survey with two or more techniques</li>
              <li>• QL-D: Full intrusive investigation</li>
            </ul>
            <p className="text-muted-foreground">
              Most of our training qualifies for QL-B and QL-C standards.
            </p>
          </div>
        </div>

        <div className="bg-card rounded-lg p-8 border border-border mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 bg-muted/30 hover:bg-muted/50 transition-colors text-left font-semibold text-foreground flex items-center justify-between"
                >
                  <span>{faq.question}</span>
                  <span className="text-primary text-xl shrink-0">
                    {expandedFaq === index ? '−' : '+'}
                  </span>
                </button>
                {expandedFaq === index && (
                  <div className="px-6 py-4 bg-background text-muted-foreground border-t border-border">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">Ready to Start Your Training?</h2>
          <p className="text-primary-foreground/80 mb-8">
            Book a course today and become a qualified utility mapping professional
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary-foreground text-primary font-semibold py-3 px-8 rounded-lg hover:bg-primary-foreground/90 transition-colors"
          >
            Book a Course
          </Link>
        </div>
      </div>
    </>
  );
}
