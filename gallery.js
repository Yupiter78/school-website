const box = document.querySelector("#custom_box");
const galleryContent = [
    {
        path: "./images/image-18-10-23-09-09-7.jpeg",
        title: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda deleniti dolore ea facilis
        harum, hic magnam maiores minima nam necessitatibus neque numquam obcaecati optio quae quod quos, saepe,
        sed?`
    },
    {
        path: "./images/image-18-10-23-09-09-7.jpeg",
        title: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda deleniti dolore ea facilis
        harum, hic magnam maiores minima nam necessitatibus neque numquam obcaecati optio quae quod quos, saepe,
        sed?`
    },
    {
        path: "./images/image-18-10-23-09-09-7.jpeg",
        title: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda deleniti dolore ea facilis
        harum, hic magnam maiores minima nam necessitatibus neque numquam obcaecati optio quae quod quos, saepe,
        sed?`
    },
    {
        path: "./images/image-18-10-23-09-09-7.jpeg",
        title: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda deleniti dolore ea facilis
        harum, hic magnam maiores minima nam necessitatibus neque numquam obcaecati optio quae quod quos, saepe,
        sed?`
    },
    {
        path: "./images/image-18-10-23-09-09-7.jpeg",
        title: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda deleniti dolore ea facilis
        harum, hic magnam maiores minima nam necessitatibus neque numquam obcaecati optio quae quod quos, saepe,
        sed?`
    },
    {
        path: "./images/image-18-10-23-09-09-7.jpeg",
        title: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda deleniti dolore ea facilis
        harum, hic magnam maiores minima nam necessitatibus neque numquam obcaecati optio quae quod quos, saepe,
        sed?`
    },
    {
        path: "./images/image-18-10-23-09-09-7.jpeg",
        title: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda deleniti dolore ea facilis
        harum, hic magnam maiores minima nam necessitatibus neque numquam obcaecati optio quae quod quos, saepe,
        sed?`
    },
    {
        path: "./images/image-18-10-23-09-09-7.jpeg",
        title: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda deleniti dolore ea facilis
        harum, hic magnam maiores minima nam necessitatibus neque numquam obcaecati optio quae quod quos, saepe,
        sed?`
    },
    {
        path: "./images/image-18-10-23-09-09-7.jpeg",
        title: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda deleniti dolore ea facilis
        harum, hic magnam maiores minima nam necessitatibus neque numquam obcaecati optio quae quod quos, saepe,
        sed?`
    }
];

const galleryItemTemplates = galleryContent.map(
    (item) =>
        `<div class="col">
      <div class="card shadow-sm">
        <img src=${item.path} width="100%" height="100%" alt="image"/>
        <div class="card-body">
          <p class="card-text">${item.title}</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-primary">Просмотр</button>
              
            </div>
          </div>
        </div>
      </div>
    </div>`
);

box.insertAdjacentHTML("beforeend", galleryItemTemplates.join(""));
