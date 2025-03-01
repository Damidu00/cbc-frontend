import React from 'react';

export default function CertificateSection() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-black mb-8">
          Our Certifications
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Certificate 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://lyycwptpupzvjwofdegk.supabase.co/storage/v1/object/public/images//c1.png"
              alt="Certificate 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-black">Certified Premium Quality</h3>
              <p className="text-gray-600 mt-2">
                This certificate ensures the highest quality standards in our products and services.
              </p>
            </div>
          </div>

          {/* Certificate 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://lyycwptpupzvjwofdegk.supabase.co/storage/v1/object/public/images//c2.png"
              alt="Certificate 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-black">Dermatologist Approved</h3>
              <p className="text-gray-600 mt-2">
                Our products have been clinically tested and approved by dermatologists.
              </p>
            </div>
          </div>

          {/* Certificate 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://lyycwptpupzvjwofdegk.supabase.co/storage/v1/object/public/images//c3.png"
              alt="Certificate 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-black">Eco-Friendly Standards</h3>
              <p className="text-gray-600 mt-2">
                This certificate confirms that our production process adheres to eco-friendly standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
