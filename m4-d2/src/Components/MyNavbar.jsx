import React from 'react';

class MyNavbar extends React.Component {
    state = {style:{marginTop : '0px'}}
    togglerClick = ()=>{
        if(this.state.style.marginTop === '0px'){
            this.setState({style:{marginTop:'-48px'}})
        }
        else{this.setState({style:{marginTop:'0px'}})}
    }
    render() {
        
        return <nav style={this.state.style}>
                <div className="toggler" onClick={this.togglerClick}></div>
                <div className="logo">
                    <img src={this.props.image} alt=""/>
                    <div className="userName">
                        {this.props.userName}
                    </div>
                </div>
                <ul id="nav-list">
                    <li className="nav-item">
                        <ion-icon name="home-outline"></ion-icon>
                        <a href={this.props.ref1}>{this.props.nav1}</a>
                    </li>
                    <li className="nav-item">
                        <ion-icon name="image-outline"></ion-icon>
                        <a href={this.props.ref2}>{this.props.nav2}</a>
                    </li>
                    <li className="nav-item">
                        <ion-icon name="person-outline"></ion-icon>
                        <a href={this.props.ref3}>{this.props.nav3}</a>
                    </li>
                    <li className="nav-item">
                        <ion-icon name="person-outline"></ion-icon>
                        <a href={this.props.ref4}>{this.props.nav4}</a>
                    </li>
                    <li className="nav-item">
                        <ion-icon name="person-outline"></ion-icon>
                        <a href={this.props.ref5}>{this.props.nav5}</a>
                    </li>
                </ul>
            </nav>
    }
}
//  ({image, userName, nav1, nav2, nav3})=>
//     <nav>
//         <div className="toggler"></div>
//         <div className="logo">
//             <img src={image} alt=""/>
//             <div className="userName">
//                 {userName}
//             </div>
//         </div>
//         <ul id="nav-list">
//             <li className="nav-item">
//                 <ion-icon name="home-outline"></ion-icon>
//                 <a href="">{nav1}</a>
//             </li>
//             <li className="nav-item">
//                 <ion-icon name="image-outline"></ion-icon>
//                 <a href="">{nav2}</a>
//             </li>
//             <li className="nav-item">
//                 <ion-icon name="person-outline"></ion-icon>
//                 <a href="">{nav3}</a>
//             </li>
//         </ul>
//     </nav>


export default MyNavbar