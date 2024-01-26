import React from "react";

// Links to my different profiles

export default function Footer() {
  return (
    <footer className="siteFooter mt-4">
      <div className="footerContent">
        <a
          href="https://github.com/Ryan9698"
          target="_blank"
          rel="noopener noreferrer"
          className="footerLink"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/rcaltabiano"
          target="_blank"
          rel="noopener noreferrer"
          className="footerLink"
        >
          LinkedIn
        </a>
        <a
          href="https://www.facebook.com/ryan.caltabiano.1/"
          target="_blank"
          rel="noopener noreferrer"
          className="footerLink"
        >
          Facebook
        </a>
      </div>
    </footer>
  );
}
