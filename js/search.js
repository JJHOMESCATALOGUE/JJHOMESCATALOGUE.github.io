document.addEventListener('DOMContentLoaded', function () {
    const searchBar = document.getElementById('searchBar');
    const productGrid = document.getElementById('productGrid');
    const productCards = Array.from(productGrid.getElementsByClassName('product-card'));
  
    // Add event listener to search bar
    searchBar.addEventListener('input', function () {
      const query = searchBar.value.toLowerCase();
      
      productCards.forEach(card => {
        const productName = card.querySelector('.product-name').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();
        
        // Check if the query matches either product name or description
        if (productName.includes(query) || description.includes(query)) {
          card.style.display = ''; // Show the card
        } else {
          card.style.display = 'none'; // Hide the card
        }
      });
    });
  });
  