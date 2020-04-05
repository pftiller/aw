import React from 'react';
import Modernizr from '../../../../config/modernizr.config';
import { Picture } from 'react-responsive-picture';
let pink = '/images/pink.png';

export class Books extends React.Component {
    render(){
        let styles = {
            background: `url(${pink}) center center / 100% 98% no-repeat`
        }    
        return(
            <div id="books" style={styles}>
                <h2 className="pink">Our Books</h2>
                <div className="book-details">
                    <h4 className="book-title">Sammy's Day at the Fair: The Digestive System</h4>
                    <h5><i>Featuring Gut Feelings and Reactions</i></h5>
                    <p class="authors">By Jerome Tiller - Illustrated by Paul Tiller</p>
                </div>
                <div className="book-covers">
                <a href="https://library.biblioboard.com/viewer/06e6cd3f-e8bb-4ccb-8018-30815fadf779" target="_blank" rel="noopener" className="free-copy-link">
                < Picture
                    alt = "Free copy available"
                    className = "free-copy-badge"
                    sources = {
                        [{
                                srcSet: "/images/free-copy.png",
                            },
                            {
                                srcSet: "/images/free-copy.webp",
                                type: "image/webp"
                            }
                        ]
                    }
                    />
                    </a>
                    < Picture
                    alt = "Sammy's Day at the Fair - Available Now!"
                    className = "sammy-cover-books"
                    sources = {
                        [{
                                srcSet: "/images/sammy-cover-medal.jpg",
                            },
                            {
                                srcSet: "/images/sammy-cover-medal.webp",
                                type: "image/webp"
                            }
                        ]
                    }
                    />
                </div>
                <div className="purchase-links">
                    <p className="inline isbn">ISBN: 978-0977769391</p>
                    <p className="inline price">Price: $17.95</p>
                    <a href="https://www.amazon.com/Sammys-Day-Fair-Digestive-Featuring-dp-0977769399/dp/0977769399" target="_blank" rel="noopener noreferrer" price="17.95" className="buy-now inline right">Softcover</a>
                    <br className="optional-break"/>
                    <p className="inline isbn">ISBN: 978-0977769308</p>
                    <p className="inline price">Price: $3.99</p>
                    <a href="https://books.apple.com/us/book/sammys-day-at-the-fair/id1451766202" target="_blank" rel="noopener noreferrer" price="3.99" className="buy-now inline right">Apple Books</a>
                    <br className="optional-break"/>
                    <p className="inline isbn">ISBN: 978-0977769384</p>
                    <p className="inline price">Price: $3.99</p>
                    <a href="https://www.amazon.com/Sammys-Day-Fair-Digestive-Featuring-ebook/dp/B07SB64QGS/" target="_blank" rel="noopener noreferrer" price="3.99" className="buy-now inline right">Kindle Store</a>
                </div>    

                <div className="synopsis">
                    <p><em>Sammy's Day at the Fair: The Digestive System</em> introduces middle-grade readers to the human digestive system by blending a humorous story about a boy's eating adventures at a fair with an introductory lesson in biology and anatomy. Many <a href="/#reviews">nationally-recognized science and health teachers</a> have endorsed the accuracy of the information in the book, but they also like the creative and humorous way the technical information is presented. Besides providing an introductory lesson on the digestive organs and their functions, the book also explains the technical basis behind all those digestion-related reactions that kids (and adults) find so funny. This gut-reaction feature and the humorous story-line helps make learning science fun. Finally, to assist in the campaign against childhood obesity, the book carries a healthy-living message that promotes good nutrition and exercise.</p>
                    <br/>
                    <p><a href="https://www.storymonsters.com/book-briefs/2019-story-monsters-approved-winners-announced" target="_blank" rel="noopener">2019 Story Monsters Ink Approved</a> in three categories: Middle Grade (Ages 8-12) Non-Fiction, Middle Grade (Ages 8-12) Fiction, and Health and Wellness and <a href="https://mipa.org/midwest-book-awards/" target="_blank" rel="noopener">2019 Midwest Publishers Association Awards</a> : Finalist - Children’s Fiction — WINNER - Children’s Non-Fiction</p>
                    <div className="quote-snippets">
                        <img src='./images/svgs/start-quotes.svg' alt="Beginning Quotes" className="quote-marks opening for-books"/>
                        <p className="quote-books"><i>...Straightforward information on the digestive system at an intermediate level...deftly illustrated...as instructional and educational as it is enjoyable and reader engaging.</i></p>
                        <img src='./images/svgs/end-quotes.svg' alt="Closing Quotes" className="quote-marks closing for-books"/>
                        <p className="quote-source"><strong><i>- Midwest Book Review - Children's Bookwatch</i></strong></p>
                        <img src='./images/svgs/start-quotes.svg' alt="Beginning Quotes" className="quote-marks opening for-books"/>
                        <p className="quote-books"><i>Teachers are always looking for picture books that connect with curriculum. I think they would find this book very useful and appealing. It is well written, the pictures support the text and add interest and appeal, and it is timely given all the recent things said and written about the childhood obesity epidemic.</i></p>
                        <img src='./images/svgs/end-quotes.svg' alt="Closing Quotes" className="quote-marks closing for-books"/>
                        <p className="quote-source"><strong><i>- Barbara Geiger, President, Learning Explorations</i></strong></p>
                        </div>
                </div>
            </div>
        )
    }
}