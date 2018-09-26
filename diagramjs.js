// Bar chart
new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
      datasets: [
        {
          label: "Den finska regnmägnden (mm)",
          backgroundColor: "#3cba9f",
          data: [44,34,35,30,42,60,75,74,56,60,53,47, 0]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Finska regnmängden i medeltal 1981-2010'
      }
    }
});