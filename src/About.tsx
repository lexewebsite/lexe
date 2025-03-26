import Officer from "./components/Officer";

import { Chart, registerables } from "chart.js";
import { Line, Pie } from "solid-chartjs";
import { onMount } from "solid-js";

function About() {
  onMount(() => {
    Chart.register(...registerables);
  });

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        display: true,
        position: "left",
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, _index, _ticks) {
            return "$" + value + "M";
          },
        },
        text: "Cumulative Contributions (in Millions)",
      },
      y1: {
        display: true,
        position: "right",
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, _index, _ticks) {
            return value + " grants";
          },
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Cumulative Contributions & Approved Grants",
        font: {
          size: 20,
        },
      },
      legend: {
        position: "bottom",
      },
      labels: {
        font: {
          size: 20,
        },
      },
    },
  } as const;

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Grant Approved By Department (All Years)",
        font: {
          size: 20,
        },
      },
      legend: {
        position: "bottom",
      },
      labels: {
        font: {
          size: 20,
        },
      },
    },
  } as const;

  const lineData = {
    labels: [
      "2011-2012",
      "2012-2013",
      "2013-2014",
      "2014-2015",
      "2015-2016",
      "2016-2017",
      "2017-2018",
      "2018-2019",
      "2019-2020",
    ],
    datasets: [
      {
        label: "$ Contributions (Millions)",
        data: [0.075, 0.25, 0.42, 0.55, 0.75, 0.8, 1.12, 1.35, 1.5],
        yAxisID: "y",
      },
      {
        label: "Approved Grants (Count)",
        data: [12.5, 37.5, 60, 100, 125, 160, 190, 200, 222.5],
        yAxisID: "y1",
      },
    ],
  };

  const pieData = {
    labels: [
      "School",
      "Art",
      "Business",
      "Drama",
      "English",
      "Mathematics/Computer Science",
      "Music",
      "Physical Education",
      "Science",
      "Social Studies",
      "World Languages",
      "Special Education",
      "Guidance",
      "Library",
    ],
    datasets: [
      {
        data: [32, 4, 1, 1, 7, 0, 10, 5, 5, 21, 3, 3, 1, 2, 5],
      },
    ],
  };

  return (
    <>
      <div class="container px-4 pt-12 pb-8 flex flex-col items-center gap-2 text-base-content">
        {/** Put the code for departments front page */}
        <h1 class="text-5xl font-extrabold text-center mb-4">Our Mission</h1>
        <div class="text-md lg:text-xl text-pretty flex flex-col gap-2 max-w-4xl">
          <p>Lynbrook Excellence in Education (Lynbrook Excellence) is an IRS approved 501(c) (3) public charity (Tax ID#: 45-2453655). The primary objective and purpose of this organization is to promote and support excellence in education at Lynbrook High School.</p>
          <p>Lynbrook Excellence will strive to supplement the resources provided by the Fremont Union High School District in order to further enrich the educational environment at Lynbrook.</p>
          <p>The initial focus areas for Lynbrook Excellence are:</p>
          <ol>
            <li>1. Provide needed equipment to departments.</li>
            <li>2. Provide curriculum related resources.</li>
            <li>3. Expand the technology and infrastructure for staff and students.</li>
            <li>4. Support programs that develop student leadership, creativity and excellence.</li>
            <li>5. Provide resources for professional development for teachers.</li>
          </ol>
        </div>
        {/* <img src={grants} class="mb-2 h-96 mx-20"/> */}
        <div class="flex flex-col lg:flex-row gap-8 w-full justify-center items-center mt-8 max-w-5xl">
          <div class="relative w-full">
            <Pie data={pieData} options={pieOptions} />
          </div>
          <div class="relative w-full">
            <Line data={lineData} options={lineOptions} />
          </div>
        </div>
      </div>
      <div class="bg-neutral w-full flex flex-col items-center">
        <div class="container px-4 pt-8 pb-12 flex flex-col items-center gap-12 text-neutral-content">
          <h3 class="text-4xl font-extrabold text-center">Meet The Team</h3>
          <div class="flex flex-col gap-4 sm:flex-row w-full justify-around mb-8">
            <div class="flex flex-col gap-4">
              <Officer name="Rajesh Aravindakshan" description="President" />
              <Officer name="Parthasarathy Ranganathan" description="Secretary" />
              <Officer name="Monica Joshi" description="VP Outreach" />
              <Officer name="Terri Fill" description="LHS Teacher" />
              <Officer name="David Erwin" description="Permanent Invitee" />
            </div>
            <div class="flex flex-col gap-4">
              <Officer name="Prashant Shah" description="Treasurer" />
              <Officer name="Ravi Ram" description="Co-Treasurer" />
              <Officer name="Mimi Wong" description="VP Outreach" />
              <Officer name="Maria Jacksonn" description="LHS Principal" />
              <Officer name="Maya Baba" description="LHS Staff" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
