document.addEventListener("DOMContentLoaded", function () {

  // ---------------------------
  // LOGIN PAGE LOGIC
  // ---------------------------
  const loginForm = document.getElementById("loginForm");
  const newUserBtn = document.getElementById("newUserBtn");
  const viewBackArr = document.getElementById("view-back");
  const mainBackArr = document.getElementById("main-back");
 // Select all "View" buttons
  const viewButtons = document.querySelectorAll(".view-btn");

  if (loginForm) {   // Only runs on Login page
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.getElementById("email").value.trim();
      const pass = document.getElementById("password").value.trim();

      if (!email || !pass) {
        alert("Please fill in all fields.");
        return;
      }

      if (!email.includes("@")) {
        alert("Please enter a valid school email.");
        return;
      }

      alert("Login successful!");
      window.location.href = "../Main Visual/Main.html";
    });
  }
  
   

    // Named function for click handler
    function handleViewClick() {
        // Navigate to desired page
        window.location.href = "../View_packages Visual/View.html";
    }

    // Attach the function to each button
    viewButtons.forEach(function(button) {
        button.addEventListener("click", handleViewClick);
    });

  // Switching pages:
  if (newUserBtn) {
    newUserBtn.addEventListener("click", function () {
      window.location.href = "../Main Visual/Main.html";
    });
  }
  if (viewBackArr){
  viewBackArr.addEventListener("click", function(){
    window.location.href = "../Main Visual/Main.html";
  });
  }
  if (mainBackArr){
  mainBackArr.addEventListener("click", function(){
    window.location.href = "../Login Visual/Login.html";
  });
  }
  // ---------------------------
  // MAIN PAGE LOGIC
  // ---------------------------

  // Package list rendering
  const container = document.querySelector(".packages-list");

  if (container) {   // Only runs on Main page
    const packages = [
      { name: "Item 1", price: 0 },
      { name: "Item 2", price: 0 },
      { name: "Item 3", price: 0 },
      { name: "Item 4", price: 0 }
    ];

    packages.forEach(pkg => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "package-item";
      itemDiv.innerHTML = `
        <div class="red-rectangle"></div>
        <div class="yellow-rectangle"></div>
        <div class="item-text">${pkg.name}<br>$${pkg.price.toFixed(2)}</div>
        <button class="add-btn">Add</button>
        <button class="delete-btn">Delete</button>
      `;
      container.appendChild(itemDiv);
    });
  }

  // Add/Delete buttons (shared)
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("add-btn")) {
      alert("Added " + e.target.parentElement.querySelector(".item-text").innerText);
    }

    if (e.target.classList.contains("delete-btn")) {
      const item = e.target.parentElement;
      item.classList.add("removed");
      setTimeout(() => item.remove(), 200);
    }
  });

  // Search bar
  const searchInput = document.getElementById("searchInput");

  if (searchInput) {
    searchInput.addEventListener("input", function () {
      const query = this.value.toLowerCase();
      const items = document.querySelectorAll(".product-card");

      items.forEach(item => {
        const name = item.querySelector(".item-name").textContent.toLowerCase();
        item.style.display = name.includes(query) ? "block" : "none";
      });
    });
  }

});