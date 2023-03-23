import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion } from 'react-bootstrap';

function Faq() {
  return (
    <div className=' SpecerT lg:mx-20'>
      <div className='lg:flex block gap-14 font-Lato'>
        <div className='heading-faq'>
          <h3 className='text-5xl lg:my-8 text-[#142B67] p-3 font-bold'>FAQs</h3>
        </div>
        <div className='xl:ml-36'>
          <Accordion>
            <div className='border-b-2'>
              <Accordion.Item className='border-b-2' eventKey="0">
                <Accordion.Header> <h3 className='text-[#142B67] font-bold'>How much time will it take to do the installation?</h3> </Accordion.Header>
                <Accordion.Body>
                  <p className='text-lg text-[#142B67] font-bold'>The delivery time is 15 days from the date of booking the order. The process takes 1-3 days depending on the space.</p>
                </Accordion.Body>
              </Accordion.Item>
            </div>
            <div className='border-b-2'>
              <Accordion.Item eventKey="1">
                <Accordion.Header><h3 className='text-[#142B67] font-bold'>Will there be a lot of noise and mess on site?</h3> </Accordion.Header>
                <Accordion.Body>
                  <p className='text-lg text-[#142B67] font-bold'>The delivery time is 15 days from the date of booking the order. The process takes 1-3 days depending on the space.</p>
                </Accordion.Body>
              </Accordion.Item>
            </div>
            <div className='border-b-2'>
              <Accordion.Item eventKey="2">
                <Accordion.Header> <h3 className='lg:w-2/3 w-96 text-[#142B67] font-bold'>Can I apply it to my old wooden furniture, counter top, wall paneling, wooden ceiling etc?</h3> </Accordion.Header>
                <Accordion.Body>
                  <p className='text-lg text-[#142B67] font-bold'>The delivery time is 15 days from the date of booking the order. The process takes 1-3 days depending on the space.</p>
                </Accordion.Body>
              </Accordion.Item>
            </div>
          </Accordion>
          <div className='end-text p-2 my-8'>
            <a href="./" className='text-lg no-underline'><h5 className='text-[#4885BB]'>Read more</h5></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq