function renderPhotos(photos) {
    photos.forEach((img) => {
      const imgElement = document.createElement("img");
      imgElement.setAttribute("src", img.thumbnailUrl);
      document.getElementById("output").appendChild(imgElement);
    });
  }
  
  async function getPhotos() {
    const data = await fetch('https://jsonplaceholder.typicode.com/photos');
    const result = await data.json();
    renderPhotos(result);
  }
  
  async function start() {
    await getPhotos();
  }
  
  start();  