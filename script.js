// ========================================
// UTAH JAZZ JERSEYS
// ========================================

function showJazzJersey(jerseyName) {
    const jerseys = {
        "Home Jersey": {
            image: "../../../../../images/jerseys/jazz-home.jpg",
            description: "The Utah Jazz home jersey represents the team's home uniform."
        },
        "Away Jersey": {
            image: "../../../../../images/jerseys/jazz-away.jpg",
            description: "The Utah Jazz away jersey represents the team on the road."
        },
        "Statement Jersey": {
            image: "../../../../../images/jerseys/jazz-statement.jpg",
            description: "The Statement Edition gives the Jazz a distinctive alternate look."
        },
        "City Edition": {
            image: "../../../../../images/jerseys/jazz-city.jpg",
            description: "The City Edition jersey highlights Utah and the identity of the Jazz."
        }
    };

    openJerseyModal(jerseyName, "Utah Jazz", jerseys);
}


// ========================================
// DENVER NUGGETS JERSEYS
// ========================================

function showNuggetsJersey(jerseyName) {
    const jerseys = {
        "Home Jersey": {
            image: "../../../../../images/jerseys/nuggets-home.jpg",
            description: "The Nuggets' white Association Edition jersey features the team's colors and branding."
        },
        "Away Jersey": {
            image: "../../../../../images/jerseys/nuggets-away.jpg",
            description: "The Nuggets' navy Icon Edition jersey represents the team's core identity."
        },
        "Statement Jersey": {
            image: "../../../../../images/jerseys/nuggets-statement.jpg",
            description: "The Statement Edition provides a bold alternate look for the Denver Nuggets."
        }
    };

    openJerseyModal(jerseyName, "Denver Nuggets", jerseys);
}


// ========================================
// SHARED JERSEY POP-UP
// ========================================

function openJerseyModal(jerseyName, teamName, jerseys) {
    const modal = document.getElementById("jersey-modal");
    const image = document.getElementById("jersey-modal-image");
    const title = document.getElementById("jersey-modal-title");
    const team = document.getElementById("jersey-modal-team");
    const description = document.getElementById("jersey-modal-description");

    // Stop if any of the modal elements are not found.
    if (!modal || !image || !title || !team || !description) {
        console.error("Jersey modal elements could not be found.");
        return;
    }

    const jersey = jerseys[jerseyName];

    // Stop if the requested jersey does not exist.
    if (!jersey) {
        console.error("Jersey not found:", jerseyName);
        return;
    }

    image.src = jersey.image;
    image.alt = teamName + " " + jerseyName;
    title.textContent = jerseyName;
    team.textContent = teamName;
    description.textContent = jersey.description;

    modal.style.display = "flex";
}


// ========================================
// CLOSE THE JERSEY POP-UP
// ========================================

function closeJersey() {
    const modal = document.getElementById("jersey-modal");

    if (modal) {
        modal.style.display = "none";
    }
}


// Close the pop-up when clicking outside its content.
document.addEventListener("click", function(event) {
    const modal = document.getElementById("jersey-modal");

    if (modal && event.target === modal) {
        closeJersey();
    }
});


// Close the pop-up when pressing Escape.
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeJersey();
    }
});