const shareBtn = document.getElementById('share-btn');
const sharePopup = document.querySelector('.share-popup');
const profileBadge = document.querySelector('.profile-badge');

shareBtn.addEventListener('click', () => {
  sharePopup.classList.toggle('active');
  profileBadge.classList.toggle('hide');
});
