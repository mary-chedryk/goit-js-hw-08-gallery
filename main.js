const galleryItems = [
    {
      preview: 'https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg',
      original: 'https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg',
      description: 'Tulips',
    },
    {
      preview: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=900&auto=format&fit=crop&q=60',
      original: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=900&auto=format&fit=crop&q=60',
      description: 'Nature',
    },
    {
      preview: 'https://images.unsplash.com/photo-1530908295418-a12e326966ba?w=900&auto=format&fit=crop&q=60',
      original: 'https://images.unsplash.com/photo-1530908295418-a12e326966ba?w=900&auto=format&fit=crop&q=60',
      description: 'Forest',
    },
  ];
  
  const galleryContainer = document.querySelector('.js-gallery');
  const lightbox = document.querySelector('.js-lightbox');
  const lightboxImage = document.querySelector('.lightbox__image');
  const lightboxCloseBtn = document.querySelector('[data-action="close-lightbox"]');
  const lightboxOverlay = document.querySelector('.lightbox__overlay');
  
  const galleryMarkup = galleryItems
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
          </a>
        </li>
      `;
    })
    .join('');
  
  galleryContainer.innerHTML = galleryMarkup;
  
  galleryContainer.addEventListener('click', onGalleryClick);
  lightboxCloseBtn.addEventListener('click', closeLightbox);
  lightboxOverlay.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', onKeyPress);
  
  function onGalleryClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') return;
  
    lightbox.classList.add('is-open');
    lightboxImage.src = event.target.dataset.source;
    lightboxImage.alt = event.target.alt;
  }
  
  function closeLightbox() {
    lightbox.classList.remove('is-open');
    lightboxImage.src = '';
    lightboxImage.alt = '';
  }
  
  function onKeyPress(event) {
    if (event.key === 'Escape') {
      closeLightbox();
    }
  }
  