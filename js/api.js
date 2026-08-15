const API_BASE_URL = "https://api.freeprojectapi.com";

async function getAllUsers() {

    try {

        console.log("Sending request...");

        const response = await fetch(
            `${API_BASE_URL}/api/CollegeProject/GetAllUsers`
        );

        console.log("Status:", response.status);
        console.log("Status text:", response.statusText);

        const text = await response.text();

        console.log("Raw API response:", text);

        if (!response.ok) {
            throw new Error(
                `HTTP ${response.status}: ${response.statusText}`
            );
        }

        const data = JSON.parse(text);

        console.log("Parsed API data:", data);

    } catch (error) {

        console.error("API Error:", error);

    }
}



async function getAllProjects() {
    try {
        console.log("Getting projects...");

        const response = await fetch(
            "https://api.freeprojectapi.com/api/CollegeProject/getAllProjects"
        );

        console.log("Project status:", response.status);
        console.log("Project status text:", response.statusText);

        const text = await response.text();

        console.log("Project raw response:", text);

        if (!response.ok) {
            throw new Error(`Project API error: ${response.status}`);
        }

        const data = JSON.parse(text);

        console.log("Projects:", data);

    } catch (error) {
        console.error("GetAllProjects error:", error);
    }
}

getAllUsers();
getAllProjects();