



const tutorialsPage = document.getElementById("tutorials-page") // Added tutorials page element
const connectBtn = document.getElementById("connect-btn")
const backBtn = document.getElementById("back-btn")
const loginForm = document.getElementById("login-form")
const learnMoreBtn = document.getElementById("learn-more-btn")
const forgotPasswordBtn = document.getElementById("forgot-password")
const createAccountBtn = document.getElementById("create-account")
const homeBtn = document.getElementById("home-btn")
const connectionBtn = document.getElementById("connection-btn")
const startBtn = document.getElementById("start-btn")
const profileBtn = document.getElementById("profile-btn")
const profileBackBtn = document.getElementById("profile-back-btn")


let currentCareerIndex = 0
const careers = ["tech", "design", "marketing"]

function showCareer(index) {
  const careerItems = document.querySelectorAll(".career-item")
  careerItems.forEach((item, i) => {
    if (i === index) {
      item.classList.add("active")
    } else {
      item.classList.remove("active")
    }
  })
}

function nextCareer() {
  currentCareerIndex = (currentCareerIndex + 1) % careers.length
  showCareer(currentCareerIndex)
}

function prevCareer() {
  currentCareerIndex = (currentCareerIndex - 1 + careers.length) % careers.length
  showCareer(currentCareerIndex)
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("[v0] DOM loaded, setting up event listeners")

  // Event listeners with null checks
  if (connectBtn) {
    connectBtn.addEventListener("click", () => {
      console.log("[v0] Connect button clicked")
      showLoginPage()
    })
  }

  if (backBtn) {
    backBtn.addEventListener("click", () => {
      showLandingPage()
    })
  }
  const careersPrevBtn = document.getElementById("careers-prev")
  if (careersPrevBtn) {
    careersPrevBtn.addEventListener("click", () => {
      console.log("[v0] Careers previous button clicked")
      prevCareer()
    })
  }

  const careersNextBtn = document.getElementById("careers-next")
  if (careersNextBtn) {
    careersNextBtn.addEventListener("click", () => {
      console.log("[v0] Careers next button clicked")
      nextCareer()
    })
  }
})
