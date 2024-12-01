import React from "react";
import Link from "next/link";

const Pricing = ()=>{
    return(
        <section className="pricing padding-top padding-bottom">
        <div className="section-header section-header--max50">
          <h2 className="mb-15 mt-minus-5">Our <span>pricings </span>plan</h2>
          <p>Dont Miss Out on the Opportunity to Elevate Your Trading Game. Choose Your Plan Today and Start Winning.</p>
        </div>
        <div className="container">
          <div className="pricing__wrapper">
            <div className="row g-4 align-items-center">
              <div className="col-md-6 col-lg-4">
                <div className="pricing__item" data-aos="fade-right" data-aos-duration="1000">
                  <div className="pricing__item-inner">
                    <div className="pricing__item-content">
    
                      {/* <!-- pricing top part --> */}
                      <div className="pricing__item-top">
                        <h6 className="mb-15">Basic</h6>
                        <h3 className="mb-25">$99/<span>Monthly</span> </h3>
                        <div className="slogan-price">Start Small. Grow Big.</div>

                      </div>
    
                      {/* <!-- pricing middle part --> */}
                      <div className="pricing__item-middle">
                        <ul className="pricing__list">
                          <li className="pricing__list-item"><span><img src="/images/icon/check.svg" alt="check"
                                className="dark"/></span>
                            Join Telegram channel</li>
                          <li className="pricing__list-item"><span><img src="/images/icon/check.svg" alt="check"
                                className="dark"/></span>
                            Access the first part of coaching</li>
                          <li className="pricing__list-item"><span><img src="/images/icon/check.svg" alt="check"
                                className="dark"/></span>
                            Basic Guides and trade concepts documents</li>
                          <li className="pricing__list-item"><span><img src="/images/icon/check.svg" alt="check"
                                className="dark"/></span>
                            Live sessions for the first coaching part</li>
                            <li className="pricing__list-item"><span><img src="/images/icon/check.svg" alt="check"
                                className="dark"/></span>
                            24/7 technical support </li>
                        </ul>
    
                      </div>
    
                      {/* <!-- pricing bottom part --> */}
                      <div className="pricing__item-bottom">
                        <Link href="signup" className="trk-btn trk-btn--outline">Choose Plan</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="pricing__item " data-aos="fade-up" data-aos-duration="1000">
                  <div className="pricing__item-inner active">
                    <div className="pricing__item-content">
    
                      {/* <!-- pricing top part --> */}
                      <div className="pricing__item-top">
                        <h6 className="mb-15">standard</h6>
                        <h3 className="mb-25">$149/<span>Monthly</span> </h3>
                        <div className="slogan-price">The Foundation for Success.</div>

                      </div>
    
                      {/* <!-- pricing middle part --> */}
                      <div className="pricing__item-middle">
                        <ul className="pricing__list">
                          <li className="pricing__list-item"><span><img src="/images/icon/check.svg" alt="check"
                                className="dark"/></span>
                            ALL basic plan features</li>
                          <li className="pricing__list-item"><span><img src="/images/icon/check.svg" alt="check"
                                className="dark"/></span>
                          Access the second part of coaching</li>
                         
                          <li className="pricing__list-item"><span><img src="/images/icon/check.svg" alt="check"
                                className="dark"/></span>
                            VIP signal Telegram</li>
                         
                            <li className="pricing__list-item"><span><img src="/images/icon/check.svg" alt="check"
                                className="dark"/></span>
                            Pack indicators</li>
                          <li className="pricing__list-item"><span><img src="/images/icon/check.svg" alt="check"
                                className="dark"/></span>
                            Creation + verification of device accounts </li>
                          <li className="pricing__list-item"><span><img src="/images/icon/check.svg" alt="check"
                                className="dark"/></span>
                            Sentiment and psychology trading sessions</li>
                            <li className="pricing__list-item"><span><img src="/images/icon/check.svg" alt="check"
                                className="dark"/></span>
                            Live sessions for the second coaching part</li>


                            <li className="pricing__list-item"><span><img src="/images/icon/check.svg" alt="check"
                                className="dark"/></span>
                            Trading live with expert mentors</li>

                        </ul>
    
                      </div>
    
                      {/* <!-- pricing bottom part --> */}
                      <div className="pricing__item-bottom">
                        <Link href="signup" className="trk-btn trk-btn--outline active">Choose Plan</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="pricing__item" data-aos="fade-left" data-aos-duration="1000">
                  <div className="pricing__item-inner">
                    <div className="pricing__item-content">
    
                      {/* <!-- pricing top part --> */}
                      <div className="pricing__item-top">
                        <h6 className="mb-15">Platinum </h6>
                        <h3 className="mb-25">$199/<span>Monthly</span> </h3>
                        <div className="slogan-price">Your Gateway to Unlimited Possibilities.</div>
                      </div>
    
                      {/* <!-- pricing middle part --> */}
                      <div className="pricing__item-middle">
                        <ul className="pricing__list">

                        <li className="pricing__list-item"><span><img src="/images/icon/check.svg" alt="check"
                                className="dark"/></span>
                            All standard plan features</li>

                          <li className="pricing__list-item"><span><img src="/images/icon/check.svg" alt="check"
                                className="dark"/></span>
                            Account Management</li>
                          <li className="pricing__list-item"><span><img src="/images/icon/check.svg" alt="check"
                                className="dark"/></span>
                            Full access to all coaching videos </li>
                          <li className="pricing__list-item"><span><img src="/images/icon/check.svg" alt="check"
                                className="dark"/></span>
                            One-on-One consulting</li>
                          <li className="pricing__list-item"><span><img src="/images/icon/check.svg" alt="check"
                                className="dark"/></span>
                            Risk management account (funded/real)</li>
                            <li className="pricing__list-item"><span><img src="/images/icon/check.svg" alt="check"
                                className="dark"/></span>
                            1 to 1 coaching (private room)</li>


                            <li className="pricing__list-item"><span><img src="/images/icon/check.svg" alt="check"
                                className="dark"/></span>
                            Access all parts of coaching</li>
                            <li className="pricing__list-item"><span><img src="/images/icon/check.svg" alt="check"
                                className="dark"/></span>
                            Crafting custom indicators </li>
                            <li className="pricing__list-item"><span><img src="/images/icon/check.svg" alt="check"
                                className="dark"/></span>
                            Pack of trading videos by experts</li>
                            
                        








                        </ul>
    
                      </div>
    
                      {/* <!-- pricing bottom part --> */}
                      <div className="pricing__item-bottom">
                        <Link href="signup" className="trk-btn trk-btn--outline">Choose Plan</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pricing__shape">
          <span className="pricing__shape-item pricing__shape-item--1"> <span></span> </span>
          <span className="pricing__shape-item pricing__shape-item--2"> <img src="/images/icon/1.png" alt="shape-icon"/>
          </span>
        </div>
      </section>
    )
}
export default Pricing;