import React from 'react';

const MyNavbar = ({image, userName, nav1, nav2, nav3})=>
    <nav>
        <div className="toggler"></div>
        <div className="logo">
            <img src={image} alt=""/>
            <div className="userName">
                {userName}
            </div>
        </div>
        <ul id="nav-list">
            <li className="nav-item">
                <ion-icon name="home-outline"></ion-icon>
                <a href="">{nav1}</a>
            </li>
            <li className="nav-item">
                <ion-icon name="image-outline"></ion-icon>
                <a href="">{nav2}</a>
            </li>
            <li className="nav-item">
                <ion-icon name="person-outline"></ion-icon>
                <a href="">{nav3}</a>
            </li>
        </ul>
    </nav>


export default MyNavbar