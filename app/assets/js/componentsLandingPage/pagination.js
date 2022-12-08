import { COUNT_PER_PAGE } from '../shared/config.js';

export class Pagination {
  currentPage = 1;
  numberOfPages = 0;

  getDestinationsForCurrentPage(destinations) {
    const destinationsLength = destinations.length;
    this.numberOfPages = Math.ceil(destinationsLength / COUNT_PER_PAGE);
    const startIndex = (this.currentPage - 1) * COUNT_PER_PAGE;
    const endIndex = this.currentPage * COUNT_PER_PAGE;
    return destinations.slice(startIndex, endIndex);
  }

  nextPage() {
    if (this.currentPage !== this.numberOfPages) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage !== 1) this.currentPage--;
  }
}
