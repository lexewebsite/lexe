const annual_reports = {
  "2017-2018": "https://drive.google.com/file/d/0Bx6shaV-C7LnTnVqMGZaMnQzeTVOTUQ2cUpKMThWd1BSZUFR/view?usp=drive_link&resourcekey=0-Lnopz-L4ZxkRoKL4SNbwwA",
  "2019-2020": "https://drive.google.com/file/d/1hRUILwnsIQ9epGcDL3EQoYI6ZgUI7LiN/view?usp=drive_link",
  "2020-2021": "https://drive.google.com/file/d/10SsxtgWu47dIMjqR3tuwMlQxvnp_bKTN/view?usp=drive_link",
  "2021-2022": "https://drive.google.com/file/d/187_oU6inPWWfMalCjRNDz48jjpz9s66l/view?usp=drive_link",
  "2022-2023": "https://drive.google.com/file/d/1Cb6WhIVtPQKgYDONz8eKaJ9VVRH1_Cii/view?usp=drive_link",
};

const newsletters = {
  "2020": "https://app.flashissue.com/newsletters/44bf3813e1bc67cb1bbee671c9d7f517b05e9c51",
  "Nov 2024": "https://docs.google.com/document/d/1bPBqb1ZfGBwCjaErTuoMIQ_3lWkEgtY3RR_ufeT_DS0/edit?usp=sharing",
};

function Updates() {
  return (
    <div class="container px-4 py-12 flex flex-col items-center gap-2 text-base-content">
      <h1 class="text-5xl font-extrabold text-center mb-4">Updates</h1>
      <div class="container flex flex-col gap-2 max-w-4xl">
        <h2 class="text-2xl lg:text-3xl mt-8 font-extrabold" id="newsletters">
          Newsletters
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-4 mt-1 gap-2">
          {
            Object.keys(newsletters).map(key => {
              return (
                <a
                  class="btn btn-accent text-lg font-normal"
                  target="_blank"
                  href={newsletters[key]}
                >
                  {key}
                </a>
              )
            })
          }
        </div>

        <h2
          class="text-2xl lg:text-3xl mt-8 font-extrabold"
          id="annual-reports"
        >
          Annual Reports
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-4 mt-1 gap-2">
          {
            Object.keys(annual_reports).map(key => {
              return (
                <a
                  class="btn btn-accent text-lg font-normal"
                  target="_blank"
                  href={annual_reports[key]}
                >
                  {key}
                </a>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Updates;
