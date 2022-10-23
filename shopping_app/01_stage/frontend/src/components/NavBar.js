import { Link } from 'react-router-dom';

const NavBar = (props) => {

    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <p className='navbar-brand' style={{ marginLeft: 10 }} >Shopping App</p>
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <Link to='/'>Shopping List</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/form'>Add new item</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;