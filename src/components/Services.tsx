import React from 'react';
import type { Service } from '../types';
import { ServiceCard } from './ServiceCard';

const services: Service[] = [
  {
    id: '1',
    title: 'Full Stack Development',
    description: 'End-to-end web application development using modern technologies and best practices.',
    price: {
      starting: 75000,
      enterprise: 200000
    },
    icon: 'Code2'
  },
  {
    id: '2',
    title: 'Cybersecurity',
    description: 'Comprehensive security assessments, implementation, and ongoing protection strategies.',
    price: {
      starting: 100000,
      enterprise: 500000
    },
    icon: 'Shield'
  },
  {
    id: '3',
    title: 'Mobile App Development',
    description: 'Native iOS and Android applications with cutting-edge features and performance.',
    price: {
      starting: 150000,
      enterprise: 1000000
    },
    icon: 'Smartphone'
  },
  {
    id: '4',
    title: 'Penetration Testing',
    description: 'In-depth security testing, vulnerability assessment, and detailed reporting.',
    price: {
      starting: 80000,
      enterprise: 300000
    },
    icon: 'Terminal'
  },
  {
    id: '5',
    title: 'Software Consultancy',
    description: 'Expert guidance on architecture, technology stack, and development strategies.',
    price: {
      starting: 50000,
      enterprise: 200000
    },
    icon: 'Brain'
  }
];

export function Services() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Professional Services
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Enterprise-grade software development and cybersecurity solutions
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}