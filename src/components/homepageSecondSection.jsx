import React from 'react';

export default function HomepageSecondSection() {
  return (
    <div className="bg-gray-100 py-10 px-5">
      {/* Welcome Section */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-black">Welcome to Crystal Beauty Clear!</h2>
          <p className="text-gray-700 mt-4">
            Your one-stop destination for premium beauty products. We bring you the finest selection of skincare,
            haircare, and cosmetics to enhance your natural beauty. Discover products that make you feel confident
            and radiant every day.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://lyycwptpupzvjwofdegk.supabase.co/storage/v1/object/public/images//welcome%20cbc.png"
            alt="Welcome Image"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row-reverse items-center gap-8 mt-10">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-black">About Crystal Beauty Clear</h2>
          <p className="text-gray-700 mt-4">
            Crystal Beauty Clear is a trusted beauty brand dedicated to providing high-quality beauty and skincare
            essentials. With a commitment to excellence, we offer carefully curated products that cater to all your
            beauty needs. Transform your routine with our exclusive collection and embrace your true beauty.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://lyycwptpupzvjwofdegk.supabase.co/storage/v1/object/public/images//about-cbc.png"
            alt="About Image"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
