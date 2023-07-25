import React from "react";
import "./Portfolio.css";
import * as SiIcons from "react-icons/si";
import devConnector from "../../Images/DevConnectorApp.jpg";
import gmail from "../../Images/GmailApp.jpg";
import ecom from "../../Images/FlorashopApp.jpg";
import crm from "../../Images/CRMApp.jpg"

function Portfolio() {

  return (
    <div id="portfolio">
      <h1 className="logo-text">Portfolio</h1>
      <div className="allProjects">

        <div className="card" data-aos="zoom-in-up">
          <img src={devConnector} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">DevConnector</h5>
          </div>
          <div className="card-img-overlay">
            <button type="button" className="btn btn-primary mx-2" data-toggle="popover_1" data-placement="bottom" data-html="true">
              Login Credentials<i class="fas fa-key fa-lg" style={{ marginLeft: '8px' }}></i>
            </button>
            <div className="img-title">DevConnector</div>
            <div className="img-description">
              <p>
                DevConnector - DevConnector is mainly designed to share the ideas, skills and knowledge to wide developers around the world. Developer can easily interact with the other developers via Chat/Post and they can tune their skills. Also, Developers can expose their sharing and teaching skills.
              </p>
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <i className="fab fa-node node"></i> &nbsp;
                <SiIcons.SiMongodb className="mongodb" /> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Sathyanarayanan-R/Developers-Connector-App-Frontend"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Sathyanarayanan-R/Developers-Connector-App-Backend"
                  >
                    Backend <i className="fab fa-github"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://developers-connector-sj.netlify.app"
                  >
                    Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card" data-aos="zoom-in-up">
          <img src={ecom} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">E-Commerce FloraShop</h5>
          </div>
          <div className="card-img-overlay">
            <button type="button" className="btn btn-primary mx-2" data-toggle="popover_2" data-placement="bottom" data-html="true">
              Login Credentials<i class="fas fa-key fa-lg" style={{ marginLeft: '8px' }}></i>
            </button>
            <div className="img-title">E-Commerce FloraShop</div>
            <div className="img-description">
              <p>
                A site to Buy and Sell Plants Online
              </p>
              <p>
                Implemented this application with complete authentication system
                along with varoius roles(Admin,Client)
              </p>
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <i className="fab fa-node node"></i> &nbsp;
                <SiIcons.SiMongodb className="mongodb" /> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Sathyanarayanan-R/Florashop-ECommerce-Frontend"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Sathyanarayanan-R/Florashop-ECommerce-Backend"
                  >
                    Backend <i className="fab fa-github"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://florashop-ecommerce-sj.netlify.app"
                  >
                    Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card" data-aos="zoom-in-up">
          <img
            src={crm}
            className="card-img-top"
            alt="..."
          />
          <div className="title_heading">
            <h5 className="card-title">CRM Application</h5>
          </div>
          <div className="card-img-overlay">
            <button type="button" className="btn btn-primary mx-2" data-toggle="popover_3" data-placement="bottom" data-html="true">
              Login Credentials<i class="fas fa-key fa-lg" style={{ marginLeft: '8px' }}></i>
            </button>
            <div className="img-title">CRM Application</div>
            <div className="img-description">
              <p>
                Customer relationship management (CRM) Application is used to help manage, track, and store information related to your company's current and potential customers.
              </p>
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <i className="fab fa-node node"></i> &nbsp;
                <SiIcons.SiMongodb className="mongodb" /> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Sathyanarayanan-R/CRM-App/tree/main/client"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Sathyanarayanan-R/CRM-App/tree/main/server2"
                  >
                    Backend <i className="fab fa-github"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://crm-app-sj.netlify.app"
                  >
                    Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card" data-aos="zoom-in-up">
          <img src={gmail} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">Gmail Clone</h5>
          </div>
          <div className="card-img-overlay">
            <button type="button" className="btn btn-primary mx-2" data-toggle="popover_4" data-placement="bottom" data-html="true">
              Login Credentials<i class="fas fa-key fa-lg" style={{ marginLeft: '8px' }}></i>
            </button>
            <div className="img-title">Gmail Clone</div>
            <div className="img-description">
              <p>Authendicated User can send Email and Read Email .</p>
              <p>
                User can send, receive & reply mails between them. Multi user communication & advanced drafting features will be included in future.
              </p>
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <i className="fab fa-node node"></i> &nbsp;
                <SiIcons.SiMongodb className="mongodb" /> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Sathyanarayanan-R/Gmail-Clone-frontend"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Sathyanarayanan-R/Gmail-Clone-backend"
                  >
                    Backend <i className="fab fa-github"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://gmail-clone-sj.netlify.app"
                  >
                    Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Portfolio;
