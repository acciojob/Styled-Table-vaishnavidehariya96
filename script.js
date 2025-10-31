document.addEventListener("DOMContentLoaded", () => {
  console.log("Styled Table JS loaded successfully!");

  const rows = document.querySelectorAll("tbody tr");

  // Highlight best performer
  rows.forEach(row => {
    const winRate = parseFloat(row.children[4].textContent);
    if (winRate >= 70) {
      row.style.backgroundColor = "#d4edda"; // light green
      row.style.fontWeight = "bold";
    }
  });
});