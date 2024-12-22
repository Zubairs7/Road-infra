const schemes = [
    {
        name: "Pradhan Mantri Gram Sadak Yojana (PMGSY)",
        description: "Provides all-weather road connectivity to unconnected villages across the country.",
        link: "https://pmgsy.nic.in",
        type: "central"
    },
    {
        name: "Bharatmala Pariyojana",
        description: "Optimizes freight and passenger movement through the development of economic corridors.",
        link: "https://morth.nic.in/bharatmala",
        type: "central"
    },
    {
        name: "Sagarmala Project",
        description: "Improves logistics by unlocking the potential of waterways and the coastline.",
        link: "https://sagarmala.gov.in",
        type: "central"
    },
    {
        name: "Karnataka Urban Infrastructure Development Scheme",
        description: "Develops urban infrastructure projects, including roads, bridges, and transport systems in Karnataka.",
        link: "https://karnataka.gov.in",
        type: "state"
    },
    {
        name: "Mukhyamantri Sadak Yojana (Madhya Pradesh)",
        description: "Provides rural road connectivity to enhance access to markets and services in Madhya Pradesh.",
        link: "https://mp.gov.in",
        type: "state"
    },
    {
        name: "Rajasthan State Highway Development Project",
        description: "Upgrades state highways and major district roads to support connectivity and economic growth in Rajasthan.",
        link: "https://rajasthan.gov.in",
        type: "state"
    },
    {
        name: "Delhi Metro Expansion Project",
        description: "Enhances public transport by expanding the metro network in Delhi, improving urban mobility.",
        link: "https://delhimetrorail.com",
        type: "state"
    },
    {
        name: "Chennai Smart City Mission",
        description: "Improves urban transport, road safety, and pedestrian infrastructure under the Smart Cities Mission.",
        link: "https://chennaicorporation.gov.in",
        type: "state"
    },
    {
        name: "Uttar Pradesh Expressways Industrial Development Authority (UPEIDA)",
        description: "Develops expressways to boost industrial growth and improve regional connectivity in Uttar Pradesh.",
        link: "https://upeida.up.gov.in",
        type: "state"
    },
    {
        name: "West Bengal Green City Mission",
        description: "Focuses on sustainable urban transport and infrastructure projects in various cities of West Bengal.",
        link: "https://wb.gov.in",
        type: "state"
    }
];

function populateSchemes() {
    const schemesContainer = document.getElementById('schemes');
    schemesContainer.innerHTML = ''; // Clear existing content
    schemes.forEach(scheme => {
        const schemeItem = document.createElement('div');
        schemeItem.classList.add('scheme-item');
        schemeItem.dataset.type = scheme.type; // Add a custom data attribute for type
        schemeItem.innerHTML = `
            <h3>${scheme.name}</h3>
            <p>${scheme.description}</p>
            <a href="${scheme.link}" target="_blank">Learn More</a>
        `;
        schemesContainer.appendChild(schemeItem);
    });
}

function filterSchemes() {
    const filterValue = document.getElementById('schemeType').value;
    const schemeItems = document.querySelectorAll('.scheme-item');

    schemeItems.forEach(item => {
        const schemeType = item.dataset.type; // Use the data-type attribute
        if (filterValue === 'all' || schemeType === filterValue) {
            item.style.display = ''; // Show matching items
        } else {
            item.style.display = 'none'; // Hide non-matching items
        }
    });
}

window.onload = populateSchemes;

document.addEventListener("scroll", () => {
    const parallax = document.querySelector('.parallax');
    const offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.1 + "px";
});

function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}
