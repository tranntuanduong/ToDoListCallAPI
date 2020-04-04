import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
    {
        name: 'Home',
        to: '/',
        exact: true
    },
    {
        name: 'Products',
        to: '/products',
        exact: false
    }
];

const MenuLink = ({ label, to, activeOnlyWhenExcact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExcact}
            children={({ match }) => {
                var active = match ? 'active' : '';
                return (
                    <li className={active}>
                        <Link to={to}>
                            {label}
                        </Link>
                    </li>
                );
            }}>
        </Route>
    )
};

class Menu extends Component {
    render() {
        return (
            <div className="navbar navbar-default">
                <ul className="nav navbar-nav">
                   {this.showMenus(menus)}
                </ul>
            </div>
        );
    }

    showMenus(menus) {
        var result = null;
        if(menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeOnlyWhenExcact={menu.exact}>
                    </MenuLink>
                );
            });
        }
        return result;
    }
}

export default Menu;
