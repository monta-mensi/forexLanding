/* eslint-disable react/no-unescaped-entities */
import { useRouter } from "next/router";

function Roadmap() {
  const route = useRouter()
  return (
    <section className="roadmap roadmap--style1 padding-top  padding-bottom bg-color" id="roadmap">
    <div className="container">
      <div className="section-header section-header--max50">
        <h2 className="mb-15 mt-minus-5"><span> roadmap</span></h2>
        <p className="roadmap__subtitle">Your Journey to Forex Mastery.</p>
      </div>

      <div className="roadmap__wrapper">
        <div className="row gy-4 gy-md-0 gx-5">
          <div className="col-md-6 offset-md-6">
            <div className="roadmap__item ms-md-4 aos-init aos-animate" data-aos="fade-left" data-aos-duration="800">
              <div className="roadmap__item-inner">
                <div className="roadmap__item-content">
                  <div className="roadmap__item-header">
                    <h3>Foundation</h3>
                    <span>P1</span>
                  </div>
                  <p style={{color: 'whitesmoke'}}>Get to Know Us:</p><p>Discover our platform and its commitment to empowering traders.</p>
                  <p style={{color: 'whitesmoke'}}>Learn the Basics:</p><p>Grasp the fundamentals of forex trading, including market dynamics, technical analysis, and risk management.</p>
                </div>
              </div>

            </div>
          </div>
          <div className="col-md-6">
            <div className="roadmap__item roadmap__item--style2 ms-auto me-md-4 aos-init aos-animate" data-aos="fade-right"
              data-aos-duration="800">
              <div className="roadmap__item-inner">
                <div className="roadmap__item-content">
                  <div className="roadmap__item-header">
                    <h3>Start Your Trading Journey</h3>
                    <span>P2</span>
                  </div>
                  <p style={{color: 'whitesmoke'}}>Subscribe and Access:</p><p>Sign up for our platform and gain access to a wealth of educational resources.</p>
                  <p style={{color: 'whitesmoke'}}>Begin Your Learning:</p><p>Immerse yourself in our comprehensive courses and tutorials.
                  </p>

                </div>
              </div>

            </div>
          </div>
          <div className="col-md-6 offset-md-6">
            <div className="roadmap__item ms-md-4 aos-init" data-aos="fade-left" data-aos-duration="800">
              <div className="roadmap__item-inner">
                <div className="roadmap__item-content">
                  <div className="roadmap__item-header">
                    <h3>Practice Makes Perfect</h3>
                    <span>P3</span>
                  </div>
                  <p style={{color: 'whitesmoke'}}>Apply Your Knowledge:</p><p>Put your learning into practice with our interactive exercises and simulations.
                  </p>
                  <p style={{color: 'whitesmoke'}}>Build Confidence:</p><p>Gain hands-on experience in a risk-free environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="roadmap__item roadmap__item--style2 ms-auto me-md-4 aos-init" data-aos="fade-right"
              data-aos-duration="800">
              <div className="roadmap__item-inner">
                <div className="roadmap__item-content">
                  <div className="roadmap__item-header">
                    <h3>Develop Your Strategy
                    </h3>
                    <span>P4</span>
                  </div>
                  <p style={{color: 'whitesmoke'}}>Customize Your Approach:</p><p>Learn to identify profitable opportunities and develop your unique trading strategy.

                  </p>
                  <p style={{color: 'whitesmoke'}}>Master the Art of Analysis:</p><p>Hone your skills in technical and fundamental analysis.
                  
                  </p>
                </div>
              </div>

            </div>
          </div>
          <div className="col-md-6 offset-md-6">
            <div className="roadmap__item ms-md-4 aos-init" data-aos="fade-left" data-aos-duration="800">
              <div className="roadmap__item-inner">
                <div className="roadmap__item-content">
                  <div className="roadmap__item-header">
                    <h3>Enter the Real Market</h3>
                    <span>P5</span>
                  </div>
                  <p style={{color: 'whitesmoke'}}>Take the Leap:</p><p>Apply your knowledge and strategies to real-world trading.
                  </p>
                  <p style={{color: 'whitesmoke'}}>Manage Your Risks:</p><p>Implement effective risk management techniques to protect your capital.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="roadmap__item roadmap__item--style2 ms-auto me-md-4 aos-init" data-aos="fade-right"
              data-aos-duration="800">
              <div className="roadmap__item-inner">
                <div className="roadmap__item-content">
                  <div className="roadmap__item-header">
                    <h3>Continuous Growth
                    </h3>
                    <span>P6</span>
                  </div>
                  <p style={{color: 'whitesmoke'}}>Learn from Experience:</p><p>Analyze your trades and identify areas for improvement.
                  </p>
                  <p style={{color: 'whitesmoke'}}>Adapt and Evolve:</p><p>Stay updated on market trends and refine your strategies accordingly.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="section-header section-header--max50">
        <br/>
        <br/>

        <p className="roadmap__subtitle">Your Path to Financial Freedom Starts step by step.</p>
      </div>





    </div>
    <div className="roadmap__shape">
      <span className="roadmap__shape-item roadmap__shape-item--1"> <span></span> </span>
      <span className="roadmap__shape-item roadmap__shape-item--2"> <img src="/images/icon/1.png" alt="shape-icon"/>
      </span>
    </div>
  </section>
  );
}

export default Roadmap;
