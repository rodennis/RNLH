import "./Contact.css";
import Layout from '../../components/Layout/Layout'

function Contact(props) {
  return (
    <Layout user={props.user}>
    <div className="main-contact">
      <h1 className='contact-h1'>Our Team</h1>
      <h3 className="sub-header-contact">This project was created using a mixture of React, Express,  MongoDB  and CSS in a total of 7 days!</h3>
      <div className="sub-contact">
        <div className='github-info'>
          <img src="https://res.cloudinary.com/dojhf40bp/image/upload/v1641240568/github-logo-silhouette-in-a-square_1_jbzisx.png" alt='github-icon' className='icons'/>
          <a href="https://github.com/nath248" target="_blank" rel="noreferrer" className="contact-link">Nathaly Herrera</a>
          <a href="https://github.com/lisagarcia13" target="_blank" rel="noreferrer" className="contact-link">Lisa Garcia</a>
          <a href="https://github.com/rodennis" target="_blank" rel="noreferrer" className="contact-link">Rodney Todd</a>
          <a href="https://github.com/Hayden-Arnold" target="_blank" rel="noreferrer" className="contact-link">Hayden Arnold</a>
        </div>
        <div className='linkedin-info'>
          <img src="https://res.cloudinary.com/dojhf40bp/image/upload/v1641240666/linkedin_2_obv2rd.png" alt='linkedin-icon' className='icons'/>
          <a href="https://www.linkedin.com/in/nath248/" target="_blank" rel="noreferrer" className="contact-link">Nathaly Herrera</a>
          <a href="https://www.linkedin.com/in/lisa-garcia-4028a4221" target="_blank" rel="noreferrer" className="contact-link">Lisa Garcia</a>
          <a href="https://www.linkedin.com/in/rodneytodd1994/" target="_blank" rel="noreferrer" className="contact-link">Rodney Todd</a>
          <a href="https://www.linkedin.com/in/hayden-arnold-503997222/" target="_blank" rel="noreferrer" className="contact-link">Hayden Arnold</a>
        </div>
      </div>
    </div>
    {/* <div> Icons made by <a href="https://www.flaticon.com/authors/riajulislam" title="riajulislam"> riajulislam </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div> */}
    </Layout>
  )
}

export default Contact
