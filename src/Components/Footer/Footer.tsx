import React, { useEffect } from 'react'
import './footer.scss'
import video2 from '../../Ass/vedio1.mp4'
import { BsFillSendFill } from "react-icons/bs";
import { FaHotel } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

import Aos from 'aos';
import 'aos/dist/aos.css'; // Import the CSS for AOS animations


const Footer = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
}, []);

  return (
    <section className='footer'>
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>ติดต่อ</small>
            <h2>MIAMI</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder='ป้อนอีเมลของคุณ' />
            <button data-aos="fade-up" className="btn flex" type='submit'>
              <BsFillSendFill className='icon' /> ส่ง
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footrtIntro flex">
            <div data-aos="fade-up" className="logoDiv">
              <a href="/" className='logo flex'>
                <FaHotel className='icon' />  MIAMI
              </a>
            </div>
            <div data-aos="fade-up" className="footerParagraph">
              โรงแรมของเรามุ่งมั่นที่จะมอบประสบการณ์การเข้าพักที่ยอดเยี่ยมและความสะดวกสบายในทุก ๆ การเข้าพัก
              สำรองห้องพักผ่านเว็บไซต์ของเราเพื่อรับข้อเสนอพิเศษและการบริการที่ดีที่สุด หากคุณมีคำถามหรือข้อสงสัยใด ๆ
              กรุณาติดต่อเราผ่านทางช่องทางต่าง ๆ ด้านบน เราพร้อมให้บริการคุณตลอด 24 ชั่วโมง
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <FaTwitter className='icon' />
              <FaYoutube className='icon' />
              <FaTiktok className='icon' />
            </div>

          </div>

          <div className="footerLinks grid">
            {/* group one */}
            <div data-aos="fade-up" data-aos-duratin="4000" className="linkGroup">
              <span className="groupTitle">
                เกี่ยวกับเรา
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                บริการ
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                ค่าธรรมเนียม
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                ช่องทางการชำระเงิน
              </li>

            </div>

            {/* group two */}
            <div data-aos="fade-up"  data-aos-duratin="4000" className="linkGroup">
              <span className="groupTitle">
               นโยบาย
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                ความเป็นส่วนตัว
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                คุกกี้
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                ข้อกำหนดและเงื่อนไข
              </li>

            </div>
            {/* group three */}
            <div data-aos="fade-up"  data-aos-duratin="4000" className="linkGroup">
              <span className="groupTitle">
                ความช่วยเหลือ
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                ความช่วยเหลือ
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                นโยบาย
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                การเปลี่ยนแปลง/ยกเลิกการจอง
              </li>

            </div>
          </div>

          <div className="footerDiv flex">
            <small>ที่สุดของเว็บไซต์จองห้องพัก</small>
            <small>COPYRIGHTS RESERVED - DREAM 2024</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer