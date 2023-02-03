import React from 'react'
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import {AiTwotoneHome} from 'react-icons/ai';
import {MdCall} from 'react-icons/md';
import {MdEmail} from 'react-icons/md';
import { BsInfoLg } from 'react-icons/bs';
import Container from '../components/Container';

const Contact = () => {
  return <>
   <Meta title={"Contact Us"}/>
    <BreadCrumb title="Contact Us" />
    <Container class1="contact-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
          <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1901.5607956429326!2d-0.00709481126517272!3d51.49690761153282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876034263f9756f%3A0x34f1ff4643a1477b!2sRambler%20House!5e0!3m2!1sen!2suk!4v1675025686183!5m2!1sen!2suk" 
          width="600" 
          height="450" 
          className="border-0 w-100" 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between">
              <div>
                <h3 className="contact-title mb-4">Contact </h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input type="text" className="form-control" placeholder="Name" />
                      
                    
                  </div>
                  <div>
                    <input type="email" className="form-control" placeholder="Email"/>
                      
                    
                  </div>
                  <div>
                    <input type="tel" className="form-control" placeholder="Phone number"/>
                      
                    
                  </div>
                  <div>
                    <textarea  className="w-100 form-control" rows="4" cols="30" placeholder="Comments"></textarea>
                  </div>
                  <div>
                    <button className="button border-0">Submit</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title mb-4">Get in touch with us</h3>
                <div>
                  <ul className="ps-0">
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiTwotoneHome className="fs-5"/>
                      <address className="mb-0">Rambler House, 94 Stewart St, London E14 3SU</address>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <MdCall className="fs-5"/>
                      <a href="tel:+44 796123092" className="mb-0">
                +44 796123092</a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                    <MdEmail className="fs-5"/>
                    <a href="mailto:" className="mb-0 d-flex gap-15 align-items-center">
                ishmaelewis40@gmail.com
              </a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                    <BsInfoLg className="fs-5"/>
                    <p className="mb-0">Monday - Friday 10AM - 5 PM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </Container>
  </>
}

export default Contact