import React from 'react'

function Contact() {
  return (
    <div>
      <h1>Our Team</h1>
      <h3>This project was created using a mixture of React, Express,  MongoDB  and CSS in a total of 7 days!</h3>
      <div className='github-info'>
        <img src="https://res.cloudinary.com/dojhf40bp/image/upload/v1641224417/github-logo-silhouette-in-a-square_atrw4z.png" alt='github-icon'/>
        <a href="https://github.com/nath248" target="_blank" rel="noreferrer">Nathaly Herrera</a>
        <a href="https://github.com/lisagarcia13" target="_blank" rel="noreferrer">Lisa Garcia</a>
        <a href="https://github.com/rodennis" target="_blank" rel="noreferrer">Rodney Todd</a>
        <a href="https://github.com/Hayden-Arnold" target="_blank" rel="noreferrer">Hayden Arnold</a>
      </div>
      <div className='linkedin-info'>
        <img src="https://res.cloudinary.com/dojhf40bp/image/upload/v1641224417/linkedin_cxoijx.png" alt='linkedin-icon'/>
        <a href="https://www.linkedin.com/in/nath248/" target="_blank" rel="noreferrer">Nathaly Herrera</a>
        <a href="https://www.linkedin.com/in/lisa-garcia-4028a4221" target="_blank" rel="noreferrer">Lisa Garcia</a>
        <a href="https://www.linkedin.com/in/rodneytodd1994/" target="_blank" rel="noreferrer">Rodney Todd</a>
        <a href="https://www.linkedin.com/in/hayden-arnold-503997222/" target="_blank" rel="noreferrer">Hayden Arnold</a>
      </div>
    </div>
  )
}

export default Contact
