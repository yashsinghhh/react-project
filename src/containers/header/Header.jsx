import React from 'react'
// import './header.css';
import ai from '../../assets/ai.png';
// import people from '../../assets/people.png';
import people from '../../assets/people.png'
import './header.css';

const Header = () => {
  return (
    <div className='header_main header_padding' id='main'>
      <div className='header_content'>
        <h1 className='gradient_text'>Let’s Build Something amazing with GPT-3 OpenAI</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <div className='header_input'>
          <input type='email' placeholder='Your email address'/>
          <button type='button'>Get Strated</button>
        </div>
        <div className='header_people'>
          <img src={people} alt='people'/>
          <p>1600 people requested access to the site</p>
        </div>
        {/* <div className='header_ai'>
          <img src={ai} alt='ai'/>
        </div> */}
        
    </div>
    <div className='header_ai'>
          <img src={ai} alt='ai'/>
        </div>
    </div>
  )
}

export default Header