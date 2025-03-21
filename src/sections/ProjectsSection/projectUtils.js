export const trapFocus = (isActive, containerRef) => {
  if (!isActive || !containerRef.current) return;

      const focusableElements = containerRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]), [data-focusable="true"]'
    );

    if (focusableElements.length === 0) return; // Exit if no focusable elements are found
    
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];
    
    const handleFocus = (e) => {
    console.log(e.target);
    if (e.shiftKey && document.activeElement === firstFocusableElement) {
      e.preventDefault();
      lastFocusableElement.focus();
    } else if (!e.shiftKey && document.activeElement === lastFocusableElement) {
      e.preventDefault();
      firstFocusableElement.focus();
    }
  };

  firstFocusableElement.focus();


  const keyListener = (e) => {
    if (e.key === "Tab") {
      handleFocus(e);
    }
  };

  document.addEventListener("keydown", keyListener);

  return () => {
    document.removeEventListener("keydown", keyListener);
  };
};

export const modalAnimationProps = {
  initial: { opacity: 0, scale: 0 },
  animate: {
    opacity: 1,
    scale: 1,
  },
  exit: { opacity: 0, scale: 0 },
  transition: { duration: 0.3 },
};