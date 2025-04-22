async function loadGallery() {
  const gallery = document.getElementById("gallery");

  const url = `https://api.thecatapi.com/v1/images/search?limit=10`;
  const response = await fetch(url);
  const cats = await response.json();

  cats.forEach((cat) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');

    const img = document.createElement('img');
    img.src = cat.url;

    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    const like = createReaction('👍');
    const dislike = createReaction('👎');

    overlay.appendChild(like.element);
    overlay.appendChild(dislike.element);

    imgContainer.appendChild(img);
    imgContainer.appendChild(overlay);
    card.appendChild(imgContainer);
    gallery.appendChild(card);

  });
  console.log(response);
}
function createReaction(icon) {
    let count = 0;

    const span = document.createElement('span');
    span.classList.add('reaction');

    const iconEl = document.createElement('span');
    iconEl.textContent = icon;

    const counter = document.createElement('span');
    counter.textContent = count;

    span.appendChild(iconEl);
    span.appendChild(counter);

    span.addEventListener('click', () => {
        count++;
        counter.textContent = count;
    });

    return { element: span };
}
loadGallery();
