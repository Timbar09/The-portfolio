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
    label: "Subject * (select one from the list below)",
    type: "select",
    name: "subject",
    required: true,
    options: selectOptions,
  },
  { label: "Message *", type: "textarea", name: "message", required: true },
];
