/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
function Services() {

  return (
    <section className="service padding-top padding-bottom">
      <div className="section-header section-header--max50">
        <h2 className="mb-15 mt-minus-5"><span>services </span>We offer</h2>
        <p>Our platform offers a comprehensive suite of services designed to meet the needs of forex traders at every stage of their journey</p>
      </div>
      <div className="container">
        <div className="service__wrapper">
          <div className="row g-4 align-items-center">
            <div className="col-sm-6 col-md-6 col-lg-4">
              <div className="service__item service__item--style1" data-aos="fade-up" data-aos-duration="800">
                <div className="service__item-inner text-center">
                  <div className="service__item-thumb mb-30 tradingsignal ">
                    <img className="dark tradingsignal" src="/images/service/tradingSignal-dark.jpeg" alt="service-icon" />
                  </div>
                  <div className="service-content">
                    <h5 className="mb-15"> <Link className="stretched-link" href="service-details">Trading Signals</Link> </h5>
                    <p className="mb-0">Get daily trade signals and setups to help you make informed decisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="service__item service__item--style1" data-aos="fade-up" data-aos-duration="1000">
                <div className="service__item-inner text-center">
                  <div className="service__item-thumb mb-30 tradingsignal">
                    <img className="dark tradingsignal" src="/images/service/eduRessource-dark.jpeg" alt="service-icon" />
                  </div>
                  <div className="service-content">
                    <h5 className="mb-15"> <Link className="stretched-link" href="service-details"> Educational Resources</Link> </h5>
                    <p className="mb-0">Access in-depth tutorials, webinars, and forex courses to enhance your trading skills.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="service__item service__item--style1" data-aos="fade-up" data-aos-duration="1200">
                <div className="service__item-inner text-center">
                  <div className="service__item-thumb mb-30 marketanalysis">
                    <img className="dark marketanalysis" src="/images/service/marketanalysis-dark.png" alt="service-icon"/>
                  </div>
                  <div className="service__content">
                    <h5 className="mb-15"> <Link className="stretched-link" href="service-details">Market Analysis</Link> </h5>
                    <p className="mb-0">Stay ahead with our expert technical and fundamental analysis, keeping you updated on market trends.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="service__item service__item--style1" data-aos="fade-up" data-aos-duration="800">
                <div className="service__item-inner text-center">
                  <div className="service__item-thumb mb-30 tradingsignal">
                    <img className="dark tradingsignal" src="/images/service/personsupport-dark.jpeg" alt="service-icon" />
                  </div>
                  <div className="service-content">
                    <h5 className="mb-15"> <Link className="stretched-link" href="service-details">Personalized Support </Link>
                    </h5>
                    <p className="mb-0">Receive one-on-one coaching or support, tailored to your specific trading needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="service__item service__item--style1" data-aos="fade-up" data-aos-duration="1000">
                <div className="service__item-inner text-center">
                  <div className="service__item-thumb mb-30 tradingsignal">
                    <img className="dark tradingsignal" src="/images/service/riskmanagement-dark.jpeg" alt="service-icon" />
                  </div>
                  <div className="service-content">
                    <h5 className="mb-15"> <Link className="stretched-link" href="service-details">Risk Management Tools</Link> </h5>
                    <p className="mb-0">Use advanced tools like position size calculators and risk/reward ratio analyzers to manage your trades more effectively.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-sm-6 col-lg-4">
              <div className="service__item service__item--style1" data-aos="fade-up" data-aos-duration="1200">
                <div className="service__item-inner text-center">
                  <div className="service__item-thumb mb-30">
                    <img className="dark" src="/images/service/6.png" alt="service-icon" />
                  </div>
                  <div className="service-content">
                    <h5 className="mb-15"> <Link className="stretched-link" href="service-details">Marketing consulting</Link>
                    </h5>
                    <p className="mb-0">Hey! Just wanted to let you know that the price notification module processes is now
                      live!</p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
