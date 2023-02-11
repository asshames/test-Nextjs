import Link from "next/link";

function Gymbaran () {
  return(
    <div className="h-full m-6 lg:mt-6 lg:ml-10 lg:mr-10 lg:p-4 bg-white">
      <nav className="lg:flex lg:justify-between lg:m-2">
        <div className="flex justify-between items-center">
          <div className="lg:mt-6 lg:text-center">
            <h1 className="text-xl lg:text-2xl">
              <span className="px-2 py-1 rounded-lg bg-purple-800 text-white">Gym</span><span className="text-purple-800">baran</span>
            </h1>
          </div>
          <div>
            <svg className="h-6 w-6 lg:hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
        </div>
        <div className="lg:flex lg:text-2xl flex text-white bg-white">
          <ul className="lg:flex lg:m-2 lg:text-center lg:text-black flex">
            <li className="">
              <div className="lg:m-4">
                <span className="">Home</span>
              </div>
            </li>
            <li>
              <div className="lg:m-4">
                <Link href="/program"><span>Program</span></Link>
              </div>
            </li>
            <li>
              <div className="lg:m-4">
                <span>Blog</span>
              </div>
            </li>
            <li>
              <div className="lg:m-4">
              <span>About Us</span>
              </div>
            </li>
          </ul>
          <div>
            <button className="lg:mt-4 lg:px-6 lg:py-2 lg:text-center lg:border lg:border-blue-50 lg:bg-blue-800 lg:rounded-lg lg:text-white">
              Log in
            </button>
          </div>
        </div>
      </nav>
      <div className="mt-12 lg:flex lg:mt-16">
        <div className="lg:mt-10">
          <div>
            <h1 className="font-bold text-5xl lg:text-8xl">
              Healthy in side <br/> <span className="text-purple-800">fresh</span> out side
            </h1>
          </div>
          <div className="mt-6 lg:text-justify lg:mt-8 lg:mr-64">
            <p className="text-sm mr-10 lg:text-lg text-gray-500 text-justify">
              Exercise is a very important need for our body. Heath and fitness will be obtained if you can do regular exercise and run a healthy routine.
            </p>
          </div>
          <div className="mt-10 flex items-center lg:mt-8">
            <div className="mr-5 px-4 py-3 flex items-center border border-blue-50 bg-blue-800 rounded-lg lg:mr-10 lg:px-20 lg:py-5">
              <button className="mr-20 text-xs lg:mr-16 lg:text-lg text-white">
                Get Started
              </button>
              <svg className="h-5 w-5 lg:h-6 lg:w-6 p-1 lg:font-semibold border border-blue-800 rounded-full bg-white text-blue-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </div>
            <div className="mr-1 px-3 lg:mr-5 lg:px-4 flex justify-between items-center border border-blue-50 bg-gray-200 rounded-lg">
              <svg className="h-5 w-5 lg:h-6 lg:w-6 p-1 border border-white bg-blue-800 text-white rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" />
              </svg>
              <button className="text-xs px-2 py-3 lg:px-6 lg:py-2 text-center lg:text-lg  text-blue-800">
                Learn more
              </button> 
            </div>
          </div>
          <div className="mt-8 p-1 lg:mt-6">
            <p className="text-sm text-gray-800 lg:text-lg">Brands:</p>
            <div className="h--full flex space-x-10 lg:space-x-24">
              <img className="h-12 w-14 lg:ml-1" src="img/n.png" alt="Nike" width="80" height="80"/>
              <img className="h-12 w-14 p-1 lg:ml-2 lg:mt-2 lg:p-1 bg-white " src="img/a.png" alt="Adidas" width="80" height="40"/>
              <img className="h-12 w-14 lg:ml-2" src="img/p.png" alt="Puma" width="80" height="80"/>
              <img className="h-12 w-14 lg:ml-2" src="img/r.png" alt="Reebok" width="80" height="40"/>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <img className="h-full rounded-md" src="img/img1.jpg" alt="Gym1"/>
        </div>
      </div>
      <div className="mt-24 lg:p-4 lg:grid lg:grid-cols-2">
        <div>
          <h1 className="text-5xl font-medium lg:text-7xl">
            Healthy in side <br/> fresh out side
          </h1>
        </div>
        <div className="mt-6 lg:text-justify lg:mt-10 text-justify ">
          <p className="text-sm mr-10 lg:text-lg text-gray-500">
            Exercise is a very important need for our body. Heath and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercise, either alone or with your friends at home. Healthy life makes you more excited to live the day.
          </p>
        </div>
      </div>
      <div className="mt-14 lg:mt-24 lg:flex lg:justify-between px-2 py-8 lg:px-20 lg:py-28 border border-purple-900 bg-purple-700 rounded-3xl text-white">
        <div className="flex lg:justify-center items-center">
          <div>
            <img className="ml-6 h-20 w-20 lg:h-32 lg:w-32 rounded-3xl" src="img/e1.png"/>
          </div>
          <div className="ml-6 mt-4 mb-4 lg:ml-8">
            <p className="font-bold text-md lg:text-2xl">Get that 11 line <br/> in 30 days</p>
            <div className="mt-2 lg:mt-2 flex justify-between items-center text-white">
              <button className="lg:text-lg text-gray-300">Learn more </button>
              <svg className="h-4 w-4 lg:mr-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex lg:justify-center items-center">
          <div>
          <img className="ml-6 h-20 w-20 lg:h-32 lg:w-32 rounded-3xl" src="img/e2.png"/>
          </div>
          <div className="ml-6 mt-4 mb-4 lg:ml-8">
            <p className="font-bold text-md lg:text-2xl">14 Days <br/>sherd challenge </p>
            <div className="mt-2 lg:mt-2 flex justify-between items-center text-white">
              <button className="lg:text-lg text-gray-300">Learn more </button>
              <svg className="h-4 w-4 lg:mr-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex lg:justify-center items-center">
          <div>
          <img className="ml-6 h-20 w-20 lg:h-32 lg:w-32 rounded-3xl" src="img/e3.png"/>
          </div>
          <div className="ml-6 mt-4 mb-4 lg:ml-8">
            <p className="font-bold  text-md lg:text-2xl">Get flat belly <br/> in 30 days</p>
            <div className="mt-2 lg:mt-2 flex justify-between items-center text-white">
              <button className="lg:text-lg text-gray-300">Learn more </button>
              <svg className="h-4 w-4 lg:mr-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-28 lg:mt-32 lg:ml-16 lg:flex lg:justify-between">
        <div className="p-2 lg:mr-12">
          <img className="h-full rounded-md" src="img/img2.jpg" alt="Gym2" width={1800} />
        </div> 
        <div className="mt-8 lg:m-16 lg:py-8">
          <div>
            <h1 className="text-5xl font-medium lg:text-7xl">
              Best full body <br/> workout to lose fat
            </h1>
          </div>
          <div className="mt-6 lg:mt-8 lg:mr-16 text-justify ">
            <p className=" text-xs lg:text-lg  text-gray-500">
              Exercise is a very important need for our body. Heath and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercise, either alone or with your friends at home.
            </p>
          </div>
          <div className="mt-8 w-56 lg:mt-10 lg:w-72 flex justify-between items-center text-white border border-blue-50 bg-blue-800 rounded-lg">
            <button className="mr-20 text-xs px-5 py-3 lg:px-8 lg:py-6 text-center lg:text-lg">
              Get started
            </button>
            <svg className="h-4 w-4 lg:h-6 lg:w-6 lg:mr-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
              <path fill-rule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
            </svg>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default Gymbaran;