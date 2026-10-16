
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
  selectedProduct = product

  document.getElementById("detail-image").src = product.image
  document.getElementById("detail-name").innerText = product.name
  document.getElementById("detail-description").innerText = product.description
  document.getElementById("detail-price").innerText = "₹" + product.price
  document.getElementById("quantity").value = 1

  showPage("product-page")
}









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
}
