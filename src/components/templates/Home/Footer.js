import React from "react";
import { SocialIcon } from "react-social-icons";

export class Footer extends React.Component {
  render() {
    return (
      <footer>
        <picture>
          <source srcset="/images/artwrite-logo.webp" type="image/webp" />
          <img
            src="/images/artwrite-logo.png"
            className="logo-footer"
            alt="ArtWrite Productions Logo"
          />
        </picture>
        <div className="social-icons">
          <SocialIcon
            url="https://www.facebook.com/artwriteproductions"
            styles="fill:black!important;"
          />
          <SocialIcon url="https://www.linkedin.com/company/9729956" />
          <SocialIcon url="mailto:jtiller@adaptedclassics.com" />
        </div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} ArtWrite Productions
        </p>
        <p className="site-design">
          Site design by{" "}
          <a
            className="unstyled-links"
            href="https://www.linkedin.com/in/paultiller/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Paul Tiller
          </a>
        </p>
      </footer>
    );
  }
}
