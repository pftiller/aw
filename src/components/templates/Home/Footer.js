import React from 'react';
import { SocialIcon } from 'react-social-icons';

export class Footer extends React.Component {
    render() {
        return(
            <footer>
                <img src='./images/artwrite-logo.png' alt="ArtWrite Productions Logo" className="logo-footer"/>
                <div className="social-icons">
                    <SocialIcon url="https://www.facebook.com/artwriteproductions" styles="fill:black!important;"/>
                    <SocialIcon url="https://www.linkedin.com/company/9729956"/>
                    <SocialIcon url="mailto:jtiller@adaptedclassics.com"/>
                </div>
                <p className="copyright">&copy; {new Date().getFullYear()} ArtWrite Productions</p>
                <p className="site-design">Site design by Paul Tiller</p>
            </footer>
        )
    }
}
