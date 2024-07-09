import React from "react";
import Layout from "./../components/Layout/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserShield,
  faLock,
  faFileAlt,
  faUserCheck,
  faBan,
  faEnvelope,
  faChartLine
} from "@fortawesome/free-solid-svg-icons";



const Policy = () => {
  const policies = [
    {
      icon: faUserShield,
      text: "Your personal information is protected and handled with the utmost care and confidentiality."
    },
    {
      icon: faLock,
      text: "All transactions are secured using advanced encryption technologies to ensure your data is safe."
    },
    {
      icon: faFileAlt,
      text: "We collect only the necessary information required to provide you with the best possible service."
    },
    {
      icon: faUserCheck,
      text: "You have the right to access and update your personal information at any time."
    },
    {
      icon: faBan,
      text: "We do not share your personal information with third parties without your consent."
    },
    {
      icon: faEnvelope,
      text: "We may use your email address to send you updates about your order or other important information."
    },
    {
      icon: faChartLine,
      text: "We use analytics tools to understand how our website is used and to improve our services."
    }
  ];

  return (
    <Layout>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="https://aadsworld.com/assets/imgs/page/about-2.png"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-6">
        <h1 className="bg-dark p-2 text-white text-center"style={{ borderRadius: "10px" }}>PRIVACY POLICY</h1>
          {policies.map((policy, index) => (
            <div key={index} className="policy-item">
              <FontAwesomeIcon icon={policy.icon} size="lg" color="black" />
              <p>{policy.text}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .policy-item {
          display: flex;
          align-items: center;
          margin-bottom: 15px;
        }
        .policy-item p {
          margin-left: 15px;
          font-size: 16px;
          color: #555;
        }
        h2 {
          color: #333;
          text-align: center;
          margin-bottom: 20px;
        }
      `}</style>
    </Layout>
  );
};

export default Policy;