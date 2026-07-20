import Picture from './assets/birds.jpg'
export default function Tailwind_Task(){
    return (
       <header class="w-full bg-sky-200">
        <div class="max-w-auto px-10 py-5 flex items-center justify-between">
            <div class="">
                <img src={Picture} height="100" width="100" alt="birds image"></img>
            </div>
                <nav>
                <ul class="flex items-center space-x-8 text-gray-700 font-medium">
                    <li><a href="#" class="hover:text-blue-600 transition">Home</a></li>
                    <li><a href="#" class="hover:text-blue-600 transition">About</a></li>
                    <li><a href="#" class="hover:text-blue-600 transition">Services</a></li>
                    <li><a href="#" class="hover:text-blue-600 transition">Contact</a></li>
                </ul>
                </nav>

   
    <div>
      <button class="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
        Get Started
      </button>
    </div>

  </div>
</header>
)
}

