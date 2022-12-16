import httpDestination from '../http/http.destinations.shared.js';
import errorMessage from '../shared/errorMessage.js';
import { Pagination } from './pagination.js';
import { RenderDestinations } from './renderDestinations.js';

export class SearchDestinations {
  renderDestination = new RenderDestinations();
  desinationPagination = new Pagination();

  async searchDestination() {
    const searchValue = document.querySelector('.search').value;
    const filteredData = await httpDestination.searchDestinations(searchValue);
    return filteredData.length > 0 && searchValue.trim() !== ''
      ? this.renderDestination.renderDestinations(
          this.desinationPagination.getDestinationsForCurrentPage(filteredData)
        )
      : errorMessage.renderError(
          'Destination can not be found. Please try again!!!'
        );
  }
}
