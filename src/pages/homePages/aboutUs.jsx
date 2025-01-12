import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavigationBar from '../../components/navigationBar';
import Footer from '../../components/footer';

export default function AboutUs() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,    
    });
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <NavigationBar/>
     
      <div
        className="relative bg-cover bg-center h-96"
        style={{ backgroundImage: "url('https://img.freepik.com/free-vector/cosmetics-cream-jar-mock-up-banner-beauty-product_33099-1959.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1
            className="text-4xl md:text-6xl text-white font-bold"
            data-aos="fade-down"
          >
            About Cristal Beauty Clear
          </h1>
        </div>
      </div>

     
      <div className="container mx-auto py-12 px-4 md:px-12">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-800"
            data-aos="fade-up"
          >
            Discover the Essence of Beauty
          </h2>
          <p
            className="text-gray-600 mt-4 text-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            At Cristal Beauty Clear, we believe in celebrating natural beauty
            while enhancing it with our premium products. From skincare to
            cosmetics, we are here to bring out the best version of you.
          </p>
        </div>

  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div data-aos="zoom-in">
            <img
              src="https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2024-06/240610-beauty-awards-2024-face-makeup-winners-vl-social-74fb90.jpg"
              alt="Beauty Products"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div data-aos="fade-left">
            <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
            <p className="text-gray-600 mt-4">
              Cristal Beauty Clear is dedicated to creating innovative,
              eco-friendly beauty products that not only enhance your appearance
              but also nourish your skin. Our mission is to empower individuals to
              embrace their unique beauty.
            </p>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
          <div className="order-2 md:order-1" data-aos="fade-right">
            <h3 className="text-2xl font-bold text-gray-800">Why Choose Us?</h3>
            <p className="text-gray-600 mt-4">
              Our products are made with the finest ingredients, designed for all
              skin types, and formulated with care to provide lasting results.
              Choose Cristal Beauty Clear for quality, sustainability, and a
              promise of excellence.
            </p>
          </div>
          <div className="order-1 md:order-2" data-aos="zoom-in">
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-iugAQV5fmEY2kGWi7XPFpdrwRU99ackxP6KZNeHmP9uademLaY4YyIYcm8XnvaLT1OFjlGitmJXkoKp1uDAgL0c151kIoFEInsKcCcpDe8boiHWyiYnZFgF8AaXabrA2uIqwAM2Ka7Q/s1600/HEADDER.jpg"
              alt="Natural Beauty"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>


      <div className="bg-white py-12">
        <div className="container mx-auto px-4 md:px-12 text-center">
          <h3
            className="text-3xl font-bold text-gray-800"
            data-aos="fade-up"
          >
            Meet Our Team
          </h3>
          <p
            className="text-gray-600 mt-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            A passionate group of beauty enthusiasts working to redefine skincare
            and beauty standards.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="flex flex-col items-center" data-aos="flip-left">
              <img
                src="https://d2dfxqxblmblx4.cloudfront.net/wp-content/uploads/2022/05/18111753/Instagram-Tile-GettyImages-853924196.jpg"
                alt="Team Member"
                className="rounded-full shadow-md"
              />
              <h4 className="mt-4 text-lg font-semibold text-gray-800">
                Theekshana Jayalath
              </h4>
              <p className="text-gray-500">Founder & CEO</p>
            </div>
            <div className="flex flex-col items-center" data-aos="flip-up">
              <img
                src="https://media.istockphoto.com/id/1347870576/photo/happy-male-hairdresser-working-at-hair-salon-and-looking-at-camera.jpg?s=612x612&w=0&k=20&c=WTNjCR82dp7YVl7Dmyt9NqQ0TJXa56u1wWm1o9W65Cg="
                alt="Team Member"
                className="rounded-full shadow-md"
              />
              <h4 className="mt-4 text-lg font-semibold text-gray-800">
                Damidu Dissanayake
              </h4>
              <p className="text-gray-500">Product Manager</p>
            </div>
            <div className="flex flex-col items-center" data-aos="flip-right">
              <img
                src="https://www.shutterstock.com/image-photo/smiling-small-beauty-salon-owner-600nw-2059364630.jpg"
                alt="Team Member"
                className="rounded-full shadow-md"
              />
              <h4 className="mt-4 text-lg font-semibold text-gray-800">
                Rashmi Sugandika
              </h4>
              <p className="text-gray-500">Marketing Head</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
