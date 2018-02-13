const projectDiv = document.getElementById('projectDiv');
const imgs = document.querySelectorAll('#projectDiv > div > img');

for (let i = 0; i < imgs.length; i++) {
  imgs[i].src = "./img/trees.jpg";
}

