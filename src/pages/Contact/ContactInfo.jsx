import { useState } from "react";

import { TbCopy as CopyIcon } from "react-icons/tb";
import { MdOutlineAlternateEmail as EmailIcon } from "react-icons/md";
import {
  BsFillCalendar2CheckFill as AvailableIcon,
  BsFillCalendar2XFill as UnavailableIcon,
  BsPersonWorkspace as WorkIcon,
  BsCheckLg as CopySuccessIcon,
} from "react-icons/bs";

import Tooltip from "../../components/Tooltip";

const InfoItemText = ({ title, description }) => {
  const { text, link, icon } = description;

  return (
    <div className="contact__info--text flex flex-col gap-1">
      <h3 className="contact__info--title">{title}</h3>

      {link ? (
        <a
          href={link.href}
          className="contact__info--description__link link link__default relative"
          rel="noopener noreferrer"
        >
          {icon && icon}

          {description.text}

          <Tooltip isLink>{link.tooltip}</Tooltip>
        </a>
      ) : (
        <p className="contact__info--description m-0">
          {icon && icon}

          {text}
        </p>
      )}
    </div>
  );
};

const InfoItemCopyButton = ({ text, tooltip, successTooltip }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button className="contact__info--copy-button" onClick={handleCopy}>
      {copied ? <CopySuccessIcon style={{ color: "#56D364" }} /> : <CopyIcon />}
      <span className="sr-only">{tooltip}</span>

      <Tooltip styles={{ fontSize: "0.85em", color: copied && "#56D364" }}>
        {copied ? successTooltip : tooltip}
      </Tooltip>
    </button>
  );
};

const ContactInfo = () => {
  const [copied, setCopied] = useState(false);

  const AvailabilityDescriptionIcon = () => (
    <span className="contact__info--description__icon relative" />
  );

  const info = [
    {
      title: "Availability",
      icon: <AvailableIcon />,
      description: {
        text: "I am available for work",
        icon: <AvailabilityDescriptionIcon />,
      },
    },
    {
      title: "Email Me",
      icon: <EmailIcon />,
      description: {
        text: "steelmontsho@gmail.com",
        link: {
          href: "mailto:steelmontsho@gmail.com",
          tooltip: "Click to send me an email",
        },
        copier: {
          tooltip: "Click to copy email",
          successTooltip: "Email copied to clipboard",
        },
      },
    },
    {
      title: "Work Environment",
      icon: <WorkIcon />,
      description: {
        text: "Remote, Hybrid, On-site",
      },
    },
  ];

  return (
    <div className="contact__info">
      <div className="container">
        <ul className="contact__info--list flex flex-col flex_md-row flex_md-jc-c gap-2">
          {info.map(({ icon, title, description }, index) => (
            <li
              key={index}
              className="contact__info--item relative flex flex_md-col gap-2 p-2"
            >
              <span className="contact__info--icon grid">{icon}</span>

              <InfoItemText title={title} description={description} />

              {description.copier && (
                <InfoItemCopyButton
                  text={description.text}
                  tooltip={description.copier.tooltip}
                  successTooltip={description.copier.successTooltip}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactInfo;
