import { Products } from "./allProduct.js";

const products = Products();
let usersSession = JSON.parse(localStorage.getItem('loggedUsers')) || []; 
const notiLocal = JSON.parse(localStorage.getItem('Notifications')) || [];

const notif = document.getElementById('notification');
const dropNoti = document.getElementById('dropdown-noti');

const profile = document.getElementById('profiles');
const dropProfile = document.getElementById('dropdown-profile');
const logout = document.getElementById('profile-logout');
const profileName = document.getElementById('profileName');

const searchToggle = document.getElementById('searchi');
const navi = document.getElementById('navi');
const searnav = document.getElementById('searnav');
const searchInputs = document.querySelectorAll('.search-input');
const suggestionBoxes = document.querySelectorAll('.suggestions');
const search = document.querySelector('.search');
const searchClose = document.getElementById('searchClose');

const buti = document.getElementById('buti');
const popup = document.getElementById('popup');
const closepopup = document.getElementById('closepopup');
const overlay = document.getElementById('overlay');

const noti = document.getElementById('noti');
const notiBadge = document.getElementById('noti-badge');
const profilenav = document.getElementById('profile-nav');

profilenav.addEventListener('click', () => {
  window.location.href = './received-items.html?page=Profile';
});

// Notifications
if (usersSession.userId && !Array.isArray(usersSession)) {
  usersSession = [usersSession]; 
}
let userId = usersSession[0]?.userId;

const usersNoti = notiLocal.filter(notis => notis.user === userId);
console.log(usersNoti);

if (usersNoti) {
  usersNoti.forEach(notifi => {
    noti.innerHTML += `<p>${notifi.message}</p>`;

  });

} 

if (usersNoti.length === 0) {
  notiBadge.textContent = 1;
} else {
  notiBadge.textContent = usersNoti.length + 1;
}

// profile Founder
buti.addEventListener('click', () => {
  popup.style.display = 'flex';
  overlay.style.display = 'flex';
  dropNoti.style.display = 'none';
  dropProfile.style.display = 'none';
});
closepopup.addEventListener('click', () => {
  popup.style.display = 'none';
  overlay.style.display = 'none';
});


// search style
searchToggle.addEventListener('click', () => {
  navi.style.display = "none";
  searnav.style.display = "flex";
  search.style.display = "flex"
  searchInputs.forEach(input => input.style.display = "flex");
});
searchClose.addEventListener('click', () => {
  navi.style.display = "flex";
  searnav.style.display = "none";
  search.style.display = "none";
});

// Attach input listeners
searchInputs.forEach((input, index) => {
  const suggestionsBox = suggestionBoxes[index];

  input.addEventListener("input", () => {
    const query = input.value.toLowerCase();
    suggestionsBox.innerHTML = "";

    if (query.length === 0) return;

    const filtered = products.filter(p =>
      p.name.toLowerCase().includes(query)
    );

    filtered.forEach(product => {
      const li = document.createElement("li");
      li.textContent = product.name;
      li.style.cursor = "pointer";
      li.addEventListener("click", () => {
        window.location.href = `/category-page.html?product=${product.name}`;
      });
      suggestionsBox.appendChild(li);
    });
  });
});


notif.addEventListener('click',() => {
    if (dropNoti.style.display === 'none') {
        dropNoti.style.display = 'block';
        dropProfile.style.display = 'none';

    } else {
        dropNoti.style.display = 'none';
    }
});

profile.addEventListener('click', () => {

    if (dropProfile.style.display === 'none') {
        dropProfile.style.display = 'block';
        dropNoti.style.display = 'none';

    } else {
           dropProfile.style.display = 'none';
           
    }
});

const loggedUser = JSON.parse(localStorage.getItem('loggedUsers'));
console.log("Logged User:")
console.log(loggedUser); 
logout.addEventListener('click', () => {
    localStorage.removeItem('loggedUsers');
    localStorage.removeItem('currentUserId');

    window.location.href = './index.html'
});

console.log("Selected:\n"+localStorage.getItem('selectedProduct'));
console.log('Notifications: ')
console.log(notiLocal);

