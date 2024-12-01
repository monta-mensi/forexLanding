/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import CountUp from "react-countup";
function About() {
  return (
    <section className="about about--style1 ">
      <div className="container">
        <div className="about__wrapper">
          <div className="row gx-5  gy-4 gy-sm-0  align-items-center">
            <div className="col-lg-6">
              <div
                className="about__thumb pe-lg-5"
                data-aos="fade-right"
                data-aos-duration="800"
              >
                <div className="about__thumb-inner">
                  <div className="about__thumb-image floating-content">
                    <img
                      className="dark"
                      src="/images/about/1.png"
                      alt="about-image"
                    />
                    <div className="floating-content__top-left">
                      <div className="floating-content__item">
                        <h3>
                          {" "}
                          <span
                            className="purecounter"
                            data-purecounter-start="0"
                            data-purecounter-end="10"
                          >
                           <CountUp end ={8} duration={3} />
                          </span>
                          Years
                        </h3>
                        <p>Consulting Experience</p>
                      </div>
                    </div>
                    <div className="floating-content__bottom-right">
                      <div className="floating-content__item">
                        <h3>
                          {" "}
                          <span
                            className="purecounter"
                            data-purecounter-start="0"
                            data-purecounter-end="30"
                          >
                            <CountUp end ={25} duration={5} />
                          
                          </span>
                          K+
                        </h3>
                        <p>Satisfied Customers</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="about__content"
                data-aos="fade-left"
                data-aos-duration="800"
              >
                <div className="about__content-inner">
                  <h2>
                    Meet <span>our company</span> unless miss the opportunity{" "}
                  </h2>

                  <p className="mb-0">
                  Welcome to our platform, where passion for forex trading meets professional expertise. With over 8 years of experience in the forex market, we have built a community-driven platform designed to empower traders of all levels—whether you're just starting out or looking to sharpen your skills. Our mission is to provide you with the tools, knowledge, and support needed to succeed in the fast-paced world of forex trading.
We understand the complexities of trading and have developed a suite of services tailored to help you make informed decisions and grow as a trader. From real-time market data to expert analysis, personalized coaching, and exclusive trading signals, our platform is a one-stop solution for traders looking to excel.
What sets us apart is our commitment to your success. We don’t just offer tools; we provide a comprehensive ecosystem where you can learn, grow, and connect with like-minded traders. Our customer-centric approach ensures that we are with you every step of the way, offering dedicated support, advanced trading strategies, and educational resources that truly make a difference.
.{" "}
                  </p>
                  <Link href="about"
                    className="trk-btn trk-btn--border trk-btn--primary"
                  >
                    Explore More{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
