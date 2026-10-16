<<<<<<< HEAD

var selectedProduct = null


var products = [
  {
    name: "Homemade Chakli",
    price: 150,
    description:
      "Crispy, golden-brown traditional Indian spiral snacks, perfect for tea-time and festive celebrations.",
    image:
      "./img/Homemade Chakli.png",
  },
  {
    name: "Homemade Papad",
    price: 100,
    description: "Traditional Indian papad made for a crunchy, delicious accompaniment to everyday meals. Easy to roast or fry before serving.",
    image:
      "./img/Homemade Papad.jpeg",
  },
  {
    name: "Milk Masala",
    price: 80,
    description:
      "A flavourful blend of aromatic spices and nuts that adds a rich taste and delightful aroma to milk and desserts.",
    image:
      "./img/Milk Masala.jpg",
  },
  {
    name: "Decorative Welcome Rangoli",
    price: 300,
    description:
      "Beautiful handmade floral decorations with vibrant colours, ideal for welcoming guests during festivals and special occasions.",
    image:
      "./img/Decorative Welcome Rangoli.jpeg",
  },
  {
    name: "Woolen Chorang Mat Rangoli",
    price: 599,
    description:
      "Beautiful handmade woolen rangoli mat featuring a traditional Swastik design, vibrant colours, and decorative fringes. Perfect for puja rooms, festivals, Diwali, and home decoration.",
    image:
      "./img/Woolen Chorang Mat Rangoli.jpeg",
  },
  {
    name: "Handmade Floral Rangoli Mats",
    price: 400,
    description:
      "Colourful, reusable floral mats that bring a traditional and elegant touch to your home entrance and festive decor.",
    image:
      "./img/Handmade Floral Rangoli Mats.jpeg",
  },
]






=======
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

>>>>>>> 5d686b9a95a69481b952939e58cd43e0bd551251
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
<<<<<<< HEAD
  selectedProduct = product
=======
>>>>>>> 5d686b9a95a69481b952939e58cd43e0bd551251

  document.getElementById("detail-image").src = product.image
  document.getElementById("detail-name").innerText = product.name
  document.getElementById("detail-description").innerText = product.description
<<<<<<< HEAD
  document.getElementById("detail-price").innerText = "₹" + product.price
=======
  document.getElementById("detail-price").innerText = product.price
>>>>>>> 5d686b9a95a69481b952939e58cd43e0bd551251
  document.getElementById("quantity").value = 1

  showPage("product-page")
}

<<<<<<< HEAD








function buyNow() {
  var quantity = Number(document.getElementById("quantity").value)

  if (quantity < 1) {
    alert("Please enter a valid quantity.")
    return
  }

  var total = selectedProduct.price * quantity

  alert(
    "Order placed successfully!\n\n" +
      quantity +
      " x " +
      selectedProduct.name +
      "\nTotal: ₹" +
      total,
  )
=======
function buyNow() {
  var name = document.getElementById("detail-name").innerText
  var quantity = document.getElementById("quantity").value

  if (quantity < 1) {
    alert("Please enter a valid quantity.")
  } else {
    alert("Order placed for " + quantity + " x " + name + ". Thank you!")
  }
>>>>>>> 5d686b9a95a69481b952939e58cd43e0bd551251
}
