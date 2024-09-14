const directions = {
  top: 'top',
  right: 'right',
  bottom: 'bottom',
  left: 'left',
};

showModal = (anchorEl) => {
  setModalTransition(modalElement.style.display === 'none' ? 0 : 0.4)
  
  modalElement.style.display = 'initial';
  document.body.style.overflow = 'hidden';

  const allowedDirections = getAllowedModalDirectionsToOpen(anchorEl);
  placeModal(anchorEl, allowedDirections);
};
closeModal = () => {
  modalElement.style.display = 'none';
  document.body.style.overflow = 'initial';
};
toggleModal = (anchorEl) => modalElement.open ? closeModal() : showModal(anchorEl);
setModalTransition = (s) => modalElement.style.transition = `${s}s`

getAllowedModalDirectionsToOpen = (anchorEl) => {
  const screenSizes = [document.body.clientWidth, document.body.clientHeight - window.scrollMaxY + window.scrollY]
  const allowedDirections = [];

  if (anchorEl.offsetTop + anchorEl.clientHeight + modalElement.clientHeight < screenSizes[1]) {
    allowedDirections.push(directions.bottom);
  }
  if (anchorEl.offsetLeft + anchorEl.clientWidth + modalElement.clientWidth < screenSizes[0]) {
    allowedDirections.push(directions.right);
  }
  if (anchorEl.offsetTop - modalElement.clientHeight > 0 && !allowedDirections.includes(directions.bottom)) {
    allowedDirections.push(directions.top);
  }
  if (anchorEl.offsetLeft - modalElement.clientWidth > 0 && !allowedDirections.includes(directions.right)) {
    allowedDirections.push(directions.left);
  }

  return allowedDirections;
}

placeModal = (anchorEl, allowedDirections) => { 
  allowedDirections.forEach((direction, i) => {
    console.log(direction)
    if (i > 1) return;
    switch (direction) {
      case directions.left: 
        modalElement.style.left = `${anchorEl.offsetLeft - modalElement.clientWidth}px`;
        break;
      case directions.bottom:
        modalElement.style.top = `${anchorEl.offsetTop}px`;
        break;
      case directions.right:
        modalElement.style.left = `${anchorEl.offsetLeft + anchorEl.clientWidth}px`;
        break;
      case directions.top:
        modalElement.style.top = `${anchorEl.offsetTop + anchorEl.clientHeight - modalElement.clientHeight}px`;
        break;
    }
  });
}