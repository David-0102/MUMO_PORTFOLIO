import React from 'react';
import { Code2, Shield, Smartphone, Terminal, Database, Brain } from 'lucide-react';
import type { Service } from '../types';
import { Link } from 'react-router-dom';

const iconMap = {
  Code2,
  Shield,
  Smartphone,
  Terminal,
  Database,
  Brain
};

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon as keyof typeof iconMap];
  
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-primary-100">
      <div className="p-6">
        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-primary-600 to-secondary-500 text-white">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mt-4 text-lg font-medium text-primary-900">
          {service.title}
        </h3>
        <p className="mt-2 text-base text-gray-600">
          {service.description}
        </p>
        <div className="mt-4 space-y-2">
          <div>
            <span className="text-2xl font-bold text-primary-700">
              KES {service.price.starting.toLocaleString()}
            </span>
            <span className="text-gray-600"> starting price</span>
          </div>
          <div>
            <span className="text-lg text-gray-600">
              Enterprise solutions from KES {service.price.enterprise.toLocaleString()}
            </span>
          </div>
        </div>
        <Link
          to="/booking"
          className="mt-6 block w-full text-center bg-gradient-to-r from-primary-600 to-secondary-500 text-white py-2 px-4 rounded-md hover:from-primary-700 hover:to-secondary-600 transition-all duration-300"
        >
          Book Consultation
        </Link>
      </div>
    </div>
  );
}