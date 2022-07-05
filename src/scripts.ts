const navItems = ['Home', 'Events', 'About', 'Blog', 'Contact'];
const navLinks = ['#', '#promotional-tour', '#our-team', '#news', '#customers']
const navElement = document.querySelector<HTMLElement>('.JS-NAV');

const generateNavItems = () => {
  for (let i = 0; i < navItems.length; i++) {
    const a = document.createElement('a');
    a.innerHTML = navItems[i];
    a.href = navLinks[i];
    navElement.appendChild(a).classList.add('navigation__item');
  };
};

generateNavItems();

// ========== //

const toastElement = document.querySelector<HTMLDivElement>('.JS-TOAST');
const toastButton = document.querySelector<HTMLButtonElement>('.JS-SHOW-TOAST');

toastButton.addEventListener('click', () => {
  toastElement.classList.add('show-toast');
  setTimeout(() => {
    toastElement.classList.remove('show-toast');
  }, 3000);
});

// ========== //

const leftArrow = document.querySelector<HTMLButtonElement>('.JS-ARROW-LEFT');
const rightArrow = document.querySelector<HTMLButtonElement>('.JS-ARROW-RIGHT');
const slideElements = document.querySelectorAll<HTMLButtonElement>('.slide');
const slideCount = slideElements.length - 1;
let currentSlideIndex = 0;

const toggleHiddenSlides = () => {
  slideElements.forEach((slideElement: Element, index: number) => {
    if (currentSlideIndex === index) {
      slideElement.classList.remove('hidden');
    } else {
      slideElement.classList.add('hidden');
    }
  });
};

leftArrow.addEventListener('click', () => {
  const isLastSlide = slideCount === currentSlideIndex;
  
  if (!isLastSlide) {
    currentSlideIndex += 1;
    toggleHiddenSlides();
  } else {
    currentSlideIndex = 0;
    toggleHiddenSlides();
  }
});

rightArrow.addEventListener('click', () => {
  const isFirstSlide = currentSlideIndex === 0;
  
  if (isFirstSlide) {
    currentSlideIndex = slideCount;
    toggleHiddenSlides();
  } else {
    currentSlideIndex -= 1;
    toggleHiddenSlides();
  }
});


// ========== //

const inputElement = document.querySelector<HTMLInputElement>('.JS-INPUT');
const buttonElement = document.querySelector<HTMLButtonElement>('.JS-BUTTON');
const listElement = document.querySelector<HTMLUListElement>('.JS-LIST');
const formElement = document.querySelector<HTMLFormElement>('.JS-FORM');
const backgroundElement = document.querySelector<HTMLDivElement>('.JS-BACKGROUND');

const listItems = document.querySelectorAll<HTMLLIElement>('.JS-LIST-ITEM')

// Kāpēc tad, ja izmantoju bacgroundColor HEX, tad random IFs vairāk nestrādā kā nākas?
const changeColor = inputElement.addEventListener('input', () => {
  const colors = ['#ee5060', '#95a15d', '#af6b2c', '#3cafed'];
  const random = Math.floor(Math.random() * colors.length);
  if (backgroundElement.style.backgroundColor === colors[random]) {
    backgroundElement.style.backgroundColor = '#d59a96';
  } else {
    backgroundElement.style.backgroundColor = colors[random];
  }
});

buttonElement.addEventListener('click', () => {
  const inputValue = inputElement.value;
  const list = document.createElement('li');
  list.innerText = inputValue;
  listElement.appendChild(list);
  list.classList.add('JS-LIST-ITEM');
  // ??? listItems.push(list);
  inputElement.value = '';
  backgroundElement.style.backgroundColor = '#7F2736';
});

// ..., taču šis noņem aizrādījumu, ka INPUT laukā jāievada e-pasts.
formElement.addEventListener('submit', (event: any) => {
  event.preventDefault();
});

// ========== //

// DONE //
listItems.forEach((listItem) => {
  listItem.addEventListener('click', () => {
    listItem.classList.toggle('done');
  });
});
