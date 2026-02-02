// =======================
// REGISTER FUNCTION
// =======================
// =======================
// REGISTER FUNCTION
// =======================
function register() {
  let name = document.getElementById("regName").value;
  let email = document.getElementById("regEmail").value;
  let password = document.getElementById("regPassword").value;

  if (!name || !email || !password) {
    alert("Please fill all fields");
    return;
  }

  localStorage.setItem("userName", name);
  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPassword", password);

  alert("Registration successful!");
  window.location.href = "login.html"; // ✅ correct
}


// =======================
// LOGIN FUNCTION
// =======================
function login() {
  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;

  // ✅ get correct keys
  let savedEmail = localStorage.getItem("userEmail");
  let savedPassword = localStorage.getItem("userPassword");

  if (!email || !password) {
    alert("Please fill all fields");
    return;
  }

  if (email === savedEmail && password === savedPassword) {
    localStorage.setItem("isLoggedIn", "true"); // login flag
    alert("Login Successful!");
    window.location.href = "home.html";
  } else {
    alert("Invalid Email or Password");
  }
}
function continueAsGuest() {
  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("userName", "Guest");
  window.location.href = "home.html";
}


// =======================
// GO TO BOOKING PAGE
// =======================
function goBooking(place) {
  localStorage.setItem("place", place);
  window.location.href = "booking.html";
}

// =======================
// SHOW PLACE NAME
// =======================
if (document.getElementById("placeName")) {
  let place = localStorage.getItem("place");
  document.getElementById("placeName").innerText =
    "Booking for: " + place;
}

// =======================
// CONFIRM BOOKING
// =======================
function confirmBooking() {
  let name = document.getElementById("custName").value;
  let email = document.getElementById("custEmail").value;
  let date = document.getElementById("travelDate").value;
  let persons = document.getElementById("persons").value;

  if (name === "" || email === "" || date === "" || persons === "") {
    alert("Please fill all booking details");
    return;
  }

  localStorage.setItem("b_name", name);
  localStorage.setItem("b_email", email);
  localStorage.setItem("b_date", date);
  localStorage.setItem("b_persons", persons);

  window.location.href = "confirmation.html";
}

// =======================
// SHOW CONFIRMATION
// =======================
if (document.getElementById("confirmDetails")) {
  let place = localStorage.getItem("place");
  let name = localStorage.getItem("b_name");
  let email = localStorage.getItem("b_email");
  let date = localStorage.getItem("b_date");
  let persons = localStorage.getItem("b_persons");

  document.getElementById("confirmDetails").innerHTML = `
    <strong>Place:</strong> ${place}<br>
    <strong>Name:</strong> ${name}<br>
    <strong>Email:</strong> ${email}<br>
    <strong>Date:</strong> ${date}<br>
    <strong>Persons:</strong> ${persons}
  `;
}

// =======================
// BACK & HOME
// =======================
function goBack() {
  window.history.back();
}

function goHome() {
  window.location.href = "home.html";
}
// =======================
// SLIDER IMAGES
// =======================
const slideImages = [
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
];

const slidesDiv = document.getElementById("slides");
if (slidesDiv) {
  slideImages.forEach(img => {
    const image = document.createElement("img");
    image.src = img;
    slidesDiv.appendChild(image);
  });
}

// =======================
// GALLERY IMAGES (DYNAMIC)
// =======================
const places = [
  "Goa","Manali","Kerala","Delhi","Ooty",
  "Jaipur","Agra","Kashmir","Ladakh","Udaipur",
  "Mumbai","Bangalore","Hyderabad","Chennai","Pondicherry"
];

const gallery = document.getElementById("galleryGrid");

if (gallery) {
  places.forEach((place, index) => {
    const img = document.createElement("img");
    img.src = `https://picsum.photos/300/200?random=${index+1}`;
    img.alt = place;

    img.onclick = () => {
      localStorage.setItem("place", place);
      window.location.href = "booking.html";
    };

    gallery.appendChild(img);
  });
}

function confirmLogout() {
  let confirmBox = confirm("Are you sure you want to logout?");

  if (confirmBox) {
    // user clicked OK
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userName");
    window.location.href = "login.html";
  } 
  // else: user clicked Cancel → do nothing
}



