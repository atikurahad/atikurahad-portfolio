import React from 'react'
import '../styles/contact.css'
import { MdConnectWithoutContact, MdHome } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


function Contact() {
  return (
    <>
    <div className="card-main">
        

<section className='dev-card'>
<span id='icon'><MdConnectWithoutContact/></span>
<p id='dev-data'>+880 1989092909</p>
<p>Monday - Friday from 7am - 5pm</p>
</section>

<section className='dev-card'>
<span id='icon'><FaHome/></span>
<p id='dev-data'>Dhaka,Bangladesh</p>
<p>Uttara, Dhaka-1212</p>
</section>

<section className='dev-card'>
<span id='icon'><MdEmail/></span>
<p id='dev-data'>atikurahad@gmail.com</p>
<p>Contact me every time!</p>
</section>
    </div>

    </>
  )
}

export default Contact