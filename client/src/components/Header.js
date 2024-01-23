import React from 'react';
import Container from 'react-bootstrap/Container';
import SignOut from './SignOut';
import Menu from './Menu';

function Header() {
    // sign out
    return(
        <header>
            <Container>
                <Menu/>
                <SignOut/>
            </Container>
        </header>
    )

//     return(
//         <header className='top'>
//             <Container>
//                 <button className={`sign_${this.props.ending}`}>
//                     {this.props.auth}
//                     <span className={`sign_${this.props.ending}__blobs__inner`}>
//                         <span className={`sign_${this.props.ending}__blobs`}>
//                             <span className={`sign_${this.props.ending}__blob`}></span>
//                             <span className={`sign_${this.props.ending}__blob`}></span>
//                             <span className={`sign_${this.props.ending}__blob`}></span>
//                             <span className={`sign_${this.props.ending}__blob`}></span>
//                         </span>
//                     </span>
//                 </button>
// {/* 
//                 <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
//                     <defs>
//                         <filter id="goo">
//                             <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
//                             <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
//                             <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
//                         </filter>
//                     </defs>
//                 </svg> */}
//             </Container>
//         </header>
//     )
}

export default Header;