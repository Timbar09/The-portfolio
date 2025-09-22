export const handleFormSubmit = (e) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);

  fetch("https://formspree.io/f/xgeqpgnr", {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => (response.ok ? form.reset() : Promise.reject()))
    .then(() => alert("Thank you for your message! I'll get back to you soon."))
    .catch(() => alert("Oops! Something went wrong. Please try again."));
};

export const handleClickOutside = (ref, callback) => {
  const listener = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  };

  document.addEventListener("mousedown", listener);
  return () => {
    document.removeEventListener("mousedown", listener);
  };
};

export const handleOptionClick = (option, setSelectedOption, setIsSelectBoxOpen) => {
  setSelectedOption(option);
  setIsSelectBoxOpen(false);
};

export const handleEscapeKey = (setIsSelectBoxOpen) => {
  const listener = (e) => {
    if (e.key === "Escape") {
      setIsSelectBoxOpen(false);
    }
  }

  document.addEventListener("keydown", listener);
  return () => document.removeEventListener("keydown", listener);
}

export const selectOptions = [
  "General Inquiry",
  "Project Proposal",
  "Technical Support",
  "Website Development",
];

export const formFields = [
  { label: "Name *", type: "text", name: "name", required: true },
  { label: "Email *", type: "email", name: "email", required: true },
  {
    label: "Subject *",
    type: "select",
    name: "subject",
    required: true,
    options: selectOptions,
  },
  { label: "Message *", type: "textarea", name: "message", required: true },
];

export const optionsAnimationProps = {
  initial: { opacity: 0, y: -10 },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.1 },
};
