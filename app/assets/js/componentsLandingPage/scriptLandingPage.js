import { Navigation } from '../shared/navigation.js';
import { Pagination } from './pagination.js';
import { RenderDestinations } from './renderDestinations.js';
import { SearchDestinations } from './searchDestinations.js';
import { API_DESTINATION_URL } from '../shared/config.js';
import { Destinations } from '../http/http.destinations.shared.js';

const httpDestination = new Destinations(API_DESTINATION_URL);
const renderDestination = new RenderDestinations();
const destinationsPagination = new Pagination();
const searchDestinations = new SearchDestinations();
const navigation = new Navigation();

const renderData = async function () {
  const data = await httpDestination.getDestination();

  renderDestination.renderDestinations(
    destinationsPagination.getDestinationsForCurrentPage(data)
  );
};
await renderData();

document
  .querySelector('.open-navbar-icon')
  .addEventListener('click', navigation.toggleNavbar);

document.getElementById('home-link').addEventListener('click', function (e) {
  e.preventDefault();
  renderData();
});

document
  .querySelector('.right-arrow')
  .addEventListener('click', async function () {
    destinationsPagination.nextPage();
    renderData();
  });

document
  .querySelector('.left-arrow')
  .addEventListener('click', async function () {
    destinationsPagination.prevPage();
    renderData();
  });

document
  .querySelector('.btn-search')
  .addEventListener('click', async function () {
    await searchDestinations.searchDestination();
  });

document
  .querySelector('.search')
  .addEventListener('keydown', async function (e) {
    if (e.key === 'Enter') {
      await searchDestinations.searchDestination();
    }
  });
