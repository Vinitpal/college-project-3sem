import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";

import "./Footer.css";

const LinksArr1 = [
  {
    title: "Contanct Us",
  },
  {
    title: "Visits",
  },
  {
    title: "Institution",
  },
  {
    title: "Gallery",
  },
];

const LinksArr2 = [
  {
    title: "About",
  },
  {
    title: "Admission Process",
  },
  {
    title: "Careers",
  },
  {
    title: "Placements",
  },
];

const socialLinksArr = [
  {
    title: "Facebook",
    icon: <TiSocialFacebook className="text-3xl mx-2" />,
  },
  {
    title: "Twitter",
    icon: <TiSocialTwitter className="text-3xl mx-2" />,
  },
  {
    title: "LinkedIn",
    icon: <TiSocialLinkedin className="text-3xl mx-2" />,
  },
  {
    title: "Instagram",
    icon: <TiSocialInstagram className="text-3xl mx-2" />,
  },
  {
    title: "Youtube",
    icon: <TiSocialYoutube className="text-3xl mx-2" />,
  },
];

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="footer-links">
          {LinksArr1.map((data, idx) => (
            <p key={idx}>{data.title}</p>
          ))}
        </div>

        <div className="footer-links">
          {LinksArr2.map((data, idx) => (
            <p key={idx}>{data.title}</p>
          ))}
        </div>

        <div className="footer-links">
          {socialLinksArr.map((data, idx) => (
            <p key={idx} className="flex items-center">
              {data.icon}
              {data.title}
            </p>
          ))}
        </div>

        {/* Address */}
        <p className="footer-address">
          Shri Shankracharya Technical Campus,
          <br />
          Junwani, Bhilai, C.G.
        </p>
      </div>

      <div className="text-center my-4">
        <h1>@2021 Vinitpal</h1>
        <span>
          <a className="footer-copyright">Privacy Policy</a>
          <a className="footer-copyright">Copyright</a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
