import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";

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
    <div className="h-96 text-main bg-background flex flex-col items-center justify-between">
      <div className="w-full h-full flex items-center justify-evenly">
        <div>
          {LinksArr1.map((data, idx) => (
            <p
              key={idx}
              className="text-xl leading-10 cursor-pointer hover:text-highlight"
            >
              {data.title}
            </p>
          ))}
        </div>

        <div>
          {LinksArr2.map((data, idx) => (
            <p
              key={idx}
              className="text-xl leading-10 cursor-pointer hover:text-highlight"
            >
              {data.title}
            </p>
          ))}
        </div>

        <div>
          {socialLinksArr.map((data, idx) => (
            <p
              key={idx}
              className="text-xl leading-10 flex items-center cursor-pointer hover:text-highlight"
            >
              {data.icon}
              {data.title}
            </p>
          ))}
        </div>

        {/* Address */}
        <p className="text-lg leading-loose">
          Shri Shankracharya Technical Campus,
          <br />
          Junwani, Bhilai, C.G.
        </p>
      </div>

      <div className="text-center my-4">
        <h1>@2021 Vinitpal</h1>
        <span>
          <a className="mx-3 cursor-pointer hover:text-highlight text-paragraph">
            Privacy Policy
          </a>
          <a className="mx-3 cursor-pointer hover:text-highlight text-paragraph">
            Copyright
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
