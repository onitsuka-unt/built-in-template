import disableCallOnNonMobile from '@/scripts/common/disableCallOnNonMobile';
import initializeViewport from '@/scripts/common/initializeViewport';

document.addEventListener('DOMContentLoaded', () => {
  disableCallOnNonMobile();
  initializeViewport();
  console.log('Common scripts initialized');
});
