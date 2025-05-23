
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
  document.querySelectorAll('.rows').forEach(btn => btn.classList.remove('current'));
  element.classList.add('current');

  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('current'));
  document.getElementById(id).classList.add('current');

  const headerDiv = document.querySelector('.headerOrder');
  headerDiv.innerHTML = '';

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
  const urlParams = new URLSearchParams(window.location.search);
  const page = urlParams.get('page') || 'orders';
  const defaultSection = document.querySelector(`.rows a[href="?page=${page}"]`);
  
  if (defaultSection) {
    showSection(page, defaultSection);
  }
});
