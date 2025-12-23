const API_URL = "https://free-geo-keyword-finder-3.onrender.com/api/generate";

document.getElementById("generateBtn").addEventListener("click", async () => {
  const keyword = document.getElementById("keywordInput").value.trim();
  const resultsBox = document.getElementById("results");

  if (!keyword) {
    alert("Please enter a keyword");
    return;
  }

  resultsBox.textContent = "Loading...";

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ keyword })
    });

    const data = await response.json();

    resultsBox.textContent = JSON.stringify(data, null, 2);

  } catch (error) {
    resultsBox.textContent = "Failed to fetch data from API";
    console.error(error);
  }
});
