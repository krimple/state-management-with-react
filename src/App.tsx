import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';
function App() {
    return (
        <div>
            <h1>React State Management Demos</h1>
            <nav>
                <ul className="px-4 flex flex-row text-blue-800 underline">
                    <li className="mr-4">
                        <NavLink to={'/local-state'}>Local State Demo</NavLink>
                    </li>
                    <li className="mr-4">
                        <NavLink to={'/context'}>Context Demo</NavLink>
                    </li>
                    <li className="mr-4">
                        <NavLink to={'/context-reducer'}>Context with Reducer Demo</NavLink>
                    </li>
                    <li className="mr-4">
                        <NavLink to={'/redux'}>Redux Demo</NavLink>
                    </li>
                    <li className="mr-4">
                        <NavLink to={'/react-query'}>React Query Demo</NavLink>
                    </li>
                </ul>
            </nav>
            <section id="main">
                <Outlet />
            </section>
        </div>
    );
}

export default App;
