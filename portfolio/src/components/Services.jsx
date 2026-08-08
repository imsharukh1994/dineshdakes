import { siteContent } from '../data/siteContent';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="services-section section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="heading-md">SERVICES</h2>
        </div>
        
        <div className="services-grid">
          {siteContent.services.map((service, idx) => (
            <div key={idx} className="service-card">
              <div className="service-number">{service.id}</div>
              <h3 className="service-title">{service.title}</h3>
              {service.details && <p className="service-details">{service.details}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
