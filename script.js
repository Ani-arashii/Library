document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector(".navbar input[type='text']");
    
    searchInput.addEventListener("focus", () => {
        searchInput.style.outline = "2px solid #e43f5a";
    });

    searchInput.addEventListener("blur", () => {
        searchInput.style.outline = "none";
    });
});
