export class RenderReservationForm {
  destinationDivEl = document.querySelector('#destination');
  renderReservationForm(destinations) {
    destinations.forEach(reservedDestination => {
      const { id, title } = reservedDestination;
      const createOptionEl = document.createElement('option');
      createOptionEl.value = id;
      createOptionEl.textContent = title;

      this.destinationDivEl.appendChild(createOptionEl);
    });
  }
}
