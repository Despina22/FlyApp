export class RenderDestinations {
  destination = document.querySelector('.destination');

  renderDestinations(destinations) {
    this.destination.innerHTML = '';
    destinations.forEach(destination => {
      const { id, title, imagePath, price, description, from, to } =
        destination;

      const destinationElement = document.createElement('div');
      destinationElement.classList.add('destination-wrapper');
      destinationElement.innerHTML = `
      <div class="destination-content">
      <h2 class="destination-header" data-id="${id}">${title}</h2>
                <img
                    src="${imagePath}"
                    alt="${title}"
                    class="destination-img"
                    data-id="${id}"
                />
                <p class="destination-description">
                   ${description.slice(0, 200)}...
                </p>
                <p class="destination-price">Price per person: ${price} &#8378;</p>
                <p class="destination-date">Date: ${(
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
                </div>
            `;
      this.destination.appendChild(destinationElement);
    });

    const headerButtons = document.querySelectorAll('.destination-header');
    headerButtons.forEach(btn =>
      btn.addEventListener('click', function (e) {
        const destinationId = e.target.dataset.id;
        window.location.href =
          'singleDestinationPage.html?destinationId=' + destinationId;
      })
    );

    const imageBtn = document.querySelectorAll('.destination-img');
    imageBtn.forEach(img => {
      img.addEventListener('click', function (e) {
        const destinationId = e.target.dataset.id;
        window.location.href =
          'singleDestinationPage.html?destinationId=' + destinationId;
      });
    });
  }
}
