const tableBody = document.getElementById("raceTable");

let driverMap = {};


async function loadDrivers() {
  try {
    const res = await fetch("https://api.openf1.org/v1/drivers?session_key=latest");
    const drivers = await res.json();

    driverMap = {};
    drivers.forEach(d => {
      driverMap[d.driver_number] = d;
    });

  } catch (err) {
    console.error("Driver fetch error:", err);
  }
}


async function fetchRaceData() {
  try {
    const [posRes, intRes] = await Promise.all([
      fetch("https://api.openf1.org/v1/position?session_key=latest"),
      fetch("https://api.openf1.org/v1/intervals?session_key=latest")
    ]);

    const positions = await posRes.json();
    const intervals = await intRes.json();

    updateTable(positions, intervals);

  } catch (err) {
    console.error("Live data error:", err);
  }
}

// 3. Render table
function updateTable(positions, intervals) {
  const latestPos = {};
  const latestIntervals = {};

  positions.forEach(p => {
    latestPos[p.driver_number] = p;
  });

  intervals.forEach(i => {
    latestIntervals[i.driver_number] = i;
  });

  const drivers = Object.values(latestPos).map(driver => {
    const info = driverMap[driver.driver_number] || {};

    return {
      ...driver,
      name: info.full_name || driver.driver_number,
      team: info.team_name || "Unknown",
      color: info.team_colour || "#ffffff",
      headshot: info.headshot_url,
      gap: latestIntervals[driver.driver_number]?.gap_to_leader
    };
  });

  drivers.sort((a, b) => a.position - b.position);

  tableBody.innerHTML = "";

  drivers.forEach(driver => {
    let gapDisplay = driver.position === 1
      ? "LEADER"
      : (driver.gap ? `+${driver.gap}s` : "—");

    tableBody.innerHTML += `
      <tr style="border-left: 5px solid ${driver.color}">
        <td>${driver.position}</td>

        <td class="d-flex align-items-center gap-2">
          <img src="${driver.headshot}" 
               style="width:30px; height:30px; border-radius:50%; object-fit:cover;">
          ${driver.name}
        </td>

        <td>${driver.team}</td>

        <td>${gapDisplay}</td>
      </tr>
    `;
  });
}


async function init() {
  await loadDrivers();      
  fetchRaceData();          
  setInterval(fetchRaceData, 3000);
}

init();