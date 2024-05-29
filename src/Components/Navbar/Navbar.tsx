import React, { useState } from 'react'
import './navbar.scss'
import { FaHotel } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { TbDots } from "react-icons/tb";

const Navbar = () => {
    const [active, setActive] = useState('navBar')
    const openNavbar = () => {
        setActive('navBar activeNavbar')
    }
    const closeNavbar = () => {
        setActive('navBar')
    }
    return (
        <section className='navBarSection'>
            <header className="header flex">
                <div className="logoDiv">
                    <a href="/" className="logo flex">
                        <h1> <FaHotel className='icon' /> MIAMI.</h1>
                    </a>
                </div>
                <div className={active}>
                    <ul className='navLists flex'>
                        <li className="navItem">
                            <a href="/" className="navLink"> หน้าหลัก </a>
                        </li>
                        <li className="navItem">
                            <a href="/" className="navLink"> แพ็คเกจ </a>
                        </li>
                        <li className="navItem">
                            <a href="/" className="navLink"> ห้องพัก </a>
                        </li>
                        <li className="navItem">
                            <a href="/" className="navLink"> เกี่ยวกับเรา </a>
                        </li>
                        <li className="navItem">
                            <a href="/" className="navLink"> สปาและเวลเนส </a>
                        </li>
                        <li className="navItem">
                            <a href="/" className="navLink"> กิจกรรม </a>
                        </li>
                        <li className="navItem">
                            <a href="/" className="navLink"> ติดต่อฉัน </a>
                        </li>
                        <button className='btn'>
                            <a href="/" > จองเลย </a>
                        </button>
                    </ul>
                    <div className="closeNavbar" onClick={closeNavbar}>
                        <IoIosCloseCircle className='icon' />
                    </div>

                </div>

                <div className="toggleNavber" onClick={openNavbar}> 
                <TbDots  className='icon'/>
                </div>
            </header>
        </section>
    )
}

export default Navbar