import { A, Routes, Route } from "@solidjs/router";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Donate from "./Donate";
import Updates from "./Updates";

function pages() {
  return (
    <>
      <li>
        <A href="/" activeClass="" inactiveClass="">
          Home
        </A>
      </li>
      <li>
        <A href="/about" activeClass="" inactiveClass="">
          About
        </A>
      </li>
      <li>
        <A href="/projects" activeClass="" inactiveClass="">
          Projects
        </A>
      </li>
      <li>
        <A href="/updates" activeClass="" inactiveClass="">
          Updates
        </A>
      </li>
      <li>
        <A
          href="/donate"
          class="bg-accent text-accent-content font-normal"
          activeClass=""
          inactiveClass=""
        >
          Donate
        </A>
      </li>
    </>
  );
}

function App() {
  return (
    <>
      <div class="navbar bg-primary text-primary-content mb-4 sticky top-0 z-50 p-0.5 md:p-1">
        <div class="navbar-start w-[30%]">
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabindex="0"
              class="menu menu-md dropdown-content bg-primary text-primary-content text-lg rounded-box z-1 mt-3 w-52 p-2 shadow font-light"
            >
              {pages()}
            </ul>
          </div>
          <div class="flex-1">
            <a class="btn btn-ghost text-2xl font-extrabold" href="/">
              LEXE
            </a>
          </div>
        </div>
        <div class="navbar-end w-[70%] hidden md:flex">
          <ul class="menu menu-horizontal px-1 text-xl font-light">
            {pages()}
          </ul>
        </div>
      </div>

      <Routes>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/donate" component={Donate} />
        <Route path="/updates" component={Updates} />
      </Routes>

      <div class="w-full bg-base-200 text-base-content flex flex-col items-center">
        <footer class="footer footer-center container p-10">
          <aside class="max-w-lg">
            <p class="font-bold text-lg">Lynbrook Excellence in Education</p>
            <p class="opacity-70 text-pretty">
              Lynbrook Excellence in Education is an IRS approved 501(c)(3)
              public charity. Based on this status, all donations and corporate
              matching funds to Lynbrook Excellence in Education are tax
              deductible. Tax ID#: 45-2453655
              <br />
              Creative content by Mihir Pandya.
            </p>
          </aside>
          {/* <nav>
            <header class="footer-title">Updates</header>
            <a class="link link-hover">Annual Reports</a>
            <a class="link link-hover">Newsletters</a>
          </nav>
          <nav>
            <header class="footer-title">Contact</header>
            <a class="link link-hover">Contact</a>
          </nav> */}
        </footer>
      </div>
    </>
  );
}

export default App;
