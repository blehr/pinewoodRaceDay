export const showErrorMessage = (errorId) => {
  const element = document.getElementById(errorId);
  element.classList.remove('hidden');
  setTimeout(() => {
    element.classList.add('hidden');
  }, 3000);
};
