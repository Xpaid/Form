const imageInput = document.getElementById("image");
const previewImage = document.getElementById("preview-image");

imageInput.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.addEventListener("load", function () {
      previewImage.src = reader.result;
      localStorage.setItem("imageData", reader.result);
    });
    reader.readAsDataURL(file);
  } else {
    previewImage.src = "#";
    localStorage.removeItem("imageData");
  }
});
const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const formData = new FormData(form); // Create a FormData object

  // Access form data (modify as needed based on your form fields)
  const fullName = formData.get('full-name');
  const bio = formData.get('bio');
  const address = formData.get('address');
  const gender = formData.get('gender');
  const course = formData.get('course');
  const age = formData.get('age');
  const language = formData.get('language');
  const color = formData.get('color');
  const drinkType = formData.get('drinkType'); // Assuming you choose either "hot" or "cold"
  const food = formData.get('food');
  const pet = formData.get('pet');
  const number = formData.get('number');
  const band = formData.get('band');
  const song = formData.get('song');
  const message = formData.get('message');

  localStorage.setItem('fullName', fullName);
  localStorage.setItem('bio', bio);
  localStorage.setItem('address', address);
  localStorage.setItem('gender', gender);
  localStorage.setItem('course', course);
  localStorage.setItem('age', age);
  localStorage.setItem('language', language);
  localStorage.setItem('color', color);
  localStorage.setItem('drinkType', drinkType);
  localStorage.setItem('food', food);
  localStorage.setItem('pet', pet);
  localStorage.setItem('number', number);
  localStorage.setItem('band', band);
  localStorage.setItem('song', song);
  localStorage.setItem('message', message);  

  window.location.href = 'profile.html';
});



