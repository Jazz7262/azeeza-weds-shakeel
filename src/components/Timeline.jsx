import React, { useCallback } from "react";
import "../styles/Timeline.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import timelineParticlesConfig from "../ts-particles-config-files/timeline-particles-config";

function Timeline() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
      // <section id="timeline">
      //   <Particles
      //     id="timeline-ts-particles"
      //     init={particlesInit}
      //     options={timelineParticlesConfig}
      //   ></Particles>
      //   <div className="single-timeline">
      //     <h1 className="inshaallaah">Inshaallaah ...</h1>

      //     <div className="wrapper" data-aos="fade-up" data-aos-delay="100">
      //       <div className="content">
      //         <h1>Nikaah</h1>
      //         <p>
      //           On Thursday, 02<sup>nd</sup> June, 2024,
      //           <br />
      //           22<sup>nd</sup> Zil-Qaida, 1445 Hijri,
      //           <br />
      //           Time: 12:30 PM.
      //         </p>

      //         <h2>Nikaah At:</h2>
      //         <p>
      //           Masjid-e-Chanda Hussaini Roza,
      //           <br /> Adoni.
      //         </p>

      //         <h2>Valima Lunch Follows:</h2>
      //         <p>
      //           Mehboobia Palace,
      //           <br /> Musheerabad Main Road,
      //           <br /> SKD Colony,Adoni.
      //           {/* <br /> Kavadiguda, Hyderabad
      //           <br /> Telangana - 500020. */}
      //           <br /> Time: 02:00 PM.
      //         </p>
      //       </div>
      //     </div>
      //   </div>
      // </section>

      <section id="timeline">
          <Particles
              id="timeline-ts-particles"
              init={particlesInit}
              options={timelineParticlesConfig}
          ></Particles>
          <div className="multi-timeline">
              <h1 className="inshaallaah">Inshaallaah ...</h1>
              <div className="wrapper">
                  {/* shukrana excluded */}
                  <>
                      <div className="row">
                          <div
                              className="col-lg-6 left next"
                              data-aos="fade-down"
                              data-aos-offset="200"
                          >
                              <h1>Nikaah</h1>
                              <p>
                                  On Sunday, 06<sup>th</sup> April, 2025,
                                  <br />
                                  07<sup>th</sup> Shawwal-ul-Mukarram, 1446
                                  Hijri,
                                  <br />
                                  Time: 01:45 PM.
                              </p>

                              <h2>Venue:</h2>
                              <p>
                                  KKB Function Hall,
                                  <br /> NGO's Colony,
                                  <br /> Adoni.
                              </p>
                          </div>
                          <div
                              className="col-lg-6 right next"
                              data-aos="fade-down"
                              data-aos-offset="200"
                          ></div>
                      </div>
                      <div className="row">
                          <div
                              className="col-lg-6 left next"
                              data-aos="fade-down"
                              data-aos-offset="200"
                              data-aos-delay="100"
                          ></div>
                          <div
                              className="col-lg-6 right next"
                              data-aos="fade-down"
                              data-aos-offset="200"
                              data-aos-delay="100"
                          >
                              <h1>Valima</h1>
                              <p>
                                  On Monday, 07<sup>th</sup> April, 2025,
                                  <br />
                                  08<sup>th</sup> Shawwal-ul-Mukarram, 1446
                                  Hijri,
                                  <br />
                                  Time: 02:00 PM.
                              </p>

                              <h2>Venue:</h2>
                              <p>
                                  KKB Function Hall,
                                  <br /> NGO's Colony,
                                  <br /> Adoni.
                              </p>
                          </div>
                      </div>
                  </>
              </div>
          </div>
      </section>
  );
}

export default Timeline;
