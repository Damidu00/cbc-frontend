import React from 'react';

export default function AboutUs() {
  return (
    <div className="bg-gray-50 min-h-screen">

      <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: "url('https://img.freepik.com/free-vector/cosmetics-cream-jar-mock-up-banner-beauty-product_33099-1959.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl text-white font-bold">About Cristal Beauty Clear</h1>
        </div>
      </div>


      <div className="container mx-auto py-12 px-4 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Discover the Essence of Beauty</h2>
          <p className="text-gray-600 mt-4 text-lg">
            At Cristal Beauty Clear, we believe in celebrating natural beauty while enhancing it with our premium products. From skincare to cosmetics, we are here to bring out the best version of you.
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="https://source.unsplash.com/800x600/?makeup,cosmetics"
              alt="Beauty Products"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
            <p className="text-gray-600 mt-4">
              Cristal Beauty Clear is dedicated to creating innovative, eco-friendly beauty products that not only enhance your appearance but also nourish your skin. Our mission is to empower individuals to embrace their unique beauty.
            </p>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold text-gray-800">Why Choose Us?</h3>
            <p className="text-gray-600 mt-4">
              Our products are made with the finest ingredients, designed for all skin types, and formulated with care to provide lasting results. Choose Cristal Beauty Clear for quality, sustainability, and a promise of excellence.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="https://source.unsplash.com/800x600/?skincare,beauty"
              alt="Natural Beauty"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>


      <div className="bg-white py-12">
        <div className="container mx-auto px-4 md:px-12 text-center">
          <h3 className="text-3xl font-bold text-gray-800">Meet Our Team</h3>
          <p className="text-gray-600 mt-4">
            A passionate group of beauty enthusiasts working to redefine skincare and beauty standards.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="flex flex-col items-center">
              <img
                src="https://source.unsplash.com/150x150/?person,beauty"
                alt="Team Member"
                className="rounded-full shadow-md"
              />
              <h4 className="mt-4 text-lg font-semibold text-gray-800">Sophia Lee</h4>
              <p className="text-gray-500">Founder & CEO</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://source.unsplash.com/150x150/?person,cosmetics"
                alt="Team Member"
                className="rounded-full shadow-md"
              />
              <h4 className="mt-4 text-lg font-semibold text-gray-800">James Carter</h4>
              <p className="text-gray-500">Product Manager</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://source.unsplash.com/150x150/?person,skincare"
                alt="Team Member"
                className="rounded-full shadow-md"
              />
              <h4 className="mt-4 text-lg font-semibold text-gray-800">Emily Davis</h4>
              <p className="text-gray-500">Marketing Head</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
