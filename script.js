// Array of locations with their respective pixel coordinates
const locations = [
    { iframe: "https://momento360.com/e/u/197c601460234c02a76e5625e0341575?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true", x: 1576, y: 2416 }, //1.1
    { iframe: "https://momento360.com/e/u/d9bce99f38d647ba942c88b420148fdc?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true", x: 1439, y: 2477 },
    { iframe: "https://momento360.com/e/u/b075dac113284b8bb08f207bfe3c2499?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true", x: 1666, y: 2488 },
    { iframe: "https://momento360.com/e/u/977ff0b37bf54caa9bbefc3764cb99be?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true", x: 1728, y: 2637 },
    { iframe: "https://momento360.com/e/u/ac230904690243f2945e02e6a8e5ef1b?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true", x: 1783, y: 2378 },
    { iframe: "https://momento360.com/e/u/b45fa74ee6cb40c5ae9f3ab550a3cd08?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true", x: 1840, y: 2218 },
    { iframe: "https://momento360.com/e/u/94b7e508ef7f431d8f55faf9e38228a3?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true", x: 1638, y: 2342 },
    { iframe: "https://momento360.com/e/u/21c9af84cd5c49779b5a895fbf8fb8d7?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true", x: 1582, y: 2558 },
    { iframe: "https://momento360.com/e/u/aeb2a2799ec34c01be234994095d7e6c?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true", x: 2678, y: 3638 }, //2.1
    { iframe: "https://momento360.com/e/u/1710ab0762b441698d169f1ba2031089?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true", x: 2295, y: 3473 },
    { iframe: "https://momento360.com/e/u/0091217c9c654c68a52deaaba701c20e?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true", x: 2006, y: 3447 },
    { iframe: "https://momento360.com/e/u/fc687c0cc1ce43d78ce63f1f34a632ce?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true", x: 1750, y: 3332 },
    { iframe: "https://momento360.com/e/u/e1a111ff66e149f98077a1eaf2609981?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true", x: 1553, y: 3235 },
    { iframe: "https://momento360.com/e/u/f9aab678beee4fceae5be216c861d66e?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true", x: 1505, y: 2838 },
    { iframe: "https://momento360.com/e/u/84ebc6bd982e45e1a0c4b19ece0b875d?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true", x: 1349, y: 2548 },
    { iframe: "https://momento360.com/e/u/116f9c06ebca44ce8ef353ac14e1c186?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true", x: 2521, y: 3702 }, //3.01
    { iframe: "https://momento360.com/e/u/92da7d3b39d24ddeacc5992dbf70687a?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true", x: 2184, y: 2655 },
    { iframe: "https://momento360.com/e/u/52e5aa2889154bbf86ecc97292e1b623?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true", x: 2127, y: 3143 },
    { iframe: "https://momento360.com/e/u/7ce22a20e9a948439078867d683ab863?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true", x: 1785, y: 3133 },
    { iframe: "https://momento360.com/e/u/9c84ed3866ae4a5d9a96d55fbc1afd27?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true", x: 1655, y: 2828 },
    { iframe: "https://momento360.com/e/u/c0401cdc70664aa89b3ead52131a3af9?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true", x: 1389, y: 2738 },
    { iframe: "https://momento360.com/e/u/1a30897edd75481aab321e7404388ed7?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true", x: 1424, y: 2362 },
    { iframe: "https://momento360.com/e/u/42a8d7893ecf4c5e9e2fb4437b4bc489?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true", x: 1124, y: 2494 },
    { iframe: "https://momento360.com/e/u/cf40e1f1f85f4f30aeee2595fd08744a?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true", x: 1267, y: 2196 },
    { iframe: "https://momento360.com/e/u/f99d7f6f14b349e8b84ecb79bb903549?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true", x: 1336, y: 2549 }, //3.10
    { iframe: "https://momento360.com/e/u/dccb09d769cf4c848d8670fe2f660d26?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true", x: 1207, y: 1934 },
    { iframe: "https://momento360.com/e/u/4f0302302442492fa4d75c3d06f1c02e?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true", x: 966, y: 1630 },
    { iframe: "https://momento360.com/e/u/f90e1df95ccd4d0da042982405dfbc6b?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true", x: 964, y: 1630 },
    { iframe: "https://momento360.com/e/u/83450d7bfb924f94af0ea9d21cdd35a8?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true", x: 1134, y: 1526 },
    { iframe: "https://momento360.com/e/u/d79fb2926c8d4cb18f77efa9d006e9a8?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true", x: 1714, y: 1284 },
    { iframe: "https://momento360.com/e/u/5bd35072fe9445479c2519c5eb8b6673?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true", x: 1747, y: 1292 },
    { iframe: "https://momento360.com/e/u/63ee2894d39b47a7a9b057280aea8a05?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true", x: 1774, y: 1045 },
    { iframe: "https://momento360.com/e/u/e715338ed7854f3e9d2f2403351a087c?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true", x: 1989, y: 377 },
    { iframe: "https://momento360.com/e/u/81673d7e2fae4828a3798d169c8daa0f?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true", x: 1965, y: 125 },
    //{ iframe: "https://momento360.com/e/u/1a63b33090594d91985bde503ec527f9?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true", x: , y:  }, //3.20
    //{ iframe: "https://momento360.com/e/u/d338cc5ce93942aca723d758be93236d?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true", x: , y:  },
    //{ iframe: "https://momento360.com/e/u/0ecb90bc96764b158623317cafbd3280?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true", x: , y:  },
    //{ iframe: "https://momento360.com/e/u/00f7296b1a4b4206bf1565e974b75f6f?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true", x: , y:  },
    { iframe: "https://momento360.com/e/u/bce3ed3343a04ed28956fbfbab71df2f?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true", x: 3641, y: 742 },
    { iframe: "https://momento360.com/e/u/eb68988b39c04f6f918d93f0c8411438?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true", x: 3023, y: 1342 },
    { iframe: "https://momento360.com/e/u/aba5c1775d4142a6a9dab810f65d7a7c?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true", x: 2826, y: 1793 },
    { iframe: "https://momento360.com/e/u/fc750ef2567c4aebaceeb5c8ee445d7f?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true", x: 2528, y: 2109 },
    { iframe: "https://momento360.com/e/u/a4ba8d77c1034a509019400dc3a88d95?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true", x: 2200, y: 2363 },
    { iframe: "https://momento360.com/e/u/87f8fccc02ea46ea9780cd570aaca778?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true", x: 1890, y: 2616 },
    { iframe: "https://momento360.com/e/u/e2f308cfc298422f850d4f14aa6ffdf1?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true", x: 1633, y: 2671 }, //3.30
    { iframe: "https://momento360.com/e/u/077a37013b5a4ae3adc9ea4028a5d8a1?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true", x: 1494, y: 2475 },
    { iframe: "https://momento360.com/e/u/b561de04888246d0833a585c40d5e238?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true", x: 1603, y: 2501 },
  ];
  
