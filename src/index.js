console.log('%c HI', 'color: firebrick')


document.addEventListener('DOMContentLoaded', function() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const breedUrl = "https://dog.ceo/api/breeds/list/all";
  const selectFilter = document.getElementById('breed-dropdown')
  const breedList = document.getElementById('dog-breeds')
  const dogs = breedList.getElementsByTagName('LI')


  fetch(imgUrl)
    .then(response => response.json())
    .then(json => addImage(json.message));

  fetch(breedUrl)
    .then(response => response.json())
    .then(json => addBreed(json.message) );

    selectFilter.addEventListener('change', function(event) {

      displayFilterList(event.target.value);
    })

    function addBreed(breedInfo) {

      for (key in breedInfo) {
        let listItem = document.createElement('LI');
        listItem.innerHTML = key;
        breedList.append(listItem);
        listItem.addEventListener('click', function(event) {

          if (event.target) {
            event.target.style.color = randomColor();
          }
        })
      }
    }

    function displayFilterList(letter) {
      for (var i = 0; i < dogs.length; i++) {
        var breedName = dogs[i].innerHTML;
        console.log(breedName);
        if (breedName[0] !== letter) {
          (dogs[i]).style.visibility = 'hidden'
        }
      }

    }


})

function addImage(picture) {
  let container = document.getElementById('dog-image-container');
  picture.forEach(function(picURL) {
    let makeImg = document.createElement('img');
    makeImg.src = picURL;
    container.append(makeImg);
  })
}

function randomColor() {
  return 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
}

function randomNum() {
  return Math.floor(Math.random() * 256)
}


// console.log('%c HI', 'color: firebrick')
//
//
// document.addEventListener('DOMContentLoaded', function() {
//   const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
//   const breedUrl = "https://dog.ceo/api/breeds/list/all";
//   let breedList = document.getElementById('dog-breeds')
//
//
//   fetch(imgUrl)
//     .then(response => response.json())
//     .then(json => addImage(json.message));
//
//   fetch(breedUrl)
//     .then(response => response.json())
//     .then(json => addBreed(json.message) );
//
//
//     let selectFilter = document.getElementById('breed-dropdown')
//     selectFilter.addEventListener('change', function(event) {
//       var letter = event.target.value
//       displayFilterList(letter)
//       event.target.value
//     })
//
// })
//
// function addImage(picture) {
//   let container = document.getElementById('dog-image-container');
//   picture.forEach(function(picURL) {
//     let makeImg = document.createElement('img');
//     makeImg.src = picURL;
//     container.append(makeImg);
//   })
// }
//
//   function addBreed(breedInfo) {
//     let ulContainer = document.getElementById('dog-breeds');
//     for (key in breedInfo) {
//       let listItem = document.createElement('LI');
//       listItem.innerHTML = key;
//       ulContainer.append(listItem);
//       listItem.addEventListener('click', function(event) {
//
//         if (event.target) {
//           event.target.style.color = randomColor();
//         }
//       })
//     }
//   }
//


// ## Challenge 4
//
// Once we are able to load _all_ of the dog breeds onto the page, add javascript so that the user can filter breeds that start with a particular letter using a dropdown.
//
// For example, if the user selects 'a' in the dropdown, only show the breeds with names that start with the letter a. For simplicity, the dropdown only includes the letters a-d. However, we can imagine expanding this to include the entire alphabet
