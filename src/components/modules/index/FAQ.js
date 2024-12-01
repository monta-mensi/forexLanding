/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Accordion from "react-bootstrap/Accordion";

const faqdata = [
  {
    question: "What is Forex Trading?",
    answer:
      "Forex trading, or foreign exchange trading, is the act of buying and selling currencies on the global financial market. Traders profit by speculating on currency price movements. The Forex market operates 24 hours a day, five days a week, and is the largest financial market in the world.",
  },
  {
    question: "How do I start trading Forex?",
    answer:
      "To start trading Forex, you'll need to open an account with a Forex broker, deposit funds, and access a trading platform like MetaTrader. Before you begin, it’s essential to learn about the market, understand basic trading strategies, and practice using a demo account to avoid risks associated with real money trading.",
  },
  {
    question: "What is GOLDOR, and how can it help me with Forex trading?",
    answer:
      "GOLDOR is a comprehensive Forex trading platform designed to help traders of all levels improve their skills, strategies, and market knowledge. Our platform offers educational materials, market analysis, trading signals, and personalized consulting to help you become a more successful Forex trader.",
  },
  {
    question: "What are the different subscription plans offered by GOLDOR?",
    answer:
      "GOLDOR offers three subscription plans, the first is the Basic Plan Ideal for beginners, the Standard Plan for more experienced traders, and the Premium Plan Tailored for advanced traders.",
  },
  {
    question: "How can I pay for my GOLDOR subscription?",
    answer:
      "Bank Transfer,USDT (Tether),D17 and Minute Mandate are all accepted payment methods by GOLDOR.",
  },
  
];

const   Faq = () => {
  return (
    <section className="faq padding-top padding-bottom of-hidden">
      <div className="section-header section-header--max65">
        <h2 className="mb-15 mt-minus-5">
          <span>Frequently</span> Asked questions
        </h2>
        <p>
          Hey there! Got questions? We've got answers for all the deets. Still not satisfied? Hit us up.
        </p>
      </div>
      <div className="container">
        <div className="faq__wrapper">
          <div className="row g-5 align-items-center justify-content-between">
            <div className="col-lg-6">
              <Accordion className="accordion--style1">
                <div className="row">
                    {
                        faqdata.map((data, index)=>(
                          <div key={index} className="col-12">
                          <Accordion.Item className="accordion__item" eventKey={index}>
                            <div className="accordion__header">
                              <Accordion.Button className="accordion__button">
                                <span className="accordion__button-content">
                                  {data.question}
                                </span>
                              </Accordion.Button>
                            </div>
                            <Accordion.Body className="accordion__body">
                              <p className="mb-15">
                                {data.answer}
                              </p>
                            </Accordion.Body>
                          </Accordion.Item>
                        </div>
                        ))
                    }
                </div>
              </Accordion>
            </div>
            <div className="col-lg-6">
              <div
                className="faq__thumb faq__thumb--style1"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <img className="dark br-56" style={{borderRadius: '56px'}} src="/images/others/faq-dark.jpg" alt="faq-thumb" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="faq__shape faq__shape--style1">
        <span className="faq__shape-item faq__shape-item--1">
          <img src="/images/others/2.png" alt="shpae-icon" />
        </span>
      </div>
    </section>
  );
};
export default Faq;
