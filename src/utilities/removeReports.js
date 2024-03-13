const fs = require("fs");

const allureResultsFolderPath = "allure-results/";
const allureResultsConfFolderPath = "src/config/allure-results/";
const allureReportFolderPath = "allure-report/";
const playwrightReportFolderPath = "playwright-report/";
const testResultsFolderPath = "test-results/";

function removeDir(path) {
    try {
        // Check if the folder exists before attempting to remove it
        if (fs.existsSync(path)) {
            // Remove the folder and its contents
            fs.rmSync(path, { recursive: true });
            console.log(`Removed folders: ${path}, `);
        }
    } catch (err) {
        console.error(`Error removing folder: ${path}`, err);
    }
}

async function cleanup() {
    removeDir(allureResultsFolderPath);
    removeDir(allureResultsConfFolderPath);
    removeDir(allureReportFolderPath);
    removeDir(playwrightReportFolderPath);
    removeDir(testResultsFolderPath);
}

// Call the cleanup function to start the cleanup process
cleanup();