const notif = document.getElementById('notification');
const dropNoti = document.getElementById('dropdown-noti');

const profile = document.getElementById('profiles');
const dropProfile = document.getElementById('dropdown-profile');
const logout = document.getElementById('profile-logout');
const profileName = document.getElementById('profileName');

const usersSession = JSON.parse(localStorage.getItem('loggedUsers')) || []; 
//profileName.innerHTML = usersSession.email;

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
console.log(loggedUser); 
logout.addEventListener('click', () => {
    localStorage.removeItem('loggedUsers');
    localStorage.removeItem('currentUserId');

    window.location.href = './index.html'
});

console.log("Selected:\n"+localStorage.getItem('selectedProduct'));
console.log("Order:\n"+localStorage.getItem('userOrder'));


const params = new URLSearchParams(window.location.search);
const page = params.get('page');

if (page) {
  const section = document.getElementById(page);
  if (section) {
    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('current'));
    section.classList.add('current');

    document.querySelectorAll('.rows').forEach(btn => btn.classList.remove('current'));

    document.querySelectorAll('.rows').forEach(btn => {
      if (btn.getAttribute('onclick')?.includes(`'${page}'`)) {
        btn.classList.add('current');
      }
    });
  }
}

function showSection(id, element) {
    // Update navigation styles
    document.querySelectorAll('.rows').forEach(btn => btn.classList.remove('current'));
    element.classList.add('current');

    // Show the correct section
    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('current'));
    document.getElementById(id).classList.add('current');

    // Update the header content
    const headerDiv = document.querySelector('.headerOrder');
    headerDiv.innerHTML = ''; // Clear existing content

    const contentMap = {
      orders: {
        title: "Your Orders",
        desc: "Track your recent purchases, view details, reorder items, or check shipping status."
      },
      cart: {
        title: "Your Cart",
        desc: "Review items added, update quantities, or proceed to checkout when ready."
      },
      wallet: {
        title: "Your Wallet",
        desc: "Manage your balance, track transactions, and fund your purchases securely."
      },
      Profile: {
        title: "Your Profile",
        desc: "Update personal info, change password, and manage your account details."
      }
    };

    if (contentMap[id]) {
      const h2 = document.createElement('h2');
      h2.innerHTML = contentMap[id].title;

      const p = document.createElement('p');
      p.innerHTML = contentMap[id].desc;

      headerDiv.appendChild(h2);
      headerDiv.appendChild(p);
    }
  }
  window.addEventListener('DOMContentLoaded', () => {
    const defaultSection = document.querySelector('.rows.current');
    if (defaultSection) {
      const id = defaultSection.getAttribute('onclick').match(/'(\w+)'/)[1];
      showSection(id, defaultSection);
    }
  });

