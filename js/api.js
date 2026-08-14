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

getAllUsers();