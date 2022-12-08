import { API_DESTINATION_URL } from '../shared/config.js';
import { Destinations } from '../http/http.destinations.shared.js';
import { ErrorMessage } from '../shared/errorMessage.js';
import { Pagination } from './pagination.js';
import { RenderDestinations } from './renderDestinations.js';

export class SearchDestinations {
  httpDestination = new Destinations(API_DESTINATION_URL);
  renderDestination = new RenderDestinations();
  renderErrorMessage = new ErrorMessage();
  desinationPagination = new Pagination();

  async searchDestination() {
    const searchValue = document.querySelector('.search').value;
    const filteredData = await this.httpDestination.searchDestinations(
      searchValue
    );
    return filteredData.length > 0 && searchValue.trim() !== ''
      ? this.renderDestination.renderDestinations(
          this.desinationPagination.getDestinationsForCurrentPage(filteredData)
        )
      : this.renderErrorMessage.renderError(
          'Destination can not be found. Please try again!!!'
        );
  }
}
