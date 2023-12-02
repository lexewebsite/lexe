import banner from './assets/home-banner.jpeg'

function Home() {
  return (
    <div class="px-4 md:px-12 xl:px-48 py-12 flex flex-col items-center">
      <img src={banner} loading="lazy" class="mb-2 w-full mx-6"/>

      <div class="my-2">
        <h1 class="text-4xl font-extrabold text-center m-6">Fundraising Goals</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 items-center px-4 gap-6">
          <p class="text-lg">
            Our fundraising goal for this year is $300,000. So far, we are at 55% of our fundraising
            goal with contributions from 25.4% of parents...imagine what we can do for Lynbrook with
            100% parent participation!
          </p>
          <div class="flex flex-col gap-1">
            <progress class="progress progress-primary w-full" value="25" max="100"></progress>
            <p class="text-xl tracking-wider">25% parents have contributed</p>
            <progress class="progress progress-secondary w-full" value="55" max="100"></progress>
            <p class="text-xl tracking-wider">55% fundraising goal achieved</p>
          </div>
        </div>
      </div>

      <div class="stats stats-vertical md:stats-horizontal md:my-12 my-4 w-full">
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

      <iframe
        src="https://www.youtube-nocookie.com/embed/-3a7U0o84ZQ?si=yOiKCg8Ij4C3OW1C" title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        class="w-full max-w-xl h-72 sm:h-96 mt-2"
        loading="lazy"
        allowfullscreen
      ></iframe>
    </div>
  )
}

export default Home
