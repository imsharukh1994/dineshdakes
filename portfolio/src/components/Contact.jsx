import { siteContent } from '../data/siteContent';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="heading-md">LET'S WORK TOGETHER</h2>
        </div>
        
        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="heading-md contact-info-title">BOOKING ENQUIRIES</h3>
            <p className="text-body mb-4">
              Available for film, television, editorial, and celebrity projects globally.
              Please fill out the form to discuss your upcoming project.
            </p>
            
            <div className="contact-details">
              {siteContent.contactDetails.email && (
                <div className="contact-item">
                  <span className="contact-label">EMAIL</span>
                  <a href={`mailto:${siteContent.contactDetails.email}`}>{siteContent.contactDetails.email}</a>
                </div>
              )}
              {siteContent.contactDetails.phone && (
                <div className="contact-item">
                  <span className="contact-label">PHONE</span>
                  <a href={`tel:${siteContent.contactDetails.phone}`}>{siteContent.contactDetails.phone}</a>
                </div>
              )}
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <input type="text" placeholder="Name" required />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <input type="email" placeholder="Email" required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Phone" />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <input type="text" placeholder="Project Type" />
                </div>
                <div className="form-group">
                  <input type="date" placeholder="Project Date" />
                </div>
              </div>
              
              <div className="form-group">
                <input type="text" placeholder="Location" />
              </div>
              
              <div className="form-group">
                <textarea rows="4" placeholder="Project Details / Message" required></textarea>
              </div>
              
              <button type="submit" className="btn btn-solid w-100">SEND ENQUIRY</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
