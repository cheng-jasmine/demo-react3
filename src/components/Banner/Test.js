import React, { Component } from 'react';
import Banner from "./index"
import img1 from "./assets/1.jpeg"
import img2 from "./assets/2.jpeg"
import img3 from "./assets/3.jpeg"

class Test extends Component {
    render() {
        return (
            <div className='container'>
                <Banner imgSrcs={[img1, img2, img3]} />
            </div>
        );
    }
}

export default Test;