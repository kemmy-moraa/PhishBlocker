let uploadedImage = null; // Store the uploaded image

    // Function to show toast notifications
    function showToast(message, isError = false) {
        const toast = document.createElement("div");
        toast.className = "toast";
        toast.textContent = message;
        document.body.appendChild(toast);

        if (isError) {
            toast.style.backgroundColor = "#D9534F"; // Red for errors
        } else {
            toast.style.backgroundColor = "#5CB85C"; // Green for success
        }

        toast.classList.add("show");

        setTimeout(() => {
            toast.classList.remove("show");
            setTimeout(() => toast.remove(), 500);
        }, 2500);
    }

    // Trigger file selection when upload button is clicked
    document.getElementById("uploadButton").addEventListener("click", function() {
        document.getElementById("fileInput").click();
    });

    // Process file selection
    document.getElementById("fileInput").addEventListener("change", function(event) {
        const file = event.target.files[0];

        if (!file) return;

        // Check if the file is an image
        if (!file.type.startsWith("image/")) {
            showToast("⚠️ Please select an image file only!", true);
            event.target.value = ""; // Reset file input
            return;
        }

        uploadedImage = file;

        // Create a small thumbnail preview of the image
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById("imagePreview").innerHTML =
                `<img src="${e.target.result}" alt="Uploaded Image">`;
        };
        reader.readAsDataURL(file);

        showToast("✅ Image uploaded successfully!");
    });

    // Analyze button: Simulate real vs. fake detection
    document.getElementById("analyzeButton").addEventListener("click", function() {
        if (!uploadedImage) {
            showToast("⚠️ Please upload an image first!", true);
            return;
        }

        // Simulated AI Analysis - Randomly decide if the image is real or fake
        const isAuthentic = Math.random() < 0.5;

        // Show a toast notification instead of plain text
        if (isAuthentic) {
            showToast("✅ The image is AUTHENTIC!");
        } else {
            showToast("❌ The image is FAKE or altered!", true);
        }
    });