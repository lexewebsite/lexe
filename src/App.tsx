import { A, Routes, Route } from '@solidjs/router'
import Home from './Home'

function App() {
  return (
    <>
      <div class="navbar bg-base-100">
        <div class="flex-1">
          <a class="btn btn-ghost text-xl">LExE</a>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal px-1">
            <li><A href="/">Home</A></li>
            <li><A href="/">About</A></li>
            <li><A href="/">Projects</A></li>
          </ul>
        </div>
      </div>
      <Routes>
        <Route path="/" component={Home} />
      </Routes>
    </>
  )
}

export default App
