
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchBar");
  const productSections = document.querySelectorAll("[id^='productGrid']");

  searchInput.addEventListener("keyup", function () {
      const query = searchInput.value.toLowerCase().trim();
      
      productSections.forEach(section => {
          const productCards = section.getElementsByClassName("product-card");
          const sectionHeading = section.previousElementSibling; // Assuming heading is just before the section
          let hasVisibleProducts = false;

          Array.from(productCards).forEach(card => {
              const productName = card.querySelector(".product-name").textContent.toLowerCase();
              const productDesc = card.querySelector("p").textContent.toLowerCase();
              
              if (productName.includes(query) || productDesc.includes(query)) {
                  card.style.display = "block";
                  hasVisibleProducts = true;
              } else {
                  card.style.display = "none";
              }
          });

          // Hide the section and its heading if no products match
          if (hasVisibleProducts) {
              section.style.display = "grid";
              if (sectionHeading) sectionHeading.style.display = "block";
          } else {
              section.style.display = "none";
              if (sectionHeading) sectionHeading.style.display = "none";
          }
      });
  });
});
