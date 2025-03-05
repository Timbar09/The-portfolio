export const trapFocus = (isProjectModalOpen, modalRef) => {
  // When the modal is open, add a keydown event listener to trap the focus
  if (isProjectModalOpen) {
    // Get all focusable elements within the modal
    const focusableElements = modalRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];

    const handleKeyDown = (event) => {
      if (event.key === 'Tab') {
        // If the shift key is held down and the first focusable element is focused, move the focus to the last focusable element
        if (event.shiftKey && document.activeElement === firstFocusableElement) {
          lastFocusableElement.focus();
          event.preventDefault();
        }
        // If the shift key is not held down and the last focusable element is focused, move the focus to the first focusable element
        else if (!event.shiftKey && document.activeElement === lastFocusableElement) {
          firstFocusableElement.focus();
          event.preventDefault();
        }
      }
    };

    // Immediately move the focus to the first focusable element
    firstFocusableElement.focus();

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      // When the modal is closed, remove the keydown event listener
      window.removeEventListener('keydown', handleKeyDown);
    };
  }
};