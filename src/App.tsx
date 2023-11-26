import { A, Routes, Route } from '@solidjs/router'
import Home from './Home'
import About from './About'
import Projects from './Projects'

function App() {
  return (
    <>
      <div class="navbar bg-base-100">
        <div class="flex-1">
          <a class="btn btn-ghost text-xl">LExE</a>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal px-1">
            <li><A href="/" activeClass="" inactiveClass="">Home</A></li>
            <li><A href="/about" activeClass="" inactiveClass="">About</A></li>
            <li><A href="/projects" activeClass="" inactiveClass="">Projects</A></li>
          </ul>
        </div>
      </div>
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
      </Routes>
    </>
  )
}

export default App
