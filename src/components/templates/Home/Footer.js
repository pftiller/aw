import React from 'react';
import { Picture } from 'react-responsive-picture';
import { SocialIcon } from 'react-social-icons';

export class Footer extends React.Component {
    render() {
        return(
            <footer>
                    < Picture
                        className = "logo-footer"
                        alt = "ArtWrite Productions Logo"
                        sources = {
                            [{
                                    srcSet: "/images/artwrite-logo.png",
                                },
                                {
                                    srcSet: "/images/artwrite-logo.webp",
                                    type: "image/webp"
                                }
                            ]
                        }
                    />
                <div className="social-icons">
                    <SocialIcon url="https://www.facebook.com/artwriteproductions" styles="fill:black!important;"/>
                    <SocialIcon url="https://www.linkedin.com/company/9729956"/>
                    <SocialIcon url="mailto:jtiller@adaptedclassics.com"/>
                </div>
                <p className="copyright">&copy; {new Date().getFullYear()} ArtWrite Productions</p>
                <p className="site-design">Site design by <a className="unstyled-links" href="https://www.linkedin.com/in/paultiller/" target="_blank" rel="noopener noreferrer">Paul Tiller</a></p>
            </footer>
        )
    }
}
