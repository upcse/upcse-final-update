import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Pause, Play, X } from 'lucide-react';
import { ASSET_PATHS } from '../lib/assets';

interface Secretary {
  id: string;
  name: string;
  designation: string;
  photo_url: string;
  flip_card_content: {
    positions: string[];
  };
  display_order: number;
}

const mockCoreTeamMembers: Secretary[] = [
  {
    id: '1',
    name: 'Shri Anandeshwar Panday',
    designation: 'General Secretary UPCSE',
    photo_url: ASSET_PATHS.coreTeam.member1,
    flip_card_content: {
      positions: [
        'Treasurer - Indian Olympic association',
        'General secretary - South AHF',
        'President - Indian Hapkido Federation',
        'Standard committee member - Olympic council of Asia'
      ]
    },
    display_order: 1
  },
  {
    id: '2',
    name: 'Smt. Neelu Mishra',
    designation: 'TBA - UPCSE',
    photo_url: ASSET_PATHS.coreTeam.member2,
    flip_card_content: {
      positions: [
        'Athlete',
        'International master\'s athelete',
        '101+ International & National medals combined',
        'Social Worker',
        'Government Employee',
        'Ambassador - SVEEP and Beti Bachao Beti Padhao'
      ]
    },
    display_order: 2
  },
  {
    id: '3',
    name: 'Shri Pankaj Pandey',
    designation: 'TBA - UPCSE',
    photo_url: ASSET_PATHS.coreTeam.member3,
    flip_card_content: {
      positions: [
        'National Player MPED'
      ]
    },
    display_order: 3
  }
];

const mockEvents = [
  {
    id: '1',
    title: '24th ICSE national games',
    description: 'National level sports competition organized by ICSE',
    event_type: 'upcoming',
    start_date: '24/04/2025',
    end_date: '29/04/2025',
    venue: 'Madgaon, Goa, India',
    registration_deadline: '30/03/2025',
    highlights: [
      'A golden opportunity for selection in International games for Thailand, Europe & Nepal'
    ]
  }
];

const mockNews = [
  {
    id: '1',
    title: 'UPCSE Announces State Games 2024',
    content: 'Uttar Pradesh Council for Sports & Education is proud to announce the upcoming State Games 2024.',
    image_url: ASSET_PATHS.gallery[3].url,
    published_at: '2024-03-25'
  }
];

