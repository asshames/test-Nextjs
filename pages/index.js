function Gymbaran () {
  return(
    <div className="h-full mt-4 ml-8 mr-8 p-2 bg-white">
      <nav className="flex justify-between m-2">
        <div className="mt-2 text-center">
          <h1 className="">
            <a className="" href="/"><span className="px-1 py-1 rounded-lg bg-purple-800 text-white">Gym</span><span className="text-purple-800">baran</span> </a>
          </h1>
        </div>
        <div className="flex">
          <ul className="flex m-2 text-center text-black">
            <li className="">
              <a href="/" className="m-4">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="/" className="m-4">
                <span>Program</span>
              </a>
            </li>
            <li>
              <a href="/"className="m-4">
                <span>Blog</span>
              </a>
            </li>
            <li>
              <a href="/" className="m-4">
              <span className="">About Us</span>
              </a>
            </li>
          </ul>
          <div>
            <button className="px-6 py-2 text-center border border-blue-50 bg-blue-800 rounded-lg text-white">Log in</button>
          </div>
        </div>
      </nav>
      <div className="flex mt-16">
        <div className="mt-8">
          <div>
            <h1 className="font-bold text-5xl">
              Healthy in side <br/> <span className="text-purple-800">fresh</span> out side
            </h1>
          </div>
          <div className="text-justify mt-6 mr-16">
            <p className="text-xs">Exercise is a very important need for our body. Heath and fitness will be obtained if you can do regular exercise and run a healthy routine.</p></div>
          <div className="mt-4 space-x-5">
            <button className="px-6 py-2 text-center border border-blue-50 bg-blue-800 rounded-lg text-white">Get started</button>
            <button className="px-6 py-2 text-center border border-blue-50 bg-gray-200 rounded-lg text-blue-800">Learn more</button>
          </div>
          <div className="mt-6">
            <p>Brands:</p>
            <div className="flex space-x-7">
              <img className="" src="img/n.png" alt="Nike" width="50" height="50"/>
              <img className="ml-2 mt-2 p-1 bg-white " src="img/a.png" alt="Adidas" width="50" height="40"/>
              <img className="ml-2" src="img/p.png" alt="Puma" width="50" height="50"/>
              <img className="ml-2" src="img/r.png" alt="Reebok" width="50" height="40"/>
            </div>
          </div>
        </div>
        <div>
          <img className="h-full rounded-md" src="img/img1.jpg" alt="Gym1"/>
        </div>
      </div>
      <div className="mt-16 p-2 grid grid-cols-2">
        <div>
          <h1 className="font-medium text-5xl">
            Healthy in side <br/> fresh out side
          </h1>
        </div>
        <div className="mt-6 text-justify ">
          <p className="text-xs">
            Exercise is a very important need for our body. Heath and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercise, either alone or with your friends at home. Healthy life makes you more excited to live the day.
          </p>
        </div>
      </div>
      <div className="mt-16 flex justify-between text-center px-10 py-14 border border-purple-900 bg-purple-700 rounded-lg text-white">
        <div className="">
          <div>
            {/* icon */}
          </div>
          <div>
            <p className="font-bold">Get that 11 line in 30 days</p>
            <button>Learn more </button>
          </div>
        </div>
        <div>
          <div>
            {/* icon */}
          </div>
          <div>
            <p className="font-bold">14 Days sherd challenge </p>
            <button>Learn more </button>
          </div>
        </div>
        <div>
          <div>
            {/* icon */}
          </div>
          <div>
            <p className="font-bold">Get flat belly in 30 days</p>
            <button>Learn more </button>
          </div>
        </div>
      </div>
      <div className="mt-16 flex justify-between">
        <div className="mr-12">
          <img className="h-full rounded-md" src="img/img2.jpg" alt="Gym2" width="1200" />
        </div> 
        <div className="">
          <div>
            <h1 className="font-medium text-5xl">
              Best full body <br/> workout to lose fat
            </h1>
          </div>
          <div className="mt-6 mr-16 text-justify ">
            <p className="text-xs">
              Exercise is a very important need for our body. Heath and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercise, either alone or with your friends at home. Healthy life makes you more excited to live the day.
            </p>
          </div>
          <button className="mt-6 px-6 py-2 text-center border border-blue-50 bg-blue-800 rounded-lg text-white">Get started</button>
        </div> 
      </div>
    </div>
  )
}

export default Gymbaran;