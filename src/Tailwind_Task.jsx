import Picture from "./assets/birds.jpg";
import {FaFacebookF,FaInstagram,FaTwitter,FaGithub,FaDribbble,} from "react-icons/fa";

export default function Tailwind_Task() {
  return (
    <>
    <header class="w-full bg-sky-200">
      <div class=" px-10 py-3 flex items-center justify-between">
        <div class="">
          <img src={Picture} height="100" width="100" alt="birds image"></img>
        </div>
        <nav class="items-center mt-8">
          <ul class="flex items-center space-x-20  text-blue-800 font-medium">
            <li><p class="hover:bg-amber-300 no-underline">Home</p></li>
            <li><p  class="hover:bg-amber-300 text-blue-800">About</p></li>
            <li><p  class="hover:bg-amber-300 text-blue-800">Services</p></li>
            <li><p  class="hover:bg-amber-300  text-blue-800">Contact</p></li>
          </ul>
        </nav>
        <div>
          <button class="bg-blue-600 text-white px-5 py-2 rounded  hover:scale-140">Get Started</button>
        </div>
      </div>
    </header>

    <div style={{height:350}}></div>
  <footer className="bg-black text-white py-10">
  <div className=" mx-auto flex justify-between px-10">

    <div className="w-[40%]">
      <span className="text-5xl font-bold justify-between text-green-600 mb-5 ">
        REACT
      </span>

      <p className="leading-8 mb-8 mt-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Id odit ullam iste repellat consequatur libero reiciendis,
        blanditiis accusantium.
      </p>

      <div className="flex gap-8 text-3xl pl-48">
        <FaFacebookF />
        <FaInstagram />
        <FaTwitter />
        <FaGithub />
        <FaDribbble />
      </div>
    </div>

    <div className="w-[60%] justify-around flex gap-20">
      <div>
        <h2 className="text-2xl font-bold mb-5">Solutions</h2>
        <p className="mb-4">Analytics</p>
        <p className="mb-4">Marketing</p>
        <p className="mb-4">Commerce</p>
        <p>Insights</p>
      </div>
 
      <div>
        <h2 className="text-2xl font-bold mb-5">Support</h2>
        <p className="mb-4">Pricing</p>
        <p className="mb-4">Documentation</p>
        <p className="mb-4">Guides</p>
        <p>API Status</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-5">Company</h2>
        <p className="mb-4">About</p>
        <p className="mb-4">Blog</p>
        <p className="mb-4">Jobs</p>
        <p className="mb-4">Press</p>
        <p>Careers</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-5">Legal</h2>
        <p className="mb-4">Claim</p>
        <p className="mb-4">Policy</p>
        <p>Terms</p>
      </div>
    </div>

  </div>
</footer>
</>
  );
}
