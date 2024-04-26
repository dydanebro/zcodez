import React from "react";
import icon from './assets/icon.png'

const NavBar = () => {
    // const [ isActive, setIsActive ] = useState(false);

    const buttons = document.querySelectorAll('#navBtn');
    const handleBtnClick = () => {
        buttons.forEach(element => {
            element.classList.add("active")
        });
    }

    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-black header">
            <div class="container-fluid">
                <a class="navbar-brand" href={'/'}>
                    <img src={icon} alt="codez icon" className="icon" /></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item" id="navBtn" onClick={handleBtnClick}>
                            <a class="nav-link active" aria-current="page" href={'/#banner'}>Home</a>
                        </li>
                        <li class="nav-item" id="navBtn" onClick={handleBtnClick}>
                            <a class="nav-link" href={'/#services'}>Services</a>
                        </li>
                        <li class="nav-item" id="navBtn" onClick={handleBtnClick}>
                            <a class="nav-link" href={'/#about'}>About</a>
                        </li>
                        <li class="nav-item" id="navBtn" onClick={handleBtnClick}>
                            <a class="nav-link" href={'/#contact'}>Contact</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href={'/'} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Pages
                            </a>
                            <ul class="dropdown-menu dropdown-menu-dark">
                                <li><a class="dropdown-item" href={'/'}>Home</a></li>
                                <li><a class="dropdown-item" href={'/'}>Services</a></li>
                                <li><a class="dropdown-item" href={'/'}>About</a></li>
                                <li><a class="dropdown-item" href={'/'}>Contact</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href={'/'}>Infographics</a></li>
                                <li><a class="dropdown-item" href={'/'}>Web Design</a></li>
                                <li><a class="dropdown-item" href={'/'}>Mobile Development</a></li>
                                <li><a class="dropdown-item" href={'/'}>Technical Support</a></li>
                            </ul>
                        </li>
                        {/* <li class="nav-item">
                            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                        </li> */}
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-primary" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
