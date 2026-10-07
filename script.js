function showJersey(jerseyName) {
    const modal = document.getElementById("jersey-modal");
    const image = document.getElementById("jersey-modal-image");
    const title = document.getElementById("jersey-modal-title");
    const team = document.getElementById("jersey-modal-team");
    const description = document.getElementById("jersey-modal-description");

    const jerseys = {
        "Home Jersey": {
            image: "../../../../../images/jerseys/jazz-home.jpg",
            description: "The Utah Jazz home jersey represents the team's classic home look."
        },

        "Away Jersey": {
            image: "../../../../../images/jerseys/jazz-away.jpg",
            description: "The Utah Jazz away jersey represents the team on the road."
        },

        "Statement Jersey": {
            image: "../../../../../images/jerseys/jazz-statement.jpg",
            description: "The Statement Edition jersey gives the Jazz a bold alternate look."
        },

        "City Edition": {
            image: "../../../../../images/jerseys/jazz-city.jpg",
            description: "The City Edition jersey represents Utah and the identity of the Jazz."
        }
    };

    image.src = jerseys[jerseyName].image;
    image.alt = jerseyName;

    title.textContent = jerseyName;
    team.textContent = "Utah Jazz";
    description.textContent = jerseys[jerseyName].description;

    modal.style.display = "flex";
}

function closeJersey() {
    document.getElementById("jersey-modal").style.display = "none";
}

document.getElementById("jersey-modal").addEventListener("click", function(event) {
    if (event.target === this) {
        closeJersey();
    }
});