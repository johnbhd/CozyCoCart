import { Products } from "./allProduct.js";

const products = Products();

const logout = document.querySelector('.logout-link');
const userData = document.getElementById('userData');
const OrderData = document.getElementById('OrderData');
const productData = document.getElementById('productData');
const requestData = document.getElementById('requestData');

const users = JSON.parse(localStorage.getItem('users')) || [];
const order = JSON.parse(localStorage.getItem('userOrder')) || [];

const productLength = products.reduce((prev, current) => (prev.id > current.id ? prev : current));
const orderTableBody = document.getElementById('orderTableBody');

let userOrders = {};
if (Array.isArray(order)) {
  userOrders = order;
}

console.log(order);
logout.addEventListener('click', () => {
    localStorage.removeItem('loggedUsers');
    localStorage.removeItem('currentUserId');

    window.location.href = './index.html'
});

function dataInsight() {
    userData.textContent = users.length || 0;
    OrderData.textContent = order.length || 0;
    productData.textContent = productLength.id || 0; // Show only the product ID
    //requestDat    a.textContent = order.length || 0;
}
dataInsight();


// USERS
const userTableBody = document.getElementById('userTableBody');

function populateUserTable() {
    if (users.length > 0) {
      users.forEach((user, index) => {
        const row = `
          <tr>
            <td>${index + 1}</td> <!-- Loop counter for numbering -->
            <td>${user.userId || 'N/A'}</td>
            <td>${user.username || 'N/A'}</td>
            <td>${user.email || 'N/A'}</td>
            <td>₱${user.money}</td>
            <td>${user.fullName || 'N/A'}</td>
            <td>${user.contact || 'N/A'}</td>
            <td>${user.address || 'N/A'}</td>
          </tr>
        `;
        userTableBody.innerHTML += row;
      });
    } else {
      const row = `
        <tr>
          <td colspan="7">No users found.</td>
        </tr>
      `;
      userTableBody.innerHTML = row;
    }
  }
  
  function populateOrderTable() {
    let ordersSort = order.sort((a, b) => b.orderId - a.orderId);
    if (order.length > 0) {
      orderTableBody.innerHTML = ''; // Clear table content before populating
      
      ordersSort.forEach((orderItem, index) => {
        // 🛠 Build options for each orderItem
        let optionsHTML = '';
  
        if (orderItem.status === '🛒 Order Placed') {
          optionsHTML = `
            <option value="⚙️ Processing">⚙️ Processing</option>
            <option value="🚚 Shipped">🚚 Shipped</option>
            <option value="📦 Delivered">📦 Delivered</option>
          `;
        } else if (orderItem.status === '⚙️ Processing') {
          optionsHTML = `
            <option value="🚚 Shipped">🚚 Shipped</option>
            <option value="📦 Delivered">📦 Delivered</option>
          `;
        } else if (orderItem.status === '🚚 Shipped') {
          optionsHTML = `
            <option value="📦 Delivered">📦 Delivered</option>
          `;
        } else if (orderItem.status === '📦 Delivered') {
          optionsHTML = `
            <option disabled>No further actions</option>
          `;
        }
  
        const row = `
          <tr id="dataRow" data-index="${index}">
            <td>${index + 1}</td>
            <td>${orderItem.orderId || 'N/A'}</td>
            <td>${orderItem.nameOrder || 'N/A'}</td>
            <td>${orderItem.sizeOrder || 'N/A'}</td>
            <td>${orderItem.colorOrder || 'N/A'}</td>
            <td>${orderItem.quantityOrder || 0}</td>
            <td>₱ ${orderItem.totalPrice || '₱0'}</td>
            <td>${orderItem.paymentMethod || 'N/A'}</td>
            <td>
              <select class="statusOrder">
                <option disabled selected>${orderItem.status || 'N/A'}</option>
                ${optionsHTML}
              </select>
            </td>

            <td><button class="updateOrder">Update</button></td>
          </tr>
        `;
  
        orderTableBody.innerHTML += row;
      });
  
    } else {
      const row = `
        <tr>
          <td colspan="11">No orders found.</td>
        </tr>
      `;
      orderTableBody.innerHTML = row;
    }
  }
  
   
    
  orderTableBody.addEventListener('click', (e) => {
    const row = e.target.closest("tr");
    const index = row.dataset.index;

    if (e.target.classList.contains('updateOrder')) {
      updateOrder(row, index);
    }
  });
  function updateOrder(row, index) {
    const storedNotifications = JSON.parse(localStorage.getItem('Notifications')) || [];

    let notifi = storedNotifications; 

    const statusSelector = row.querySelector('.statusOrder');
    const newStatus = statusSelector.value;
    
    order[index].status = newStatus;
    
    const notificationMessage = `🛍️ The status of your order for ${order[index].nameOrder} has been updated to "${newStatus}".`;

    notifi.push({
      message: notificationMessage,
      timestamp: new Date().toString(),
      user: order[index].orderId 
    });
    
    localStorage.setItem('userOrder', JSON.stringify(order));
    localStorage.setItem('Notifications', JSON.stringify(notifi));
    alert('Order status updated!');
    location.reload();
  }

    function ProductAll(filteredProducts = products) {
      const productdivall = document.getElementById('productAll')
      productdivall.innerHTML = '';

      filteredProducts.forEach(product => {
        productdivall.innerHTML += `
    
    <tr>
      <td>${product.id}</td>
      <td><img src="${product.img}" alt="${product.name}" width="60"></td>
      <td>${product.name}</td>
      <td>${product.category}</td>
      <td>${product.rating}</td>
      <td>${product.sold}</td>
      <td>
        <select>
          ${product.colors.map(color => `<option value="${color.name}">${color.name}</option>`).join('')}
        </select>
      </td>
      <td>
        <select>
          ${product.sizes.map(size => `<option value="${size}">${size}</option>`).join('')}
        </select>
      </td>
      <td>₱${product.price}</td>
      <td>${product.comments.length}</td>
    </tr>

        `;
      });
    }

    function filterSort() {
      const sortOrder = document.getElementById('sortOrder').value;
      const filterCategory = document.getElementById('filterCategory').value;

      let filteredProduct = [...products];

      if (filterCategory !== "all") {
        filteredProduct = filteredProduct.filter(prod => prod.category == filterCategory);
      }

      filteredProduct.sort((a, b) => {
        if (sortOrder === 'asc') {
          return a.id - b.id;
        } else {
          return b.id - a.id;
        }
      });
      ProductAll(filteredProduct);

    }

    document.getElementById('sortOrder').addEventListener('change', filterSort);
    document.getElementById('filterCategory').addEventListener('change', filterSort);
  populateUserTable();
  populateOrderTable();
  ProductAll();
    