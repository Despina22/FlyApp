export class RenderSingleDestination {
  destination = document.querySelector('.single-destination');

  renderSingleDestination(singleDestination) {
    this.destination.innerHTML = '';
    singleDestination.forEach(destination => {
      const { id, title, imagePath, price, description, from, to } =
        destination;

      const singleDestinationElement = document.createElement('div');
      singleDestinationElement.classList.add('single-destination-wrapper');
      singleDestinationElement.innerHTML = `
                <h2 class="single-destination-header" data-id="${id}">${title}</h2>
                <div class="single-destination-content">
                <img
                    src="${imagePath}"
                    alt="${title}"
                    class="single-destination-img"
                />
                <p class="single-destination-description">${description}</p>
                </div>
                <p class="single-destination-price">Price per Person : ${price} &#8378;</p>
                <p class="single-destination-date">Date: ${(
                  new Date(from).getMonth() + 1
                )
                  .toString()
                  .padStart(2, '0')}.${new Date(from)
        .getDate()
        .toString()
        .padStart(2, '0')}.${new Date(from).getFullYear()} - ${(
        new Date(to).getMonth() + 1
      )
        .toString()
        .padStart(2, '0')}.${new Date(to)
        .getDate()
        .toString()
        .padStart(2, '0')}.${new Date(to).getFullYear()}</p>
                <button class="make-reservation-btn">Make Reservation</button>
            `;
      this.destination.appendChild(singleDestinationElement);
    });

    const makeReservationBtn = document.querySelector('.make-reservation-btn');
    makeReservationBtn.addEventListener('click', function () {
      window.location.href = 'reservationCreateForm.html';
    });
  }
}
