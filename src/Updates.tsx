import report2020 from "./assets/reports/annualReport2020.pdf";

function Updates() {
  return (
    <div class="container px-4 py-12 flex flex-col items-center gap-2 text-base-content">
      <h1 class="text-5xl font-extrabold text-center mb-4">Updates</h1>
      <div class="container flex flex-col gap-2 max-w-4xl">
        <h2 class="text-2xl lg:text-3xl mt-8 font-extrabold" id="newsletters">
          Newsletters
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-4 mt-1">
          <a class="btn btn-accent text-lg font-normal" target="_blank" href="https://app.flashissue.com/newsletters/44bf3813e1bc67cb1bbee671c9d7f517b05e9c51">2020</a>
        </div>

        <h2 class="text-2xl lg:text-3xl mt-8 font-extrabold" id="annual-reports">
          Annual Reports
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-4 mt-1">
          <a class="btn btn-accent text-lg font-normal" target="_blank" href={report2020}>2020</a>
        </div>
      </div>
    </div>
  )
}

export default Updates;
