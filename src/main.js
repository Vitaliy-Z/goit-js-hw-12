import iziToast from 'izitoast';
import searchHendler from './js/pixabay-api';
import createCardsTemplate from './js/render-functions';
import SimpleLightbox from 'simplelightbox';

const simplelightboxOptions = {
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 0.85,
  animationSpeed: 350,
  preloading: false,
  widthRatio: 0.9,
  heightRatio: 0.8,
  fadeSpeed: 400,
};
iziToast.settings({
  position: 'topCenter',
  timeout: 4500,
  transitionIn: 'bounceInDown',
});

const gallerySLB = new SimpleLightbox(
  '.gallery .gallery-link',
  simplelightboxOptions
);
const formEl = document.querySelector('.js-search-form');
const loaderEl = document.querySelector('.js-loader');
const galleryEL = document.querySelector('.js-gallery');
const loadMoreBtnEl = document.querySelector('.js-load-more-btn');

const urlParams = {};

formEl.addEventListener('submit', onSubmit);
loadMoreBtnEl.addEventListener('click', onLoadMore);

async function onSubmit(evt) {
  evt.preventDefault();
  galleryEL.innerHTML = '';

  const userQuery = evt.currentTarget.elements.userQuery.value.trim();

  if (userQuery.length === 0) {
    iziToast.error({
      message: 'Please, enter your search query!',
    });
    formEl.reset();
    return;
  }

  is_Loader_LoadMoreBtn_Gallery_Show(true, false, false);

  try {
    urlParams.query = userQuery;
    urlParams.page = 1;

    const { data } = await searchHendler(urlParams);

    if (data.total === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      formEl.reset();
      is_Loader_LoadMoreBtn_Gallery_Show();
      return;
    }

    galleryEL.innerHTML = createCardsTemplate(data.hits);
    gallerySLB.refresh();

    formEl.reset();

    if (data.total <= 15) {
      is_Loader_LoadMoreBtn_Gallery_Show(false, false, true);
      return;
    }

    is_Loader_LoadMoreBtn_Gallery_Show(false, true, true);
  } catch (err) {
    console.error(err);
    iziToast.error({
      message: 'Please, try again later',
    });
    is_Loader_LoadMoreBtn_Gallery_Show();
  }
}

async function onLoadMore() {
  is_Loader_LoadMoreBtn_Gallery_Show(true, false, true);

  urlParams.page++;

  try {
    const { data } = await searchHendler(urlParams);

    galleryEL.insertAdjacentHTML('beforeend', createCardsTemplate(data.hits));
    gallerySLB.refresh();

    scrollBy({
      top:
        document
          .querySelector('.gallery-item:last-child')
          .getBoundingClientRect().height * 2,
      behavior: 'smooth',
    });

    if (data.total <= urlParams.page * 15) {
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
      });
      is_Loader_LoadMoreBtn_Gallery_Show(false, false, true);
      return;
    }
  } catch (err) {
    console.error(err);
    iziToast.error({
      message: 'Please, try again later',
    });
    is_Loader_LoadMoreBtn_Gallery_Show();
  }

  is_Loader_LoadMoreBtn_Gallery_Show(false, true, true);
}

function is_Loader_LoadMoreBtn_Gallery_Show(
  loader = false,
  loadMore = false,
  gallery = false
) {
  loader
    ? loaderEl.classList.remove('visually-hidden')
    : loaderEl.classList.add('visually-hidden');

  loadMore
    ? loadMoreBtnEl.classList.remove('visually-hidden')
    : loadMoreBtnEl.classList.add('visually-hidden');

  gallery
    ? galleryEL.classList.remove('visually-hidden')
    : galleryEL.classList.add('visually-hidden');
}
