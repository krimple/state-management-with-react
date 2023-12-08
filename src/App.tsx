import './App.css'
import { Outlet } from 'react-router';
function App() {
  return (
    <div>
      <h1>React State Management Demos</h1>
      <nav>
        <ul className="px-4 flex flex-row text-blue-800 underline">
          <li className="mr-4"><a href={'/context'}>Context Demo</a></li>
          <li><a href={'/context-reducer'}>Context with Reducer Demo</a></li>
        </ul>
      </nav>
      <section id="main">
        <Outlet />
      </section>
    </div>
  )
}

export default App;
