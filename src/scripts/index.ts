import initializeModal from '@/scripts/common/initializeModal';

if (document.querySelector('[data-page="home"]')) {
  console.log('HOME script loaded');

  const modals = document.querySelectorAll<HTMLDialogElement>('[data-modal]');

  modals.forEach((modal) => {
    initializeModal(modal);
  });
}
