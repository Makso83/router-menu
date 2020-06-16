import React from "react";
import { NavLink } from "react-router-dom";

// функция для избегания дублирования классНеймов и сокращения кода.
// в отдельный компонент не выносил, чтобы не затруднять проверку :-)

function NavLinkContainer(props) {
    return (
        <NavLink
            exact={props.exact}
            to={props.to}
            className="menu__item"
            activeClassName="menu__item-active">
            {props.name}
        </NavLink>
    );
}

function Menu() {
    return (
        <nav className="menu">
            <NavLinkContainer exact={true} to="/" name="Главная" />
            <NavLinkContainer to="/drift" name="Дрифт-такси" />
            <NavLinkContainer to="/timeattack" name="Time Attack" />
            <NavLinkContainer to="/forza" name="Forza Karting" />
        </nav>
    );
}

export default Menu;
