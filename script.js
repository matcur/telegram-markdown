const indexBurger = document.querySelector('.index-burger')
indexBurger.addEventListener('click', () => {
  const upLayer = document.querySelector('.up-layer')
  upLayer.classList.add('show-up-layer')
  
  const leftMenu = document.querySelector('.left-menu')
  leftMenu.classList.add('show-left-menu')
})