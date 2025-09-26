import { useState } from "react";
import quotes from "../../data/quotes.json";

import SocialLinkTree from "../../components/SocialLinkTree";
import Button from "../../components/Button";
import Transition from "../../components/Transition";
import Tooltip from "../../components/Tooltip";

import { IoMdDownload as DownloadIcon } from "react-icons/io";
import { BiSolidQuoteLeft as OpenQuotationIcon } from "react-icons/bi";
import { BiSolidQuoteRight as CloseQuotationIcon } from "react-icons/bi";
import { MdOutlineRefresh as RefreshIcon } from "react-icons/md";

import { displayQuote } from "./aboutUtils";

import bioImage from "../../assets/images/miles_processed.png";

const AboutBioInfo = () => {
  const [quote, setQuote] = useState(quotes[0]);

  const fetchQuote = () => displayQuote(quotes, setQuote);

  const handleMouseEnter = () => {
    const isNotTouchDevice = window.matchMedia("(hover: hover)").matches;
    if (isNotTouchDevice) {
      fetchQuote();
    }
  };

  return (
    <Transition
      className="about__bio--info grid"
      transitionName="fade-in-up"
      trigger="whileInView"
      offset="-25%"
      duration={1}
    >
      <div
        className="about__bio--info__container"
        onMouseEnter={handleMouseEnter}
      >
        <div className="about__bio--info__image">
          <img
            src={bioImage}
            alt="Miles Mosweu"
            className="about__bio--image"
          />

          <div className="about__bio--info__contact">
            <div className="about__bio--info__contact--content p-2">
              <p className="about__bio--info__contact--name">Miles Mosweu</p>
              <p className="about__bio--info__contact--title">
                Full Stack Developer
              </p>

              <div className="about__bio--info__contact--socials grid grid-pi-c pt-1">
                <SocialLinkTree />
              </div>

              <div className="about__bio--info__contact--quote p-2">
                <blockquote>{`"${quote.content}"`}</blockquote>
                <cite>&mdash; {quote.author}</cite>

                <OpenQuotationIcon className="quotation quotation__open" />
                <CloseQuotationIcon className="quotation quotation__close" />
                <button
                  className="about__bio--info__contact--quote__button"
                  onClick={fetchQuote}
                  title="Refresh quote"
                >
                  <RefreshIcon />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="about__bio--info__button--list flex gap-2">
          <div className="about__bio--info__button">
            <Button
              name="View Resume"
              type="secondary"
              linkTo="https://docs.google.com/document/d/1rOU5wqF-9cZJrHmSSsP3YFXvpCAB7M-cY_R3njqn6Vs/view?usp=sharing"
            />
            <Tooltip isLink>View my Resume on Google Docs</Tooltip>
          </div>

          <div className="about__bio--info__button">
            <Button
              name=""
              type="tertiary"
              linkTo="https://docs.google.com/document/d/1rOU5wqF-9cZJrHmSSsP3YFXvpCAB7M-cY_R3njqn6Vs/export?format=pdf"
              icon={<DownloadIcon />}
            />

            <Tooltip isLink>Download my Resume as PDF</Tooltip>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default AboutBioInfo;
