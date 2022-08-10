import React from "react";
import "../sass/styles.scss";
import Layout from "../components/layout";

import Logo from "../images/home/logo.png";
import Server from "../images/home/server.png";
import fourSectionImg from "../images/home/fourthSection.png";

import WhyCard from "../components/cards/whyCard/index.jsx";
import GetInTouch from "../components/buttons/getInTouch/index";

import Icon1 from "../images/home/firstIcon.png";
import Icon2 from "../images/home/secondIcon.png";
import Icon3 from "../images/home/thirdIcon.png";

const monika = () => {
  return (
    <Layout>
      <div className="Home">
        <section className="Home__firstSection">
          <div className="ed-grid s-grid-1 s-center">
            <div className="Home__firstSection__logo">
              <img src={Logo} alt="logo empresa" />
            </div>
            <div className="Home__firstSection__text ">
              <h1 className="s-center">
                THE BEST SECURITY SOLUTIONS YOU HAVENT'T HEARD OF. YET
              </h1>
            </div>
          </div>
        </section>

        <section className="Home__secondSection">
          <div className="secondSectionPDiv">
            <p>
              When it comes to <span>security solutions</span>, choosing between{" "}
              <span>
                larger, established firms or smaller, more up-and-coming
                startups and boutiques
              </span>{" "}
              is a decision that can leave you reeling.
            </p>
          </div>
        </section>

        <section className="Home__thirdSection">
          <div className="ed-grid s-grid-1 lg-grid-2">
            <div>
              <div className="s-mb-4">
                <div className="upperTitle">
                  <h2>WE BELIEVE IN THE</h2>
                </div>
                <div className="lowerTitle">
                  <h2>
                    <span className="power">POWER</span> OF{" "}
                    <span className="niche">NICHE.</span>
                  </h2>
                </div>
              </div>
              <div className="Home__thirdSection__text">
                <p>
                  Determined start-ups, and focused, boutique firms exist on the
                  cutting-edge of new developments, innovations, and ideas.{" "}
                  <span>These companies are built to go the extra mile.</span>{" "}
                  To do whatever it takes for their clients. To build{" "}
                  <span>lasting relationships</span> and{" "}
                  <span>bring tailored, next-level support.</span> The world of
                  security is vast, specialized, and wildly competitive. It can
                  be difficult to navigate your way through all the options
                  available to find the latest, greatest, and ultimately – right
                  solution for your needs.
                </p>
              </div>
            </div>
            <div></div>
          </div>
        </section>
        <div class="Home__thirdSection__img from-lg ">
          <img src={Server} />
        </div>

        <section className="Home__fourthSection">
          <img src={fourSectionImg} />
        </section>

        <section className="Home__fifthSection">
          <div className="Home__fifthSection_titleContainer s-mb-4">
            <div className="why">
              <h2>WHY</h2>
            </div>
            <div className="trackone">
              <h2>
                track<span>one</span>
              </h2>
            </div>
          </div>

          <div className="">
            <div className="ed-grid s-grid-1 lg-grid-3 s-mb-4">
              <WhyCard
                image={Icon1}
                text={
                  <>
                    "We sift through the noise to build a curated{" "}
                    <b>grouping of up-and-coming companies with bright ideas</b>{" "}
                    and something to prove."
                  </>
                }
              />
              <WhyCard
                image={Icon2}
                text={
                  <>
                    "Our digital market plays host to a{" "}
                    <b>
                      select group of individuals, startups, and boutique firms
                    </b>{" "}
                    in the <b>security space</b> with niche{" "}
                    <b>services, products, and expertise.</b>"
                  </>
                }
              />
              <WhyCard
                image={Icon3}
                text={
                  <>
                    "These agile, dedicated companies are ready to meet your{" "}
                    <b>specific needs</b> and take your business into new, more{" "}
                    <b>secure current and future states.</b>"
                  </>
                }
              />
            </div>
            <div className="s-main-center s-cross-center">
              <GetInTouch text="Get in touch" />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default monika;
