export const displayQuote = (quotes, setQuote) => {
  try {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    setQuote(randomQuote);
  } catch (error) {
    console.error('Error fetching quote:', error);
  }
};

export const softSkills = [
  {
    id: 1,
    title: 'Communication',
    description:
      'I can articulate ideas clearly, listen actively, and express myself effectively in group settings.',
  },
  {
    id: 2,
    title: 'Collaboration',
    description:
      'I can work effectively with others, share knowledge, and contribute to a positive team culture.',
  },
  {
    id: 3,
    title: 'Time Management',
    description:
      'I can prioritize tasks, set realistic deadlines, and manage my time effectively to meet project goals.',
  },
  {
    id: 4,
    title: 'Adaptability',
    description:
      'I can adjust to new situations, learn new skills quickly, and thrive in a fast-paced environment.',
  },
];