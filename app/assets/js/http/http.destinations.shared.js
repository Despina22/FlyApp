export class Destinations {
  API_DESTINATION_URL;
  constructor(url) {
    this.API_DESTINATION_URL = url;
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
