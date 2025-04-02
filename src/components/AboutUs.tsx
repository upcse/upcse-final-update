import React from 'react';
import { ASSET_PATHS } from '../lib/assets';
import { Trophy, Users, Calendar } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About UPCSE</h1>
        <p className="text-lg text-gray-600">
          Promoting sports and education across Uttar Pradesh since 2017
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-700 leading-relaxed">
              The Uttar Pradesh Council for Sports & Education (UPCSE) was established in 2017 with the vision of promoting sports and education at the grassroots level across Uttar Pradesh. Our mission is to discover, nurture, and develop sporting talent while ensuring quality education remains accessible to all.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              UPCSE operates with the belief that sports and education go hand in hand in building a well-rounded individual. Through our various programs and initiatives, we aim to create an ecosystem where young talents can excel both in academics and sports.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Over the years, UPCSE has established a strong network of district secretaries who work tirelessly to implement our vision at the local level. We have successfully organized numerous state-level competitions and have seen our athletes represent Uttar Pradesh at national and international platforms.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Our council works in close collaboration with schools, colleges, and other educational institutions to integrate sports into the curriculum and provide the necessary infrastructure and training facilities for aspiring athletes.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              UPCSE is committed to the holistic development of youth in Uttar Pradesh through the power of sports and education. We believe in the potential of every child and strive to provide them with opportunities to realize their dreams.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#FF9933]">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              To create an integrated ecosystem that nurtures both sports talent and educational excellence, making Uttar Pradesh a role model for comprehensive youth development in India.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#008000]">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              A future where every child in Uttar Pradesh has access to quality sports facilities and education, enabling them to achieve their full potential and represent our state and country with pride.
            </p>
          </section>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src={ASSET_PATHS.logos.main} 
              alt="UPCSE Logo" 
              className="w-64 h-64 mx-auto my-8 object-contain"
            />
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <span className="font-semibold w-32">Headquarters:</span>
                <span>Lucknow, Uttar Pradesh, India</span>
              </p>
              <p className="flex items-center">
                <span className="font-semibold w-32">Registration:</span>
                <span>Established 2017</span>
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">Key Achievements</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-700">
                <Trophy className="w-5 h-5 mr-2 text-[#FF9933]" />
                Organized the first state-wide integrated sports championship in 2018
              </li>
              <li className="flex items-center text-gray-700">
                <Users className="w-5 h-5 mr-2 text-[#008000]" />
                Established district-level training centers across 40 districts
              </li>
              <li className="flex items-center text-gray-700">
                <Trophy className="w-5 h-5 mr-2 text-[#0000FF]" />
                Implemented sports scholarship program benefiting over 2,000 students
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <Calendar className="w-8 h-8 mx-auto mb-2 text-[#FF9933]" />
              <div className="text-3xl font-bold">2017</div>
              <div className="text-sm text-gray-600">Established</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <Users className="w-8 h-8 mx-auto mb-2 text-[#008000]" />
              <div className="text-3xl font-bold">75+</div>
              <div className="text-sm text-gray-600">District Secretaries</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <Trophy className="w-8 h-8 mx-auto mb-2 text-[#0000FF]" />
              <div className="text-3xl font-bold">150+</div>
              <div className="text-sm text-gray-600">Tournaments Organized</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <Trophy className="w-8 h-8 mx-auto mb-2 text-[#FF9933]" />
              <div className="text-3xl font-bold">10,000+</div>
              <div className="text-sm text-gray-600">Student Athletes</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;