import React from "react";

const Header = () => {

    return(
        <header>
            <nav class="Nav">
                <div class="NavContainer">
                    <a class="NavLogo" href='/'>
                        James Bester  <i class="fas fa-robot"></i>
                    </a>
                    <a class="mobile" id="mobile"><i class="fa-solid fa-bars"></i></a>
                </div>
                <div class="HamburgerMenu" id="HamburgerMenu">
                    <ul>
                        <li>
                            <a class="NavLink" href='/'>Home</a>
                        </li>
                        <li>
                            <a class="NavLink" href="./about">About</a>
                        </li>
                        <li>
                            <a class="NavLink" href='./projects' >Projects</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header