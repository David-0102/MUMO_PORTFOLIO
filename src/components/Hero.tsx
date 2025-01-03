import React from 'react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-primary-800 via-primary-700 to-secondary-700 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Mumo Ndunda</span>{' '}
                <span className="block text-accent-200 xl:inline">
                  Pedi wa Tech
                </span>
              </h1>
              <p className="mt-3 text-base text-primary-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Full Stack Developer, Cybersecurity Specialist, and Software
                Consultant with expertise in mobile app development and
                penetration testing.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="/booking"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-900 bg-accent-300 hover:bg-accent-400 md:py-4 md:text-lg md:px-10 transition-colors"
                  >
                    Book a Consultation
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    to="/portfolio"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10 transition-colors"
                  >
                    View Portfolio
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://i.imgur.com/qt8HKo8.jpeg"
          alt="Mumo Ndunda - Professional Photo"
        />
      </div>
    </div>
  );
}