// Global variables
let currentIndex = 0;
let actualLocation = locations[Math.floor(Math.random() * 44)];
let userPosition = null; // Stores user click coordinates on the map
let hasGuessed = false; // Tracks whether the user has already guessed
let zoomScale = 1; // Current zoom scale
let offsetX = 0; // Current X offset for panning
let offsetY = 0; // Current Y offset for panning

// DOM elements
const mapImg = document.getElementById("map-img");
const userMarker = document.getElementById("user-marker");
const correctMarker = document.getElementById("correct-marker");
const resultText = document.getElementById("result");
const locationIframe = document.getElementById("location");
const mapDiv = document.getElementById("map");
const lineCanvas = document.getElementById("line-canvas");

// Load the current map and location
function loadLocation() {
  actualLocation = locations[Math.floor(Math.random() * 44)];
  mapImg.src = "./img/map.png"; // Static map image
  locationIframe.src = actualLocation.iframe;

  resultText.innerText = ""; // Clear result
  userMarker.style.display = "none"; // Hide markers
  correctMarker.style.display = "none";
  userPosition = null;
  hasGuessed = false; // Reset guess state
  zoomScale = 1; // Reset zoom
  offsetX = (mapDiv.offsetWidth - mapImg.offsetWidth) / 2; // Center the map horizontally
  offsetY = (mapDiv.offsetHeight - mapImg.offsetHeight) / 2; // Center the map vertically
  updateTransform();
  clearLine();
}

