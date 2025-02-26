/**
 * Waitlist functionality for Roxanne landing page
 * Uses a simple URL obfuscation technique to prevent basic scraping
 */

// Base64 encoded Google Form URL
const formUrlEncoded = "aHR0cHM6Ly9mb3Jtcy5nbGUvU2Z5YmhUNk5aZERHYVJURUE=";

// Function to open the waitlist form
function openWaitlist() {
  // Decode the URL and open in a new tab
  const formUrl = atob(formUrlEncoded);
  window.open(formUrl, "_blank");
} 