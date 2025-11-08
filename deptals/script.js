document.addEventListener('DOMContentLoaded', () => {
    const areas = document.querySelectorAll('map[name="vicinity-map"] area');
    const card = document.getElementById('info-card');

    areas.forEach(area => {
        area.addEventListener('mouseenter', (e) => {
            // Get both info and image URL
            const info = e.target.getAttribute('data-info');
            const image = e.target.getAttribute('data-image');

            if (info || image) {
                // Build HTML for the card
                let cardContent = '';

                if (image) {
                    // Use a real path for 'src'
                    cardContent += `<img src="${image}" alt="Location Image">`;
                }

                if (info) {
                    cardContent += `<p>${info}</p>`;
                }

                // Put the new HTML into the card
                card.innerHTML = cardContent;
                card.style.display = 'block';
            }
        });

        // This event listener for 'mousemove' is unchanged
        area.addEventListener('mousemove', (e) => {
            card.style.left = (e.pageX + 10) + 'px';
            card.style.top = (e.pageY + 10) + 'px';
        });

        // This event listener for 'mouseleave' is unchanged
        area.addEventListener('mouseleave', () => {
            card.style.display = 'none';
            card.innerHTML = '';
        });
    });
});