const socialLinks = {
  facebook: '#',
  instagram: '#',
  twitter: '#'
};

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeTab, setActiveTab] = useState<'events' | 'news'>('events');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying && ASSET_PATHS.gallery.length > 0) {
        setCurrentSlide((prev) => (prev + 1) % ASSET_PATHS.gallery.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="min-h-screen bg-[#FFFFF0]">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Slideshow - 65% width */}
          <div className="col-span-8 relative bg-white rounded-lg shadow-lg p-4">
            <div className="aspect-w-16 aspect-h-9 relative">
              {ASSET_PATHS.gallery.length > 0 && (
                <img
                  src={ASSET_PATHS.gallery[currentSlide].url}
                  alt={`Gallery image ${currentSlide + 1}`}
                  className="w-full h-[400px] object-cover rounded cursor-pointer"
                  onClick={() => setSelectedImage(ASSET_PATHS.gallery[currentSlide].url)}
                />
              )}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
                <button 
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + ASSET_PATHS.gallery.length) % ASSET_PATHS.gallery.length)}
                  className="bg-white/80 p-2 rounded-full hover:bg-white"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="bg-white/80 p-2 rounded-full hover:bg-white"
                  aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
                >
                  {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                </button>
                <button 
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % ASSET_PATHS.gallery.length)}
                  className="bg-white/80 p-2 rounded-full hover:bg-white"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Events and News - 35% width */}
          <div className="col-span-4 bg-white rounded-lg shadow-lg p-4 h-[400px]">
            <div className="flex space-x-4 mb-4">
              <button
                className={`px-6 py-3 rounded-lg text-lg font-semibold transition-colors ${
                  activeTab === 'events' ? 'bg-[#FF9933] text-white' : 'bg-gray-200'
                }`}
                onClick={() => setActiveTab('events')}
              >
                Upcoming Events
              </button>
              <button
                className={`px-6 py-3 rounded-lg text-lg font-semibold transition-colors ${
                  activeTab === 'news' ? 'bg-[#008000] text-white' : 'bg-gray-200'
                }`}
                onClick={() => setActiveTab('news')}
              >
                Latest News
              </button>
            </div>

            <div className="overflow-y-auto max-h-[300px] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
              {activeTab === 'events' ? (
                <div className="space-y-4">
                  {mockEvents.map((event) => (
                    <div key={event.id} className="border-b pb-4">
                      <h3 className="text-xl font-semibold text-[#B67B5B]">{event.title}</h3>
                      <p className="text-gray-600">{event.description}</p>
                      <div className="mt-2">
                        <p><span className="font-semibold">Venue:</span> {event.venue}</p>
                        <p>
                          <span className="font-semibold">Date:</span>{' '}
                          {event.start_date} to {event.end_date}
                        </p>
                        <p>
                          <span className="font-semibold">Registration Deadline:</span>{' '}
                          {event.registration_deadline}
                        </p>
                        {event.highlights && (
                          <ul className="mt-2 list-disc list-inside">
                            {event.highlights.map((highlight, index) => (
                              <li key={index} className="text-[#407245] font-medium">{highlight}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {mockNews.map((item) => (
                    <div key={item.id} className="border-b pb-4">
                      <h3 className="text-xl font-semibold text-[#B67B5B]">{item.title}</h3>
                      <p className="text-gray-600">{item.content}</p>
                      {item.image_url && (
                        <img
                          src={item.image_url}
                          alt={item.title}
                          className="mt-2 rounded-lg w-full cursor-pointer"
                          onClick={() => setSelectedImage(item.image_url)}
                        />
                      )}
                      <p className="text-sm text-gray-500 mt-2">
                        {item.published_at}
                      </p>
                    </div>
                  ))}
                  <div className="text-center pt-4">
                    <Link 
                      to="/gallery#news"
                      className="text-[#B67B5B] hover:text-[#407245] font-semibold"
                    >
                      Show More →
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Core Team Members */}
        <div className="mt-16">
          <div className="flex justify-between items-end px-16">
            {mockCoreTeamMembers.map((member, index) => (
              <div key={member.id} className={`w-[${350 - (index * 25)}px]`}>
                <div className="w-full">
                  <img
                    src={member.photo_url}
                    alt={member.name}
                    className={`w-full object-cover ${
                      index === 0 
                        ? 'core-team-image-primary' 
                        : index === 1 
                          ? 'core-team-image-secondary' 
                          : 'core-team-image-tertiary'
                    }`}
                  />
                  <div className="text-center mt-4">
                    <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-xl text-gray-600 mt-1">{member.designation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* About UPCSE */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8 relative">
            <span className="relative inline-block">
              ABOUT UPCSE
              <span className="absolute -bottom-4 left-1/4 right-1/4 h-1 bg-[#FF9933]"></span>
            </span>
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-lg mb-6">
              The Uttar Pradesh Council for Sports & Education (UPCSE) was established in 2017 with the vision of promoting sports and education at the grassroots level across Uttar Pradesh. Our mission is to discover, nurture, and develop sporting talent while ensuring quality education remains accessible to all.
            </p>
            <h3 className="text-2xl font-bold text-center mb-6 text-[#FF9933]">
              " खेलेगा गाँव तभी तो खेलेगा भारत| "
            </h3>
            <p className="text-lg">
              UPCSE operates with the belief that sports and education go hand in hand in building a well-rounded individual. Through our various programs and initiatives, we aim to create an ecosystem where young talents can excel both in academics and sports.
            </p>
            <div className="text-center mt-8">
              <Link to="/about" className="inline-flex items-center px-6 py-3 bg-[#FF9933] text-white rounded-lg hover:bg-[#e88829] transition-colors">
                Read More →
              </Link>
            </div>
          </div>
        </div>

        {/* Objectives */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-4">OBJECTIVES</h2>
          <p className="text-xl text-center mb-8 text-gray-600">Our mission and key focus areas</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mx-[5%]">
            {[
              {
                title: 'Promoting Sports with Education',
                description: 'Integrating sports curriculum with academic education to develop well-rounded individuals.',
                icon: '🎓'
              },
              {
                title: 'Promoting Sports and Physical Education',
                description: 'Encouraging regular physical activity and sports participation among all age groups.',
                icon: '🏆'
              },
              {
                title: 'Affiliations and Collaborations',
                description: 'Building partnerships with national and international sports organizations for knowledge exchange.',
                icon: '🤝'
              },
              {
                title: 'Inclusive Participation',
                description: 'Ensuring sports opportunities are accessible to all, regardless of background or ability.',
                icon: '👥'
              },
              {
                title: 'Health and Wellness',
                description: 'Promoting overall health and wellness through sports and physical activities.',
                icon: '❤️'
              },
              {
                title: 'Community Engagement and Social Impact',
                description: 'Using sports as a tool for community development and positive social change.',
                icon: '🌟'
              }
            ].map((objective, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-[#FF9933] hover:via-[#FFFFFF] hover:to-[#008000] group"
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{objective.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-black transition-colors">
                    {objective.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-black/80">
                    {objective.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white"
            aria-label="Close fullscreen image"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Fullscreen view"
            className="max-w-[90vw] max-h-[90vh] object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default Home;