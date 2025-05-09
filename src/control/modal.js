const popupAppearingMargin = 8;
const directions = {
  top: 'top',
  right: 'right',
  bottom: 'bottom',
  left: 'left',
};

showModal = (anchorEl) => {
  setModalTransition(modalElement.classList.contains('open') ? 0.4 : 0)
  
  modalElement.classList.add('open');
  document.body.style.overflow = 'hidden';
  infoAndSettingsElement.setAttribute('tabindex', -1);
  infoAndSettingsElement.style.pointerEvents = 'none';

  const allowedDirections = getAllowedModalDirectionsToOpen(anchorEl);
  placeModal(anchorEl, allowedDirections);
};
closeModal = () => {
  modalElement.classList.remove('open');
  document.body.style.overflow = 'initial';
  infoAndSettingsElement.removeAttribute('tabindex');
  infoAndSettingsElement.style.pointerEvents = 'all';
};
setModalTransition = (s) => modalElement.style.transition = `${s}s`

getAllowedModalDirectionsToOpen = (anchorEl) => {
  function getScrollMaxY(){"use strict";
    let innerHeight = window.innerHeight || ebody.clientHeight, yWithScroll = 0;

    if (window.innerHeight && window.scrollMaxY){
        // Firefox 
        yWithScroll = window.innerHeight + window.scrollMaxY; 
    } else if (document.body.scrollHeight > document.body.offsetHeight){ 
        // all but Explorer Mac 
        yWithScroll = document.body.scrollHeight; 
    } else { 
        // works in Explorer 6 Strict, Mozilla (not FF) and Safari 
        yWithScroll = document.body.offsetHeight; 
    } 
    return yWithScroll - innerHeight; 
  }

  const screenSizes = [document.body.clientWidth, document.body.clientHeight - getScrollMaxY() + window.scrollY]
  const allowedDirections = [];

  if (anchorEl.offsetTop + anchorEl.clientHeight + modalElement.clientHeight < screenSizes[1]) {
    allowedDirections.push(directions.bottom);
  }
  if (anchorEl.offsetLeft + anchorEl.clientWidth + modalElement.clientWidth + popupAppearingMargin < screenSizes[0]) {
    allowedDirections.push(directions.right);
  }
  if (anchorEl.offsetTop - modalElement.clientHeight > 0 && !allowedDirections.includes(directions.bottom)) {
    allowedDirections.push(directions.top);
  }
  if (anchorEl.offsetLeft - modalElement.clientWidth - popupAppearingMargin > 0 && !allowedDirections.includes(directions.right)) {
    allowedDirections.push(directions.left);
  }

  return allowedDirections;
}

placeModal = (anchorEl, allowedDirections) => { 
  allowedDirections.forEach((direction, i) => {
    if (i > 1) return;
    switch (direction) {
      case directions.left: 
        modalElement.style.left = `${anchorEl.offsetLeft - modalElement.clientWidth - popupAppearingMargin}px`;
        break;
      case directions.bottom:
        modalElement.style.top = `${anchorEl.offsetTop}px`;
        break;
      case directions.right:
        modalElement.style.left = `${anchorEl.offsetLeft + anchorEl.clientWidth + popupAppearingMargin}px`;
        break;
      case directions.top:
        modalElement.style.top = `${anchorEl.offsetTop + anchorEl.clientHeight - modalElement.clientHeight}px`;
        break;
    }
  });
}

let prevKey = '';
function modalCloseOnEscKeySubscribe() {
  document.addEventListener('keydown', (ev) => {
    if (prevKey === 'Shift' && ev.key === 'Enter') {
      selectedCell?.click();
      ev.preventDefault();
    } else if (ev.key === 'Escape') {
      closeModal();
      unselectLastClickedCell();
      nullBufferCell();
    }
    prevKey = ev.key;
  })
}