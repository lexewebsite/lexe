import banner from './assets/home-banner.jpeg'

function Home() {
  return (
    <div class="px-4 md:px-12 xl:px-48 md:py-12 flex flex-col items-center">
      <div class="w-full grid sm:grid-cols-1 grid-cols-2 gap-12 place-items-center"> 
        <h1 class="text-5xl text-center font-extrabold drop-shadow-lg">LEXE Foundation</h1> 
        <img src={banner} class="mb-2 mx-6 sm:mx-0 w-full" />
      </div> 

      {/* <div class="w-full gap-4 flex flex-row items-center"> 
        <h1 class="text-6xl w-full font-extrabold"> Lorem ipsum dolor sit amet, consecteur adipiscing elit. </h1> 
        <img src={banner} class="mb-2 mx-6 h-60"/>
      </div>  */}

      <div class="stats sm:stats-vertical stats-horizontal md:my-18 my-4 w-full">
        <div class="stat place-items-center">
          <div class="stat-value xl:text-7xl">210</div>
          <div class="stat-title xl:text-2xl">Projects Funded</div>
        </div>
        <div class="stat place-items-center">
          <div class="stat-value xl:text-7xl">$1.5M</div>
          <div class="stat-title xl:text-2xl">Grants Awarded</div>
        </div>
        <div class="stat place-items-center">
          <div class="stat-value xl:text-7xl">14</div>
          <div class="stat-title xl:text-2xl">Departments Supported</div>
        </div>
        <div class="stat place-items-center">
          <div class="stat-value xl:text-7xl">4,100</div>
          <div class="stat-title xl:text-2xl">Students Helped</div>
        </div>
      </div>



      
      <div class="grid grid-cols-2 gap-12 sm:grid-cols-1 my-8"> 
        <div>
          <h1 class="text-4xl text-center font-extrabold -mt-8 drop-shadow-lg">Fundraising Goals</h1>
          <p class="text-lg text-justify mx-4 mt-4 tracking-tight">
            Our fundraising goal for this year is $300,000. So far, we are at 55% of our fundraising
            goal with contributions from 25.4% of parents. Imagine what we can do for Lynbrook with
            100% parent participation!
          </p>
        </div> 
        <div class="flex flex-col gap-2 w-full items-center px-4 sm:px-8">
            <progress class="progress progress-primary w-full" value="25" max="100"></progress>
            <p class="text-xl tracking-wider">25% parents have contributed</p>
            <progress class="progress progress-secondary w-full" value="55" max="100"></progress>
            <p class="text-xl tracking-wider">55% fundraising goal achieved</p>
        </div>
      </div> 
        

      <iframe
        src="https://www.youtube-nocookie.com/embed/-3a7U0o84ZQ?si=yOiKCg8Ij4C3OW1C" title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        class="w-full max-w-xl h-72 sm:h-96 mt-2 mb-4"
        loading="lazy"
        allowfullscreen
      ></iframe>
    </div>
  )
}

export default Home
