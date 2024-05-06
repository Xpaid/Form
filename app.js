    const image = localStorage.getItem('imageData');
    const fullName = localStorage.getItem('fullName');
    const bio = localStorage.getItem('bio');
    const address = localStorage.getItem('address');
    const gender = localStorage.getItem('gender');
    const course = localStorage.getItem('course');
    const age = localStorage.getItem('age');
    const language = localStorage.getItem('language');
    const color = localStorage.getItem('color');
    const drinkType = localStorage.getItem('drinkType');
    const food = localStorage.getItem('food');
    const pet = localStorage.getItem('pet');
    const number = localStorage.getItem('number');
    const band = localStorage.getItem('band');
    const song = localStorage.getItem('song');
    const message = localStorage.getItem('message');

    // Update elements with retrieved data
    function addImg(name, value) {
        if (value !== null && value !== undefined && value.trim() !== '') {
          const element = document.querySelector(name);
          element.style.backgroundImage = `url(${value})`;
          element.style.backgroundSize = 'cover';
          element.style.backgroundPosition = 'center';
          localStorage.setItem('imageData', null)
        }
      }
      
    function add(name, value) {
        if (value !== null && value !== undefined && value.trim() !== '') {
          document.querySelector(name).textContent = value;
        }
      }
      
      function addWith(name, string, value) {
        if (value !== null && value !== undefined && value.trim() !== '') {
          document.querySelector(name).textContent = string + value;
        }
      }
   addImg('.profile-image', image)
   add('.name', fullName);
   add('.bio', bio);
   add('.address', address);
   add('.gender', gender);
   add('.course', course);
   add('.age', age);
   add('.language', language);
   addWith('.color', 'I like the color ', color);  // Prepend text before calling add
   addWith('.drinktype', 'Drinks that are ', drinkType); // Prepend text before calling add
   addWith('.food', 'I enjoy eating ', food);           // Prepend text before calling add
   addWith('.pet', 'My pet choice is ', pet);             // Prepend text before calling add
   addWith('.number', 'My lucky number is ', number);   // Prepend text before calling add
   addWith('.band', 'The band ', band);                  // Prepend text before calling add
   addWith('.song', 'I like the song ', song);          // Prepend text before calling add
   addWith('.message', 'My message is ', message); 