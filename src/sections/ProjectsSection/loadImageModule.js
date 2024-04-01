/**
 * Load image module dynamically
 *
 * @param {Object} data - project data
 * @param {Function} setBgImage - useState function to set background image
 */

export const loadImg = async (data, setBgImage) => {
  const imgModule = await import(
    /* @vite-ignore */
    `/src/assets/images/projects/${data.image}`
  );
  setBgImage(imgModule.default);
};
