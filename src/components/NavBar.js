// Import the React library — needed to use JSX syntax and React features
import React from "react";

// Define a React functional component named NavBar
function NavBar() {
  // Declare an array called 'links' with three page sections
  const links = ["home", "about", "projects"];

  // Return the JSX that this component will render to the page
  return (
    // The <nav> element is a semantic HTML tag for navigation links
    <nav>
      {
        // Use .map to loop through each item in the 'links' array
        // For each 'link', create an <a> element
        links.map((link) => (
          // The <a> tag is the actual clickable link
          // key={link} — gives React a unique identifier for each item in the list
          // href={#${link}} — sets the link destination to an ID on the same page
          // {link} — displays the text inside the link (e.g., home, about)
          <a key={link} href={`#${link}`}>
            {link}
          </a>
        ))
      }
    </nav>
  );
}

// Export this component so it can be imported and used in other files
export default NavBar;