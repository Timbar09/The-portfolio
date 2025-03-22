import { useState } from 'react';
import quotes from '../../data/quotes.json';

import SocialLinkTree from '../../components/SocialLinkTree';
import Button from '../../components/Button';
import Transition from '../../components/Transition';

import { IoMdDownload as DownloadIcon } from 'react-icons/io';
import { BiSolidQuoteLeft as OpenQuotationIcon } from 'react-icons/bi';
import { BiSolidQuoteRight as CloseQuotationIcon } from 'react-icons/bi';
import { MdOutlineRefresh as RefreshIcon } from 'react-icons/md';

import { displayQuote } from './aboutUtils';

import bioImage from '../../assets/images/miles_processed.png';

const AboutBioInfo = () => {
  const [quote, setQuote] = useState(quotes[0]);

  const fetchQuote = () => displayQuote(quotes, setQuote);

  return (
    <Transition
      className="about__bio--info grid grid-pi-c"
      transitionName="fade-in-up"
      trigger="whileInView"
      offset="-25%"
      duration={1}
    >
      <div className="about__bio--info__container" onMouseEnter={fetchQuote}>
        <div className="about__bio--info__image">
          <img src={bioImage} alt="Miles Mosweu" className="about__bio--image" />

          <div className="about__bio--info__contact">
            <div className="about__bio--info__contact--content p-2">
              <p className="about__bio--info__contact--name">Miles Mosweu</p>
              <p className="about__bio--info__contact--title">Full Stack Developer</p>

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

        <div className="about__bio--info__buttons flex gap-2">
          <Button
            name="View Resume"
            type="secondary"
            linkTo="https://docs.google.com/document/d/1rOU5wqF-9cZJrHmSSsP3YFXvpCAB7M-cY_R3njqn6Vs/view?usp=sharing"
            title="View resume on Google Drive"
          />
          <Button
            name=""
            type="tertiary"
            linkTo="https://docs.google.com/document/d/1rOU5wqF-9cZJrHmSSsP3YFXvpCAB7M-cY_R3njqn6Vs/export?format=pdf"
            icon={<DownloadIcon />}
            title="Download resume"
          />
        </div>
      </div>
    </Transition>
  );
};

export default AboutBioInfo;
