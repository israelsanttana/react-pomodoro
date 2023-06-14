import { HeaderContainer } from "./styles";
import logo from "../../assets/isoisra.png"
import { Timer, Scroll } from "phosphor-react";
import { NavLink } from "react-router-dom";


export function Header() {
    return (
        <HeaderContainer>
            <span><img src={logo} width={50} /></span>
            <nav>
                <NavLink to="/" title="timer">
                    <Timer size={32} />
                </NavLink>

                <NavLink to="/history" title="history">
                    <Scroll size={32} />
                </NavLink>

            </nav>
        </HeaderContainer>
    )
}