import { useState } from "react";
import  Link from "next/link";
function LayoutHeader(){
    const [openMenu,setOpenMenu] = useState(false)
    return (
    <><span className="header__menuicons" >
    <img onClick ={()=>setOpenMenu(!openMenu)} title="Menu" alt="menuIcon" src="/static/icons/menu-icon.svg" className="img-responsive " />
    </span>
    <div id="mySidenav" className="sidenav">
  <a onClick ={()=>setOpenMenu(!openMenu)} className="closebtn" >&times;</a>
  <Link href="/home"><a >Home</a></Link>
  
  <Link href="/moderate"><a>Moderate</a></Link>
  <Link href="/severe"><a>Severe</a></Link>
  <Link href="/mild"><a>Mild</a></Link>
  <Link href="/infected"><a>Infected</a></Link>
</div>
    <style jsx>
        {
                `
                .header__menuicons{cursor:pointer;color:white;}
                .header__menuicons__img { height: 60px;}				
                .img-responsive{ fill: white;display:block;}       
.sidenav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
    width:${openMenu?"250px":"0px"};
  }
  
  .sidenav a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
  }
  
  .sidenav a:hover {
    color: #f1f1f1;
  }
  
  .sidenav .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
    cursor:pointer;
  }
  
  @media screen and (max-height: 450px) {
    .sidenav {padding-top: 15px;}
    .sidenav a {font-size: 18px;}
  }
                `
        }
    </style>
    </>)
}
export default LayoutHeader;