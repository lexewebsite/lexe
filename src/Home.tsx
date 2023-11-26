function Home() {
  return (
    <>
      <div>
        <h1 class="text-4xl font-extrabold text-center m-6">Fundraising Goals</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 items-center px-8 gap-6">
          <div class="prose">
            <p>
              Our fundraising goal for this year is $300,000. So far, we are at 55% of our fundraising
              goal with contributions from 25.4% of parents...imagine what we can do for Lynbrook with
              100% parent participation!
            </p>
          </div>
          <div class="flex flex-row place-content-evenly not-prose">
            <div class="radial-progress text-primary-content text-center bg-primary border-4 border-primary" style="--value:25; --size:12rem; --thickness: 1rem;" role="progressbar">
              <p class="text-xl font-bold">25%</p>parents<br />have contributed
            </div>
            <div class="radial-progress text-secondary-content text-center bg-secondary border-4 border-secondary" style="--value:55; --size:12rem; --thickness: 1rem;" role="progressbar">
              <p class="text-xl font-bold">55%</p>fundraising<br />goal achieved
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
