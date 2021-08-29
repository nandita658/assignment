import React from 'react';

import './Main.css';

import firstImg from '../images/Image 6@1X.png';
import secImg from '../images/Image 1@1X.png';
import thirdImg from '../images/Image 4@1X.png';
import fourthImg from '../images/Image 5@1X.png';
import fifthImg from '../images/Image 3@1X.png';
import circle from '../images/Ellipse 1@1X.png';
import blockCloud from '../images/Path 3@1X.png';

const Main = () => {
    return (
        <body>

            <section class="slideshow">
                <img class="slideshowImage" src={circle} />

                <ul class="navigation">

                    <li class="navigation-item active">
                        <span class="rotate-holder"></span>
                        <span class="background-holder"><img src={firstImg} /></span>
                        
                    </li>
                    <li class="navigation-item">
                        <span class="rotate-holder"></span>
                        <span class="background-holder"><img src={secImg} /></span>
                    </li>

                    <li class="navigation-item">
                        <span class="rotate-holder"></span>
                        <span class="background-holder"><img src={thirdImg} /></span>
                    </li>

                    <li class="navigation-item">
                        <span class="rotate-holder"></span>
                        <span class="background-holder"><img src={fourthImg} /></span>
                    </li>

                    <li class="navigation-item">
                        <span class="rotate-holder"></span>
                        <span class="background-holder"><img src={fifthImg} /></span>
                    </li>

                    <li class="navigation-item">
                        <span class="rotate-holder"></span>
                        <span class="background-holder"><img src={firstImg} /></span>
                    </li>
                    <li class="navigation-item">
                        <span class="rotate-holder"></span>
                        <span class="background-holder"><img src={secImg} /></span>
                    </li>

                    <li class="navigation-item">
                        <span class="rotate-holder"></span>
                        <span class="background-holder"><img src={thirdImg} /></span>
                    </li>

                    <li class="navigation-item">
                        <span class="rotate-holder"></span>
                        <span class="background-holder"><img src={fourthImg} /></span>
                    </li>

                    <li class="navigation-item">
                        <span class="rotate-holder"></span>
                        <span class="background-holder"><img src={fifthImg} /></span>
                    </li>

                </ul>

                <div className="detail">
                    <div class="detail-item">
                        <div class="headline">
                            <img src={blockCloud} />
                            <div class="text">
                                <h3>BTC</h3>
                                <p>Index Price : 19093.06</p>
                                <p>Mark Price : 19093.61</p>
                                <p>(Prep)</p>
                            </div>
                        </div>
                    </div>
                    <div class="detail-item">
                        <div class="headline">
                            <img src={blockCloud} />
                            <div class="text">
                                <h3>YFII</h3>
                                <p>Index Price : 1799.16</p>
                                <p>Mark Price : 1799.35</p>
                                <p>(Prep)</p>
                            </div>
                        </div>
                    </div>
                    <div class="detail-item">
                        <div class="headline">
                            <img src={blockCloud} />
                            <div class="text">
                                <h3>YFI</h3>
                                <p>Index Price : 25293.97</p>
                                <p>Mark Price : 25294.45</p>
                                <p>(Prep)</p>
                            </div>
                        </div>
                    </div>
                    <div class="detail-item">
                        <div class="headline">
                            <img src={blockCloud} />
                            <div class="text">
                                <h3>LINK</h3>
                                <p>Index Price : 12.500</p>
                                <p>Mark Price : 12.500</p>
                                <p>(Prep)</p>
                            </div>
                        </div>
                    </div>
                    <div class="detail-item">
                        <div class="headline">
                            <img src={blockCloud} />
                            <div class="text">
                                <h3>ETH</h3>
                                <p>Index Price : 580.49</p>
                                <p>Mark Price : 580.68</p>
                                <p>(Prep)</p>
                            </div>
                        </div>
                    </div>
                    <div class="detail-item">
                        <div class="headline">
                            <img src={blockCloud} />
                            <div class="text">
                                <h3>BTC</h3>
                                <p>Index Price : 19093.06</p>
                                <p>Mark Price : 19093.61</p>
                                <p>(Prep)</p>
                            </div>
                        </div>
                    </div>
                    <div class="detail-item">
                        <div class="headline">
                            <img src={blockCloud} />
                            <div class="text">
                                <h3>YFII</h3>
                                <p>Index Price : 1799.16</p>
                                <p>Mark Price : 1799.35</p>
                                <p>(Prep)</p>
                            </div>
                        </div>
                    </div>
                    <div class="detail-item">
                        <div class="headline">
                            <img src={blockCloud} />
                            <div class="text">
                                <h3>YFI</h3>
                                <p>Index Price : 25293.97</p>
                                <p>Mark Price : 25294.45</p>
                                <p>(Prep)</p>
                            </div>
                        </div>
                    </div>
                    <div class="detail-item">
                        <div class="headline">
                            <img src={blockCloud} />
                            <div class="text">
                                <h3>LINK</h3>
                                <p>Index Price : 12.500</p>
                                <p>Mark Price : 12.500</p>
                                <p>(Prep)</p>
                            </div>
                        </div>
                    </div>
                    <div class="detail-item">
                        <div class="headline">
                            <img src={blockCloud} />
                            <div class="text">
                                <h3>ETH</h3>
                                <p>Index Price : 580.49</p>
                                <p>Mark Price : 580.68</p>
                                <p>(Prep)</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </body>
    );
}

export default Main;