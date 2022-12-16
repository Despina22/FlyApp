import { API_DESTINATION_URL } from '../shared/config.js';

class Destinations {
  API_DESTINATION_URL;
  constructor(url) {
    if (Destinations.instance == null) {
      this.API_DESTINATION_URL = url;
      Destinations.instance = this;
    }
    return Destinations.instance;
  }

  async getDestination() {
    const res = await fetch(this.API_DESTINATION_URL);
    return await res.json();
  }

  async searchDestinations(title) {
    const res = await fetch(`${this.API_DESTINATION_URL}?title_like=${title}`);
    return await res.json();
  }

  async getDestinationById(destinationId) {
    return await fetch(`${this.API_DESTINATION_URL}/${destinationId}`, {
      method: 'GET',
    }).then(async function (data) {
      return await data.json();
    });
  }
}

const httpDestination = new Destinations(API_DESTINATION_URL);
Object.freeze(httpDestination);
export default httpDestination;
