import React from 'react';
let orange = './images/orange.png';
export class About extends React.Component {
    render(){
        let styles = {
            background: `url(${orange}) center center / 100% 97.5% no-repeat`
        }
        return(
            <div id="about" style={styles}>
                <h2 className="brown">About ArtWrite Productions</h2>
                <img src="/images/paul-and-jerry.jpg" className="paul-and-jerry" alt=""/>
                <p>ArtWrite Productions is a father-son business collaboration founded by Jerome and Paul Tiller in 2003. Our mission is to help youth enjoy formal education and gravitate toward self-education by slipping fun into lesson materials and literature. We believe that if young people were to find more fun in lessons books and pleasure books at their reading level, like the fun they once found in the picture books of their childhood, they would be drawn to read more.</p>
                <p>ArtWrite Productions uses humorous storytelling to enhance lessons in the natural and social sciences and, through its imprint <a href="https://adaptedclassics.com/">Adapted Classics</a>,  gallery-worthy illustrations to introduce young people to stories by some of the world’s greatest authors. Our books capture and hold young readers’ attention by being fun and entertaining, while at the same time challenging them to think and learn.</p>
            </div>
        )
    }
}