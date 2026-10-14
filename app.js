var products = [
  {
    name: "Fresh Bread",
    price: "$12",
    description: "Freshly baked bread made with simple ingredients.",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Natural Honey",
    price: "$18",
    description: "Pure natural honey collected from local beekeepers.",
    image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Olive Oil",
    price: "$28",
    description: "Fresh extra virgin olive oil for everyday cooking.",
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Clay Bowl",
    price: "$46",
    description: "A handmade clay bowl created by a local craftsperson.",
    image:
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Woven Basket",
    price: "$35",
    description: "A strong handwoven basket for shopping or home storage.",
    image:
      "https://images.unsplash.com/photo-1590739225287-bd31519780c3?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Ceramic Cup",
    price: "$24",
    description: "A simple ceramic cup shaped and painted by hand.",
    image:
      "https://images.unsplash.com/photo-1727124443494-32e9275dd8fa?auto=format&fit=crop&w=800&q=80",
  },
]

function showPage(pageId) {
  var pages = document.getElementsByClassName("page")

  for (var i = 0; i < pages.length; i++) {
    pages[i].classList.remove("active")
  }

  if (pageId === "about-section") {
    document.getElementById("home-page").classList.add("active")
    document.getElementById("about-section").scrollIntoView()
  } else {
    document.getElementById(pageId).classList.add("active")
    window.scrollTo(0, 0)
  }
}

function login() {
  var username = document.getElementById("username").value
  var password = document.getElementById("password").value

  if (username === "" || password === "") {
    alert("Please enter your username and password.")
  } else {
    alert("Login successful. Welcome " + username + "!")
    showPage("home-page")
  }
}

function logout() {
  alert("You have logged out.")
  showPage("login-page")
}

function showProduct(productNumber) {
  var product = products[productNumber]

  document.getElementById("detail-image").src = product.image
  document.getElementById("detail-name").innerText = product.name
  document.getElementById("detail-description").innerText = product.description
  document.getElementById("detail-price").innerText = product.price
  document.getElementById("quantity").value = 1

  showPage("product-page")
}

function buyNow() {
  var name = document.getElementById("detail-name").innerText
  var quantity = document.getElementById("quantity").value

  if (quantity < 1) {
    alert("Please enter a valid quantity.")
  } else {
    alert("Order placed for " + quantity + " x " + name + ". Thank you!")
  }
}
