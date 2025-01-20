import Footer from "../../components/footer";
import NavigationBar from "../../components/navigationBar";
import AOS from 'aos';

export default function ContactUs(){


    
    return (
        <>
        <NavigationBar/>
        <div>
            
            <div className=" bg-red-400  m-5 mb-10" data-aos="fade-up">
                <img src="../../public/contactusBanner.png" alt="" className="w-full h-[300px]" />
            </div>

            <div class="p-4 ml-[130px] mr-[130px]" data-aos="fade-down">
                <div class="space-y-4">
                    <div class="flex gap-4">
                        <input type="text" placeholder="Name *" class="border border-gray-500 p-2 rounded-md w-full" />
                        <input type="text" placeholder="Email *" class="border border-gray-500 p-2 rounded-md w-full" />
                    </div>
                    <div className="ml-[240px] mr-[240px]">
                        <input type="number" placeholder="Phone Number *" class="border border-gray-500 p-2 rounded-md w-full" />
                    </div>
                    <textarea placeholder="Your Message *" class="border border-gray-500 p-2 rounded-md w-full h-32"></textarea>
                </div>

                <div className="flex justify-center p-4">
                    <button className="bg-black text-white pl-10 pt-3 pr-10 pb-3 rounded-xl hover:scale-110 "  >Send</button>
                </div>
            </div>

        </div>

        <Footer/>
        </>

    )
}