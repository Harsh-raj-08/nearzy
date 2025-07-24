import React from 'react'

const navbar = () => {
  return (
    <>
    <div className='navBar flex aling-center justify-between w-100%'>
        <div className="leftContainer">
            <div className="location">
                <h2>Delivery to User</h2>
                <h3>Sonipat , 131001</h3>
            </div>
            <div className="icon"><img src="dropdown.svg" alt="dropdown" /></div>
        </div>
        <div className="centerContainer">
            <div className="logo"><img width={150} src="nearzy_logo.png" alt="NearZy"/></div>
        </div>
        <div className="rightContainer">
            <div className="account">Account</div>
            <div className="cart"><button>My cart</button></div>
        </div>
    </div>
    </>
  )
}

export default navbar