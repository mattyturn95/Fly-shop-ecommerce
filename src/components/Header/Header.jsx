import React from 'react'
import './styles.css'



const Header = () => {
    return (
        <>
        <div>
            <p className="headerLogo">
                The only online<br/> fly-store <br/>worth the visit
            </p>
        </div>        
            <img style={{ width: "100%", height: "100%" , marginTop: "0px"}} src="https://images.unsplash.com/photo-1550874613-8420c2f98db9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" />
        </>


    )
}

export default Header
