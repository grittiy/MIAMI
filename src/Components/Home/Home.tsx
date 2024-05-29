import React, { useEffect } from 'react';
import './home.scss';
import video from '../../Ass/vedio2.mp4';
import { HiFilter } from "react-icons/hi";
import { FaFacebook, FaInstagram, FaTiktok, FaListUl } from "react-icons/fa";
import { TbAppsFilled } from "react-icons/tb";

import Aos from 'aos';
import 'aos/dist/aos.css'; // Import the CSS for AOS animations

const Home = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <section className='home'>
            <div className="overlay"></div>
            <video src={video} muted autoPlay loop></video>
            <div className="homeContent container">
                <div className="textDiv">
                    <span data-aos="fade-up" className="smallText">
                        แพ็คเกจของเรา
                    </span>
                    <h1 data-aos="fade-up" className="homeTitle">
                        ค้นหาวันหยุดของคุณ
                    </h1>
                </div>

                <div data-aos="fade-up" className='cardDiv grid'>
                    <div className="dateInput">
                        <label htmlFor="date">
                            ค้นหาวันที่เข้าพัก :
                        </label>
                        <div className="input flex">
                            <input type="date" />
                        </div>
                    </div>
                    <div className="priceInput">
                        <div className="label_total flex">
                            <label htmlFor="price">ราคาสูงสุด</label>
                            <h3 className='total'>฿10,000</h3>
                        </div>
                        <div className="input flex">
                            <input type="range" max="10000" min="1000" />
                        </div>
                    </div>
                    <div className="searchOptions flex">
                        <HiFilter className='icon' />
                        <span>MORE FILTERS</span>
                    </div>
                </div>

                <div data-aos="fade-up" className="homeFooterIcons flex">
                    <div className="rightIcons">
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                        <FaTiktok className='icon' />
                    </div>

                    <div className="leftIcons">
                        <FaListUl className='icon' />
                        <TbAppsFilled className='icon' />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
