import { useEffect } from "react";

const META_DATA = {
  home: {
    title: "Miles Mosweu | Software Developer",
    description:
      "Software developer based in Botswana. I create useful software that makes everyday tasks easier and more enjoyable.",
    canonical: "https://milesmosweu.netlify.app/",
  },
  about: {
    title: "About Me | Miles Mosweu",
    description:
      "Learn more about me, my journey as a software developer, and how I can help bring your ideas to life with innovative solutions.",
    canonical: "https://milesmosweu.netlify.app/about",
  },
  portfolio: {
    title: "Portfolio | Miles Mosweu",
    description:
      "Explore a variety of projects I've built. Each highlighting my development, design, and problem-solving skills. Discover technologies I've used and the impact of my work.",
    canonical: "https://milesmosweu.netlify.app/portfolio",
  },
  contact: {
    title: "Contact Me | Miles Mosweu",
    description:
      "Get in touch with me for collaborations, project inquiries, or just to say hello. I'm excited to connect and explore new opportunities together.",
    canonical: "https://milesmosweu.netlify.app/contact",
  },
};

const changeTitle = (title) => {
  if (title) {
    document.title = title;
  }
};

const changeDescription = (description) => {
  if (description) {
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;
  }
};

const changeCanonical = (canonical) => {
  if (canonical) {
    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = canonical;
  }
};

/**
 * MetaTags component to manage the document head tags for different pages.
 * @param {Object} props - Component props.
 * @param {string} props.page - The current page identifier (e.g., 'home', 'about', 'portfolio', 'contact'). Defaults to 'home'.
 * @returns {null} - This component does not render any visible elements.
 */

const MetaTags = ({ page = "home" }) => {
  const { title, description, canonical } =
    META_DATA[page] || META_DATA["home"];

  useEffect(() => {
    changeTitle(title);

    changeDescription(description);

    changeCanonical(canonical);
  }, [title, description, canonical]);

  return null;
};

export default MetaTags;
