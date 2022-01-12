

function Navbar(props) {

    function onClick(e) {
        props.clickMenu(e.target.id);
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <div id="movies" className="nav-link" onClick={onClick}>Movies</div>
                    </li>
                    <li className="nav-item">
                        <div id="add-movie" className="nav-link" onClick={onClick}>Add Movie</div>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar