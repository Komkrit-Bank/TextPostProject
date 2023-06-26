const NavBarComponent = () => {
  return (
    <nav>
        <ul className='nav nav-tabs'>
            <li className="nav-item pt-3 pb-3">
                <a className='nav-link' href="/">Home</a>
            </li>
            <li className="nav-item pt-3 pb-3">
                <a className='nav-link' href="/create">Create Blogs</a>
            </li>
        </ul>
    </nav>
  )
}

export default NavBarComponent