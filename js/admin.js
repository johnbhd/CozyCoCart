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
            <td>${user.contact || 'N/A'}</td>
            <td>${user.address || 'N/A'}</td>
            <td>${user.money || '₱0'}</td>
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

populateUserTable();

function populateOrderTable() {
    const orderTableBody = document.getElementById('orderTableBody');
    if (order.length > 0) {
      orderTableBody.innerHTML = ''; // Clear table content before populating
      order.forEach((orderItem, index) => {
        const row = `
          <tr>
            <td>${index + 1}</td>
            <td>${orderItem.orderId || 'N/A'}</td>
            <td>${orderItem.nameOrder || 'N/A'}</td>
            <td>${orderItem.sizeOrder || 'N/A'}</td>
            <td>${orderItem.colorOrder || 'N/A'}</td>
            <td>${orderItem.quantityOrder || 0}</td>
            <td>${orderItem.totalPrice || '₱0'}</td>
            <td>${orderItem.paymentMethod || '₱0'}</td>
            <td>
              <select onchange="updateOrderStatus(${index}, this.value)">
                <option value="Pending" ${orderItem.status === 'Pending' ? 'selected' : ''}>Pending</option>
                <option value="Shipped" ${orderItem.status === 'Shipped' ? 'selected' : ''}>Shipped</option>
                <option value="Delivered" ${orderItem.status === 'Delivered' ? 'selected' : ''}>Delivered</option>
                <option value="Cancelled" ${orderItem.status === 'Cancelled' ? 'selected' : ''}>Cancelled</option>
              </select>
            </td>
          </tr>
        `;
        orderTableBody.innerHTML += row;
      });
    } else {
      const row = `
        <tr>
          <td colspan="9">No orders found.</td>
        </tr>
      `;
      orderTableBody.innerHTML = row;
    }
  }
  /*
  function updateOrderStatus(index, newStatus) {
    let order = JSON.parse(localStorage.getItem('userOrder')) || []; // Re-fetch orders from localStorage
    
    if (order[index]) {
      order[index].status = newStatus;  // Update the order status
      localStorage.setItem('userOrder', JSON.stringify(order)); // Save the updated order back to localStorage
      console.log(`Order ${order[index].orderId} status updated to ${newStatus}`); // Log after update
      
      populateOrderTable(); // Re-render the table after updating the status
    } else {
      console.error(`Order at index ${index} not found.`);
    }
  }
  */
populateOrderTable();
  