// Handle map click event to place marker
mapDiv.addEventListener("click", (event) => {
  const rect = mapDiv.getBoundingClientRect();

  // Calculate click position relative to the map image, adjusted for zoom and pan
  const x = Math.round(((event.clientX - rect.left - offsetX) / zoomScale) * (4096 / rect.width));
  const y = Math.round(((event.clientY - rect.top - offsetY) / zoomScale) * (4096 / rect.height));

  userPosition = { x, y };

  // Update marker position
  updateMarkerPosition(userMarker, x, y);
});

// Handle the guess
function handleGuess() {
  if (!userPosition) {
    alert("Bitte setze deinen Marker auf der Karte!");
    return;
  }

  if (!hasGuessed) {
    // Calculate the pixel distance between the user's guess and the actual location
    const distance = calculatePixelDistance(
      userPosition.x,
      userPosition.y,
      actualLocation.x,
      actualLocation.y
    );

    // Display the correct marker
    updateMarkerPosition(correctMarker, actualLocation.x, actualLocation.y);

    // Draw a line connecting the two markers
    drawLine(userPosition, actualLocation);

    resultText.innerText = `Dein Guess war ${distance.toFixed(2)} Blöcke entfernt! Drücke die Leertaste, um die nächste Runde zu starten.`;
    hasGuessed = true; // Update state
  } else {
    // If already guessed, go to the next location
    nextLocation();
  }
}

// Update marker position based on map scaling and offset
function updateMarkerPosition(marker, x, y) {
  const rect = mapDiv.getBoundingClientRect();

  const markerLeft = ((x / 4096) * rect.width * zoomScale + offsetX) / rect.width;
  const markerTop = ((y / 4096) * rect.height * zoomScale + offsetY) / rect.height;

  marker.style.left = `${markerLeft * 100}%`;
  marker.style.top = `${markerTop * 100}%`;
  marker.style.display = "block";
}

// Calculate distance between two points using Pythagorean theorem
function calculatePixelDistance(x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
}

// Draw a dashed line between the user's guess and the correct location
function drawLine(start, end) {
  const canvas = lineCanvas;
  const ctx = canvas.getContext("2d");

  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Scale coordinates to canvas dimensions
  const startX = (start.x / 4096) * canvas.width;
  const startY = (start.y / 4096) * canvas.height;
  const endX = (end.x / 4096) * canvas.width;
  const endY = (end.y / 4096) * canvas.height;

  // Draw the dashed line
  ctx.setLineDash([5, 5]);
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.strokeStyle = "red";
  ctx.lineWidth = 1;
  ctx.stroke();
}

// Clear the line canvas
function clearLine() {
  const ctx = lineCanvas.getContext("2d");
  ctx.clearRect(0, 0, lineCanvas.width, lineCanvas.height);
}

// Zoom handling
mapDiv.addEventListener("wheel", (event) => {
  event.preventDefault();

  const rect = mapDiv.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  // Calculate zoom direction and amount
  const zoomAmount = event.deltaY > 0 ? 0.9 : 1.1;
  const newZoomScale = zoomScale * zoomAmount;

  // Limit zoom scale
  if (newZoomScale < 1 || newZoomScale > 10) return;

  // Adjust offsets to zoom to mouse position
  offsetX = mouseX - ((mouseX - offsetX) * (newZoomScale / zoomScale));
  offsetY = mouseY - ((mouseY - offsetY) * (newZoomScale / zoomScale));
  zoomScale = newZoomScale;

  updateTransform();
  updateMarkers();
});

// Update map and markers transform based on zoom and offset
function updateTransform() {
  mapImg.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${zoomScale})`;
  mapImg.style.transformOrigin = "0 0";
  lineCanvas.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${zoomScale})`;
  lineCanvas.style.transformOrigin = "0 0";
}

// Update all markers' positions based on current zoom and offset
function updateMarkers() {
  if (userPosition) {
    updateMarkerPosition(userMarker, userPosition.x, userPosition.y);
  }
  if (hasGuessed) {
    updateMarkerPosition(correctMarker, actualLocation.x, actualLocation.y);
  }
}

// Load the next map and location
function nextLocation() {
  currentIndex = (currentIndex + 1) % locations.length;
  loadLocation();
}

// Handle keydown event for Space
document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    event.preventDefault(); // Prevent default scrolling behavior
    handleGuess();
  }
});

// Initialize the game
loadLocation();