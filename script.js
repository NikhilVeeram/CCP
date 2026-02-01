// DARK MODE TOGGLE (saves preference in localStorage)
function toggleDarkMode() {
    const isDark = document.body.classList.toggle("dark-mode");
    localStorage.setItem("dark-mode", isDark);
  }
  
  // SURVIVAL DATA FOR TOGGLE TIMELINE
  const survivalData = {
    noTreatment: [
      { age: "0–14", rate: "10–20%" },
      { age: "15–19", rate: "15–25%" },
      { age: "20–29", rate: "25–30%" },
      { age: "30–39", rate: "20–25%" },
      { age: "40–59", rate: "10–15%" },
      { age: "60–69", rate: "<10%" },
      { age: "70–85+", rate: "<5%" }
    ],
    treatment: [
      { age: "0–14", rate: "90–95%" },
      { age: "15–19", rate: "80–85%" },
      { age: "20–29", rate: "65–75%" },
      { age: "30–39", rate: "55–65%" },
      { age: "40–59", rate: "40–50%" },
      { age: "60–69", rate: "25–35%" },
      { age: "70–85+", rate: "10–20%" }
    ]
  };
  
  // FUNCTION TO UPDATE TIMELINE CARDS
  function updateTimeline() {
    const isTreatment = document.getElementById("treatmentToggle").checked;
    const data = isTreatment ? survivalData.treatment : survivalData.noTreatment;
    const container = document.getElementById("timeline-dynamic");
    container.innerHTML = ""; // Clear previous entries
  
    data.forEach((item, index) => {
      const step = document.createElement("div");
      step.className = "timeline-step";
  
      // Highlight the last box differently
      if (index === data.length - 1) {
        step.style.background = "linear-gradient(to bottom right, #ffebee, #ffcdd2)";
        step.style.border = "2px solid #e53935";
        step.style.fontWeight = "bold";
      }
  
      step.innerHTML = `<span>${item.age}</span><p>${item.rate}</p>`;
      container.appendChild(step);
    });
  }
  
  // ON PAGE LOAD
  window.onload = function () {
    // Apply dark mode if stored
    if (localStorage.getItem("dark-mode") === "true") {
      document.body.classList.add("dark-mode");
    }
  
    // Initialize timeline if it exists
    const timelineToggle = document.getElementById("treatmentToggle");
    const timelineContainer = document.getElementById("timeline-dynamic");
    if (timelineToggle && timelineContainer) {
      updateTimeline();
    }
  };
  