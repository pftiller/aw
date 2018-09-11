import React from 'react';

let pink = '/images/pink.png';
let styles = {
    background: `url(${pink}) center center / 100% 1450px no-repeat`
}
export class Books extends React.Component {
    render(){
        return(
            <div id="books" style={styles}>
                <h2 className="pink">Our Books</h2>
                <div className="book-details">
                    <h4 className="book-title">Sammy's Day at the Fair: The Digestive System</h4>
                    <h5><i>Featuring Gut Feelings and Reactions</i></h5>
                    <p>By Jerome Tiller - Illustrated by Paul Tiller</p>
                    <p className="inline left">ISBN: 1-59298-046-5</p>
                    <p className="inline right">Price: $15.95</p>
                </div>    
                <div className="book-covers">
                    <img src="./images/sammy-cover.jpg" className="cover" alt="Sammy's Day at the Fair - Available Now!" />
                    <a href="https://www.amazon.com/Sammys-Day-Fair-Digestive-Featuring/dp/1592980465/ref=sr_1_1?ie=UTF8&qid=1535398903&sr=8-1&keywords=sammy%27s+day+at+the+fair" target="_blank" rel="noopener noreferrer" className="buy-now">Buy Now</a>
                </div>
                <div className="synopsis">
                    <p><em>Sammy's Day at the Fair: The Digestive System introduces</em> middle readers to the human digestive system by blending a humorous story about a boy's eating adventures at a fair with an introductory lesson in biology and anatomy. Many <a href="/#reviews">nationally-recognized science and health teachers</a> have endorsed the accuracy of the information in the book, but they also like the creative and humorous way the technical information is presented. Besides providing an introductory lesson on the digestive organs and their functions, the book also explains the technical basis behind all those digestion-related reactions that kids (and adults) find so funny.This gut-reaction feature and the humorous story-line helps make learning science fun. Finally, to assist in the campaign against childhood obesity, the book carries a healthy-living message that promotes good nutrition and exercise.</p>
                    <div className="quote-snippets">
                        <img src='./images/svgs/start-quotes.svg' alt="Beginning Quotes" className="quote-marks for-books"/>
                        <p className="quote-books"><i>...Straightforward information on the digestive system at an intermediate level...deftly illustrated...as instructional and educational as it is enjoyable and reader engaging.</i></p>
                        <img src='./images/svgs/end-quotes.svg' alt="Closing Quotes" className="quote-marks for-books"/>
                        <p className="quote-source"><strong><i>- Midwest Book Review - Children's Bookwatch</i></strong></p>
                        <img src='./images/svgs/start-quotes.svg' alt="Beginning Quotes" className="quote-marks for-books"/>
                        <p className="quote-books"><i>Teachers are always looking for picture books that connect with curriculum. I think they would find this book very useful and appealing. It is well written, the pictures support the text and add interest and appeal, and it is timely given all the recent things said and written about the childhood obesity epidemic.</i></p>
                        <img src='./images/svgs/end-quotes.svg' alt="Closing Quotes" className="quote-marks for-books"/>
                        <p className="quote-source"><strong><i>- Barbara Geiger, President, Learning Explorations</i></strong></p>
                        </div>
                </div>
            </div>
        )
    }
}