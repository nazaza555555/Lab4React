import React from 'react'
import {BrowserRouter, NavLink, Route} from 'react-router-dom'
import './navalink.css'
import Products from './products.js'


export default function Router3() {
return (
<BrowserRouter>
<nav className="nav">
        <NavLink to="/" className="menu"
        activeClassName="active_menu"
        activeStyle={{fontWeight: 'bold'}}
exact={true}>Home
</NavLink> -&nbsp;
<NavLink to="/products" className="menu"
activeClassName="active_menu">Products
</NavLink> -&nbsp;
<NavLink to="/member" className="menu"
activeClassName="active_menu">Member
</NavLink> -&nbsp;
<NavLink to="/contact" className="menu"
activeClassName="active_menu">Contact Us
</NavLink>
</nav>
<div style={{margin: '20px' }}>

<Route path="/" exact={true} render={
() => {
return (
<p style={{textAlign:'center'}}>
     <h3>ยินดีต้อนรับสู่ React Store</h3>
    รายชื่อ <a href="/products">สินค้า</a>
    แต่ท่านต้องเป็น<a href="/member">สมาชิก</a>
    
    </p>
    )}
}/>
<Route path="/products" component={Products}/> 
</div>
</BrowserRouter>
)
}

