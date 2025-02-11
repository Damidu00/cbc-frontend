import Footer from "../../components/footer";
import NavigationBar from "../../components/navigationBar";
import AOS from 'aos';

export default function ContactUs() {
    return (
        <div className="w-full min-h-screen bg-gray-200 flex flex-col md:flex-row items-center justify-center -mt-10 ">
            {/* Left Section - Google Map */}
            <div className="w-full h-[600px] md:w-1/2 flex justify-center items-center bg-red-300 ml-10">
                <div className=" w-full  h-full rounded-lg shadow-lg overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d13417.690111657288!2d79.90953280678097!3d6.865524664680017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e3!4m0!4m5!1s0x3ae25a4a7feb8e3b%3A0x6caab09855a9ebdd!2s01st%20Floor%2C%20Crystal%20Beauty%20Pharmaceuticals%20(Pvt)Ltd%2C%20No.08%20%2C1%2C%201%20Old%20Kottawa%20Rd%2C%20Nugegoda!3m2!1d6.8667288!2d79.9102678!5e1!3m2!1sen!2slk!4v1739249464936!5m2!1sen!2slk"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>

            {/* Right Section - Contact Form */}
            <div className="w-full md:w-1/2 p-6 h-[700px] flex flex-col items-center justify-center -mt-10 ">
                <div className="w-full md:w-3/4 space-y-6 bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-center">Contact Us</h2>
                    <div className="flex gap-4">
                        
                        <input type="email" placeholder="Email *" className="border border-gray-500 p-2 rounded-md w-full" />
                    </div>
                    <input type="tel" placeholder="Phone Number *" className="border border-gray-500 p-2 rounded-md w-full" />
                    <textarea placeholder="Your Message *" className="border border-gray-500 p-2 rounded-md w-full h-32"></textarea>
                    <div className="flex justify-center">
                        <button className="bg-black text-white px-6 py-3 rounded-xl hover:scale-110 transition">Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}