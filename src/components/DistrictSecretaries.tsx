import React, { useState } from 'react';
import { Search, Mail, Phone } from 'lucide-react';
import { ASSET_PATHS } from '../lib/assets';

interface Secretary {
  id: string;
  name: string;
  district: string;
  designation: string;
  email: string;
  phone: string;
  photo_url?: string;
}

const mockSecretaries: Secretary[] = [
  {
    id: '1',
    name: 'Mr. Amit Verma',
    district: 'Agra',
    designation: 'District Secretary, UPCSE',
    email: 'amit.verma@upcse.info',
    phone: '+91 9876543214',
  },
  {
    id: '2',
    name: 'Dr. Rajesh Kumar',
    district: 'Lucknow',
    designation: 'District Secretary',
    email: 'rajesh.kumar@upcse.info',
    phone: '+91 9876543210',
  },
  {
    id: '3',
    name: 'Dr. Sunita Singh',
    district: 'Varanasi',
    designation: 'District Secretary',
    email: 'sunita.singh@upcse.info',
    phone: '+91 9876543212',
  },
  {
    id: '4',
    name: 'Mr. Vikram Patel',
    district: 'Kanpur',
    designation: 'District Secretary',
    email: 'vikram.patel@upcse.info',
    phone: '+91 9876543211',
  }
];

const districts = [
  'Agra', 'Aligarh', 'Allahabad', 'Ambedkar Nagar', 'Amethi', 'Amroha', 'Auraiya',
  'Azamgarh', 'Baghpat', 'Bahraich', 'Ballia', 'Balrampur', 'Banda', 'Barabanki',
  'Bareilly', 'Basti', 'Bhadohi', 'Bijnor', 'Budaun', 'Bulandshahr', 'Chandauli',
  'Chitrakoot', 'Deoria', 'Etah', 'Etawah', 'Faizabad', 'Farrukhabad', 'Fatehpur',
  'Firozabad', 'Gautam Buddha Nagar', 'Ghaziabad', 'Ghazipur', 'Gonda', 'Gorakhpur',
  'Hamirpur', 'Hapur', 'Hardoi', 'Hathras', 'Jalaun', 'Jaunpur', 'Jhansi', 'Kannauj',
  'Kanpur Dehat', 'Kanpur Nagar', 'Kasganj', 'Kaushambi', 'Kushinagar', 'Lakhimpur Kheri',
  'Lalitpur', 'Lucknow', 'Maharajganj', 'Mahoba', 'Mainpuri', 'Mathura', 'Mau',
  'Meerut', 'Mirzapur', 'Moradabad', 'Muzaffarnagar', 'Pilibhit', 'Pratapgarh',
  'Raebareli', 'Rampur', 'Saharanpur', 'Sambhal', 'Sant Kabir Nagar', 'Shahjahanpur',
  'Shamli', 'Shravasti', 'Siddharthnagar', 'Sitapur', 'Sonbhadra', 'Sultanpur',
  'Unnao', 'Varanasi'
];

const DistrictSecretaries = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);

  const filteredDistricts = districts.filter(district =>
    district.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredSecretaries = mockSecretaries.filter(secretary =>
    !selectedDistrict || secretary.district === selectedDistrict
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">District Secretaries</h1>
        <p className="text-lg text-gray-600">
          Our network of representatives across Uttar Pradesh
        </p>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* District Selection Sidebar */}
        <div className="col-span-3">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search districts..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9933]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
            <div className="max-h-[600px] overflow-y-auto">
              {filteredDistricts.map((district) => (
                <button
                  key={district}
                  onClick={() => setSelectedDistrict(district)}
                  className={`w-full text-left px-4 py-2 rounded-lg mb-2 transition-colors ${
                    selectedDistrict === district
                      ? 'bg-[#FF9933] text-white'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {district}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Secretaries */}
        <div className="col-span-9">
          <h2 className="text-2xl font-bold mb-6">Featured Secretaries</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSecretaries.map((secretary) => (
              <div key={secretary.id} className="secretary-card">
                <div className="relative h-48 bg-gray-200">
                  {secretary.photo_url ? (
                    <img
                      src={secretary.photo_url}
                      alt={secretary.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      Photo Coming Soon
                    </div>
                  )}
                  <div className="absolute top-2 right-2 bg-[#FF9933] text-white px-3 py-1 rounded-full text-sm">
                    {secretary.district}
                  </div>
                </div>
                <div className="secretary-info">
                  <h3 className="secretary-name">{secretary.name}</h3>
                  <p className="secretary-title">{secretary.designation}</p>
                  <div className="secretary-contact">
                    <a
                      href={`mailto:${secretary.email}`}
                      className="flex items-center text-gray-600 hover:text-[#FF9933]"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      {secretary.email}
                    </a>
                    <a
                      href={`tel:${secretary.phone}`}
                      className="flex items-center text-gray-600 hover:text-[#FF9933]"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      {secretary.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DistrictSecretaries;