function addAmazonLink() {
  const reviewLink = document.querySelector('a[href*="/review/"]');
  const buttonExists = document.getElementById("view-on-amazon-button");

  // Only run if we find the review link and our button hasn't been added yet
  if (reviewLink && !buttonExists) {
    const regex = /\/review\/([A-Z0-9]{10})/;
    const match = reviewLink.href.match(regex);

    if (match && match[1]) {
      const asin = match[1];
      const amazonUrl = `https://www.amazon.com/dp/${asin}`;

      // Create a wrapper div for our button
      const amazonButtonWrapper = document.createElement("div");
      amazonButtonWrapper.id = "view-on-amazon-button"; // Set the ID on the wrapper

      // Use innerHTML to create the styled link and the hover effect
      amazonButtonWrapper.innerHTML = `
        <a id="woot-amazon-link-anchor" href="${amazonUrl}" target="_blank" 
          onmouseenter="this.style.backgroundColor='#FF9900'; this.style.borderColor='#e47911';"
          onmouseleave="this.style.backgroundColor='#58cd5d'; this.style.borderColor='#5a8c1c';"
          style="
          display: block !important;
          background-color: #58cd5d !important;
          color: white !important;
          padding: 12px 15px !important;
          margin: 15px 0 10px 0 !important;
          border-radius: 5px !important;
          text-decoration: none !important;
          font-weight: bold !important;
          font-family: Arial, sans-serif !important;
          font-size: 14px !important;
          text-align: center !important;
          border: 1px solid #5a8c1c !important;
          cursor: pointer !important;
          transition: all 0.2s ease-in-out !important;
        ">
          View on Amazon.com
        </a>
      `;

      // --- Resilient Placement Logic ---
      const priceSection = document.querySelector(".price-exact");
      const ratingsSection = document.querySelector("#ratings-reviews-summary");

      if (priceSection) {
        // This is the best, most stable location. Insert after the price.
        priceSection.insertAdjacentElement("afterend", amazonButtonWrapper);
      } else if (ratingsSection) {
        // Fallback: Insert after the ratings section.
        ratingsSection.insertAdjacentElement("afterend", amazonButtonWrapper);
      }
    }
  }
}

// The MutationObserver is the best way to handle dynamic content.
const observer = new MutationObserver(addAmazonLink);
observer.observe(document.body, { childList: true, subtree: true });

// Run once on load just in case.
setTimeout(addAmazonLink, 500);
