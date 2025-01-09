// Inject the combined CSS styles
const style = document.createElement('style');
style.innerHTML = `
    /* General Styles */
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .about-us {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px;
    }

    .about-us img {
        width: 40%;
        margin-right: 20px;
    }

    .about-us-content {
        width: 55%;
    }

    .card-container {
        display: flex;
        justify-content: space-between;
        margin-top: 50px;
    }

    .card {
        text-align: center;
        padding: 20px;
        margin: 10px;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        width: 30%;
        background-color: #f9f9f9;
    }

    .card img {
        width: 50px;
        height: 50px;
        margin-bottom: 10px;
    }

    .card h3 {
        margin-bottom: 10px;
        font-size: 1.2em;
    }

    .card p {
        font-size: 1em;
        color: #555;
    }

    /* Responsive Styles */
    @media (max-width: 768px) {
        .about-us {
            flex-direction: column;
            text-align: center;
        }
        .about-us img {
            width: 80%;
            margin-bottom: 20px;
        }
        .about-us-content {
            width: 100%;
        }
        .card-container {
            flex-direction: column;
        }
        .card {
            width: 100%;
            margin-bottom: 20px;
        }
    }
`;
document.head.appendChild(style);

// About Us content rendering
function renderAboutUs() {
    const aboutSection = document.createElement('section');
    aboutSection.classList.add('about-us');
    aboutSection.innerHTML = `
        <img src="src/components/home-cleaning 4.png" alt="About Us">
        <div class="about-us-content">
            <h2>About Us</h2>
            <p>Housekeeping and home cleaning services manage a range of duties from household chores to maintaining commercial spaces, hospitals, and more...</p>
            <p>We specialize in sofa and carpet cleaning, offering vacuuming, shampooing, steaming, brushing, drying, and stain removal to maintain hygiene and extend the life of your furnishings...</p>
        </div>
    `;
    document.body.appendChild(aboutSection);
}

// Card component rendering
function renderCards() {
    const cardContainer = document.createElement('section');
    cardContainer.classList.add('card-container');
    cardContainer.innerHTML = `
        <div class="card">
            <img src="src/components/whychooseus.png" alt="Why Choose Us Icon">
            <h3>Why Choose Us</h3>
            <p>We offer flexible, on-demand services tailored to your needs...</p>
        </div>
        <div class="card">
            <img src="images/ourmission.png" alt="Our Mission Icon">
            <h3>Our Mission</h3>
            <p>Our goal is to enhance your environment by providing a clean, healthy, and safe space...</p>
        </div>
        <div class="card">
            <img src="images/whatwedo.png" alt="What We Do Icon">
            <h3>What We Do</h3>
            <p>We specialize in housekeeping, home cleaning, and detailed sofa and carpet cleaning services...</p>
        </div>
    `;
    document.body.appendChild(cardContainer);
}

// Initialize page content
function init() {
    renderAboutUs();
    renderCards();
}

// Run the initialization function when the page loads
window.onload = init;
