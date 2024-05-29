import React, { useEffect } from 'react'
import './main.scss'

import img from '../../Ass/pexels-1.jpg'
import img2 from '../../Ass/pexels-2.jpg'
import img3 from '../../Ass/pexels-3.jpg'
import img4 from '../../Ass/pexels-4.jpg'
import img5 from '../../Ass/pexels-5.jpg'
import img6 from '../../Ass/pexels-6.jpg'

import Aos from 'aos';
import 'aos/dist/aos.css'; // Import the CSS for AOS animations


const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: 'One-Bedroom Pool Villa with Round-Trip Boat Transfer',
    grade: 'ไร้ที่ติ',
    fees: '฿5000',
    description: 'ระเบียง เก็บเสียง  เฟอร์นิเจอร์มีเอกลักษณ์เฉพาะห้อง สระว่ายน้ำส่วนตัว เครื่องปรับอากาศ เปล/เตียงเด็กอ่อนฟรี ตู้เย็น สมาร์ททีวี พักได้ 3 คน  พื้นที่ขนาด 125 ตร.ม. 1 เตียงคิงไซส์'
  },
  {
    id:2,
    imgSrc: img2,
    destTitle: 'Deluxe Room with Round-Trip Boat Transfer',
    grade: 'ไร้ที่ติ',
    fees: '฿2300',
    description: 'ระเบียง เก็บเสียง  เฟอร์นิเจอร์มีเอกลักษณ์เฉพาะห้อง เครื่องปรับอากาศ ตู้เย็น สมาร์ททีวี ผ้าปูที่นอนสำหรับผู้ที่เป็นภูมิแพ้  ผ้าม่านกันแสง  พักได้ 3 คน  พื้นที่ขนาด 35 ตร.ม. 1 เตียงคิงไซส์ หรือ 2 เตียงเดี่ยว'
  },
  {
    id:3,
    imgSrc: img3,
    destTitle: 'Two-Bedroom Oceanview Pool Villa with Round-Trip Boat Transfer',
    grade: 'ไร้ที่ติ',
    fees: '฿9900',
    description: 'ระเบียง เก็บเสียง  เฟอร์นิเจอร์มีเอกลักษณ์เฉพาะห้อง สระว่ายน้ำส่วนตัว เครื่องปรับอากาศ ตู้เย็น โต๊ะรับประทานอาหาร สมาร์ททีวี  พักได้ 6 คน  พื้นที่ขนาด 415 ตร.ม. วิวมหาสมุทร 1  เตียงคิงไซส์ และ 1 เตียงเดี่ยวขนาดใหญ่'
  },
  {
    id:4,
    imgSrc: img4,
    destTitle: 'ห้องดีลักซ์, ระเบียง, วิวสระว่ายน้ำ',
    grade: 'ไร้ที่ติ',
    fees: '฿3200',
    description: 'ระเบียง เก็บเสียง  เฟอร์นิเจอร์มีเอกลักษณ์เฉพาะห้อง เครื่องปรับอากาศ ตู้เย็น สมาร์ททีวี ผ้าปูที่นอนสำหรับผู้ที่เป็นภูมิแพ้  ผ้าม่านกันแสง  พักได้ 3 คน  พื้นที่ขนาด 35 ตร.ม. 1 เตียงคิงไซส์ หรือ 2 เตียงเดี่ยว'
  },
  {
    id:5,
    imgSrc: img5,
    destTitle: 'Four-Bedroom Oceanview Pool Villa with Round-Trip Boat Transfer',
    grade: 'ไร้ที่ติ',
    fees: '฿9900',
    description: 'ระเบียง เก็บเสียง  เฟอร์นิเจอร์มีเอกลักษณ์เฉพาะห้อง สระว่ายน้ำส่วนตัว เครื่องปรับอากาศ ห้องครัวขนาดเล็ก ตู้เย็น โต๊ะรับประทานอาหาร  พักได้ 12 คน  พื้นที่ขนาด 900 ตร.ม. วิวมหาสมุทร 3  เตียงคิงไซส์ และ 2 เตียงเดี่ยวขนาดใหญ่'
  },
  {
    id:6,
    imgSrc: img6,
    destTitle: 'One-Bedroom Reserve Pool Villa with Round-Trip Boat Transfer',
    grade: 'ไร้ที่ติ',
    fees: '฿4200',
    description: 'ระเบียง เก็บเสียง  เฟอร์นิเจอร์มีเอกลักษณ์เฉพาะห้อง สระว่ายน้ำส่วนตัว เครื่องปรับอากาศ  เปล/เตียงเด็กอ่อนฟรี ตู้เย็น สมาร์ททีวี ผ้าปูที่นอนสำหรับผู้ที่เป็นภูมิแพ้  ผ้าม่านกันแสง  พักได้ 3 คน  พื้นที่ขนาด 35 ตร.ม. 1 เตียงคิงไซส์ หรือ 2 เตียงเดี่ยว'
  }
]

const Main = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
}, []);


  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3  data-aos="fade-right" className="title">
          ห้องพัก ยอดนิยม
        </h3>
      </div>
      <div className="secContent grid">
        {
          Data.map((room) => {
            return (
              <div key={room.id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={room.imgSrc} alt={room.destTitle} />
                </div>
                <div className="cardInfo">
                  <h4 className="destTitle">
                    {room.destTitle}
                  </h4>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{room.grade} <small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{room.fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{room.description}</p>
                  </div>
                  
                  <button className='btn flex'>
                    รายละเอียด
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Main