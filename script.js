//your code here
const divs = document.querySelectorAll('.image');

for (const div of divs) {
  div.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('image', div.id);
  });

  div.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  div.addEventListener('drop', (e) => {
    const imageId = e.dataTransfer.getData('image');
    const div1;
  });
}