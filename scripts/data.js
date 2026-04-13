// /scripts/data.js

const tracks = {
    1: {
        title: "Bahrain Grand Prix",
        image: "/Images/Tracks/Bahrain.jpg",
        description: "Bahrain International Circuit – A desert track known for night racing and overtaking.",
        longDescription: "Located in Sakhir, this circuit features a mix of long straights and tight corners. The night race adds a spectacular atmosphere and unique cooling challenges for the cars.",
        laps: 57,
        length: "5.412 km",
        firstGP: 2004
    },
    2: {
        title: "Saudi Arabian Grand Prix",
        image: "/Images/Tracks/Saudi.jpg",
        description: "Jeddah Corniche Circuit – One of the fastest street circuits.",
        longDescription: "A modern street circuit along the Corniche in Jeddah, it combines long high-speed sections with narrow corners. Close walls and high speeds make it challenging for drivers and exciting for overtakes.",
        laps: 50,
        length: "6.174 km",
        firstGP: 2021
    },
    3: {
        title: "Australian Grand Prix",
        image: "/Images/Tracks/Australia.jpg",
        description: "Albert Park – Fast semi-street circuit.",
        longDescription: "Located in Melbourne, the track winds around a park with a mixture of fast corners and chicanes. Weather can be unpredictable, often affecting race strategies and tire choices.",
        laps: 58,
        length: "5.278 km",
        firstGP: 1985
    },
    4: {
        title: "Japanese Grand Prix",
        image: "/Images/Tracks/Japan.jpg",
        description: "Suzuka – Famous for its figure-eight layout.",
        longDescription: "One of the most technically challenging circuits in F1, Suzuka has a figure-eight layout with high-speed corners like 130R. It rewards precision and balance, and is loved by drivers and fans alike.",
        laps: 53,
        length: "5.807 km",
        firstGP: 1976
    },
    5: {
        title: "Chinese Grand Prix",
        image: "/Images/Tracks/China.jpg",
        description: "Shanghai – Long straights and technical corners.",
        longDescription: "Shanghai International Circuit features sweeping corners and a long back straight that promotes high-speed overtaking. Its layout tests both aerodynamic efficiency and braking performance.",
        laps: 56,
        length: "5.451 km",
        firstGP: 2004
    },
    6: {
        title: "Miami Grand Prix",
        image: "/Images/Tracks/Miami.jpg",
        description: "Modern circuit around Hard Rock Stadium.",
        longDescription: "A new addition to the calendar, the Miami circuit mixes long straights with tight technical corners. The humid conditions make tire management and car cooling a key factor.",
        laps: 57,
        length: "5.412 km",
        firstGP: 2022
    },
    7: {
        title: "Emilia Romagna Grand Prix",
        image: "/Images/Tracks/Imola.jpg",
        description: "Historic Imola circuit with flowing corners.",
        longDescription: "The Imola circuit is fast and technical with limited overtaking opportunities. Elevation changes and high-speed turns make it one of the more demanding tracks for drivers.",
        laps: 63,
        length: "4.909 km",
        firstGP: 1980
    },
    8: {
        title: "Monaco Grand Prix",
        image: "/Images/Tracks/Monaco.jpg",
        description: "The most iconic street circuit in F1.",
        longDescription: "Monaco is a tight, twisty street circuit with almost no room for mistakes. Famous corners like Casino Square and the Loews Hairpin challenge precision, making qualifying extremely important.",
        laps: 78,
        length: "3.337 km",
        firstGP: 1950
    },
    9: {
        title: "Canadian Grand Prix",
        image: "/Images/Tracks/Canada.jpg",
        description: "Home of the Wall of Champions.",
        longDescription: "Circuit Gilles Villeneuve in Montreal combines long straights with heavy braking zones. The Wall of Champions corner often punishes even experienced drivers, making it unpredictable and exciting.",
        laps: 70,
        length: "4.361 km",
        firstGP: 1967
    },
    10: {
        title: "Spanish Grand Prix",
        image: "/Images/Tracks/Spain.jpg",
        description: "Balanced track used for testing.",
        longDescription: "Barcelona's Circuit de Catalunya is a staple in F1, offering a mix of high-speed corners and technical sections. Often used for car testing, it rewards well-balanced setups.",
        laps: 66,
        length: "4.657 km",
        firstGP: 1951
    },
    11: {
        title: "Austrian Grand Prix",
        image: "/Images/Tracks/Austria.jpg",
        description: "Short, fast track with elevation.",
        longDescription: "Red Bull Ring is a short and flowing track with elevation changes and heavy braking zones. It is high-speed and demands sharp precision and tire management.",
        laps: 71,
        length: "4.318 km",
        firstGP: 1970
    },
    12: {
        title: "British Grand Prix",
        image: "/Images/Tracks/UK.jpg",
        description: "High-speed corners at Silverstone.",
        longDescription: "Silverstone is a classic F1 circuit with fast corners like Maggots and Becketts. Aerodynamic efficiency and driver skill are critical due to its high-speed nature.",
        laps: 52,
        length: "5.891 km",
        firstGP: 1950
    },
    13: {
        title: "Hungarian Grand Prix",
        image: "/Images/Tracks/Hungary.jpg",
        description: "Tight and technical layout.",
        longDescription: "Hungaroring is a twisty track with limited overtaking. It rewards cars with good mechanical grip and precise driving, often producing strategic races.",
        laps: 70,
        length: "4.381 km",
        firstGP: 1986
    },
    14: {
        title: "Belgian Grand Prix",
        image: "/Images/Tracks/Belgium.jpg",
        description: "Spa with Eau Rouge and long straights.",
        longDescription: "Spa-Francorchamps is legendary for its long corners, elevation changes, and unpredictable weather. Eau Rouge is one of the most iconic sections in all motorsport.",
        laps: 44,
        length: "7.004 km",
        firstGP: 1950
    },
    15: {
        title: "Dutch Grand Prix",
        image: "/Images/Tracks/Netherlands.jpg",
        description: "Zandvoort with banking.",
        longDescription: "Zandvoort features banked corners and a flowing layout. Its modern renovations have added complexity, making it exciting for both drivers and fans.",
        laps: 72,
        length: "4.259 km",
        firstGP: 1952
    },
    16: {
        title: "Italian Grand Prix",
        image: "/Images/Tracks/Italy.jpg",
        description: "Monza, the Temple of Speed.",
        longDescription: "Monza is characterized by extremely long straights and chicanes. It is the fastest track on the calendar and a place where engine power and slipstreaming dominate.",
        laps: 53,
        length: "5.793 km",
        firstGP: 1950
    },
    17: {
        title: "Azerbaijan Grand Prix",
        image: "/Images/Tracks/Baku.jpg",
        description: "Mix of tight streets and long straight.",
        longDescription: "Baku City Circuit is a street circuit with a very long straight, providing dramatic overtaking opportunities. Its narrow sections and tight corners challenge drivers’ precision.",
        laps: 51,
        length: "6.003 km",
        firstGP: 2017
    },
    18: {
        title: "Singapore Grand Prix",
        image: "/Images/Tracks/Singapore.jpg",
        description: "Demanding night street race.",
        longDescription: "Marina Bay is a physically demanding night race. High humidity, many corners, and tight barriers make it a true test of concentration and car reliability.",
        laps: 62,
        length: "4.940 km",
        firstGP: 2008
    },
    19: {
        title: "United States Grand Prix",
        image: "/Images/Tracks/USA.jpg",
        description: "COTA with elevation changes.",
        longDescription: "Circuit of the Americas is a modern track with elevation changes, technical corners, and a long straight. It requires a balanced setup and rewards skilled braking.",
        laps: 56,
        length: "5.513 km",
        firstGP: 2012
    },
    20: {
        title: "Mexico City Grand Prix",
        image: "/Images/Tracks/Mexico.jpg",
        description: "High altitude affects performance.",
        longDescription: "Autódromo Hermanos Rodríguez sits at high altitude, affecting engine performance and cooling. The track has fast straights and tight stadium sections, making it unique.",
        laps: 71,
        length: "4.304 km",
        firstGP: 1963
    },
    21: {
        title: "Brazilian Grand Prix",
        image: "/Images/Tracks/Brazil.jpg",
        description: "Interlagos with unpredictable races.",
        longDescription: "Interlagos is a short, twisty circuit with frequent weather changes. Exciting overtakes and dramatic finishes are common here, making it a fan favorite.",
        laps: 71,
        length: "4.309 km",
        firstGP: 1973
    },
    22: {
        title: "Las Vegas Grand Prix",
        image: "/Images/Tracks/Vegas.jpg",
        description: "Night race on the Strip.",
        longDescription: "A brand-new street circuit around the Las Vegas Strip. It features long straights, tight corners, and spectacular nighttime lighting, offering a unique challenge for drivers.",
        laps: 50,
        length: "6.201 km",
        firstGP: 2023
    },
    23: {
        title: "Qatar Grand Prix",
        image: "/Images/Tracks/Qatar.jpg",
        description: "Fast flowing Lusail circuit.",
        longDescription: "Lusail International Circuit has sweeping high-speed corners and long straights. Precision and tire management are key, especially under night lighting conditions.",
        laps: 57,
        length: "5.419 km",
        firstGP: 2021
    },
    24: {
        title: "Abu Dhabi Grand Prix",
        image: "/Images/Tracks/AbuDhabi.jpg",
        description: "Season finale at Yas Marina.",
        longDescription: "Yas Marina Circuit features a twilight-to-night transition. It has long straights, modern corners, and is known for dramatic season-ending races.",
        laps: 58,
        length: "5.281 km",
        firstGP: 2009
    }
};