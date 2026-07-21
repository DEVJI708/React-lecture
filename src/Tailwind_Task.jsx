import Picture from "./assets/birds.jpg";
export default function Tailwind_Task() {
  return (
    <header class="w-full bg-sky-200">
      <div class=" px-10 py-3 flex items-center justify-between">
        <div class="">
          <img src={Picture} height="100" width="100" alt="birds image"></img>
        </div>
        <nav class="items-center mt-8">
          <ul class="flex items-center space-x-20  text-blue-800 font-medium">
            <li><p class="hover:bg-amber-300 no-underline">Home</p></li>
            <li><p href="#" class="hover:bg-amber-300 text-blue-800">About</p></li>
            <li><p href="#" class="hover:bg-amber-300 text-blue-800">Services</p></li>
            <li><p href="#" class="hover:bg-amber-300  text-blue-800">Contact</p></li>
          </ul>
        </nav>
        <div>
          <button class="bg-blue-600 text-white px-5 py-2 rounded  hover:scale-140">Get Started</button>
        </div>
      </div>
    </header>

    
  );
}
