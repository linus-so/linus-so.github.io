function getDriverStats(driverNumber) {


    const nameElement = document.getElementById("name");
    const numberElement = document.getElementById("number");
    const teamElement = document.getElementById("team");
    const latestRaceElement = document.getElementById("latestRace");

    const meeting = 1216;

    const imageElement = document.getElementById("image");
    if (!nameElement) {
        console.error("Missing #name element in DOM");
        return;
    }

    if (driverNumber === "0") {
        nameElement.textContent = "";
        numberElement.textContent = "";
        teamElement.textContent = "";
        imageElement.src = "";
        imageElement.alt = "";
        latestRaceElement.textContent = "";
        return;
    }

    fetch(`https://api.openf1.org/v1/drivers?driver_number=${driverNumber}&session_key=latest`)
        .then((response) => {
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            return response.json();
        })
        .then((jsonContent) => {
            console.log("API payload", jsonContent);

            const driverArray = Array.isArray(jsonContent?.value)
                ? jsonContent.value
                : Array.isArray(jsonContent)
                    ? jsonContent
                    : [];
            const driver = driverArray?.[0]
            const name = driver?.full_name || "Unknown Driver";

            
            getLatestRaceStats(driverNumber);
            nameElement.textContent = "Name: " + name;
            numberElement.textContent = "Number: " + (driver?.driver_number || "N/A");
            teamElement.textContent = "Team: " + (driver?.team_name || "N/A");
            
            if (driver?.headshot_url) {
                imageElement.src = driver.headshot_url;
                imageElement.alt = name;
            } else {
                imageElement.src = "";
                imageElement.alt = "No image available";
            }


        })
}


function getLatestRaceStats(driverNumber) {
    const latestRaceElement = document.getElementById("latestRace");
    fetch("https://api.openf1.org/v1/session_result?session_key=latest&driver_number=" + driverNumber)
        .then((response) => response.json())
        .then((jsonContent) => {
            console.log("API payload", jsonContent);

            const driverArray = Array.isArray(jsonContent?.value)
                ? jsonContent.value
                : Array.isArray(jsonContent)
                    ? jsonContent
                    : [];
            const driver = driverArray?.[0]
            latestRaceElement.textContent = "Latest Race Position: " + (driver?.position || "N/A");
        })
}


function getSelectedOption() {
  // Get the dropdown element
  const dropdown = document.getElementById("driverSelect");
  // Get the selected value and text
  const value = dropdown.value; // Selected value
  const text = dropdown.options[dropdown.selectedIndex].text; // Selected text
  console.log("Selected Value:", value); // Logs "2"
  console.log("Selected Text:", text);  // Logs "Option 2"
  getDriverStats(value);
}
