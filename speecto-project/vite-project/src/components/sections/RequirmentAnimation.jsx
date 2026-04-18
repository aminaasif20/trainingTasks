import React from "react";
import womanStanding from "../../assets/asset/fman2LightVector.webp";
import man1 from "../../assets/asset/man1LightVector.webp";
import plant from "../../assets/asset/plantVectorLight.webp";
import clip from "../../assets/asset/clipVector.webp";
import chatBubble from "../../assets/asset/contactUsAnimateMessage.webp";
import windowBlind from "../../assets/asset/windowVectorLight.webp";
import paperLeft from "../../assets/asset/copyVectorLight.webp";
import paperRight from "../../assets/asset/copyVectorLight1.webp";
import "./Sections.css";
const RequirmentAnimation = () => {
  return (
    <div className="lg:w-1/2 relative lg:sticky lg:top-32 flex justify-center">
      <div className="flex items-start  justify-center h-[350px] lg:mt-32 w-full lg:w-[500px]">
        <div className="req-animation-scaler">
          <div className="scene-wrapper">
            <div className="scene-container">
              {/* Background Elements */}
              <img
                src={windowBlind}
                className="lg:left-80  left-58 asset window-blind"
                alt="window blinds"
              />

              <img
                src={paperLeft}
                className=" asset paper-left"
                alt="floating paper"
              />
              <img
                src={paperLeft}
                className="asset paper-left-top"
                alt="floating paper"
              />
              <img
                src={paperRight}
                className="asset top-40 left-[-40%] lg:paper-right"
                alt="floating paper"
              />

              {/* CSS Clock (Asset not provided, drawn with CSS) */}
              <div className="css-clock-s   lg:css-clock">
                <div className="clock-hand minute"></div>
                <div className="clock-hand hour"></div>
              </div>

              <img
                src={chatBubble}
                className="   chat-bubble bubble-left"
                alt="chat"
              />
              <img
                src={chatBubble}
                className=" chat-bubble bubble-right"
                alt="chat"
              />

              <div className="giant-clipboard1 giant-clipboard">
                <img src={clip} className="clipboard-clip" alt="clip" />

                <div className="clipboard-paper">
                  <div className="placeholder-box-top"></div>

                  <div className="checklist-item">
                    <div className="lines">
                      <div className="checklist-line"></div>
                      <div className="checklist-line"></div>
                    </div>
                    <div className="checkbox checked">✓</div>
                  </div>
                  <div className="checklist-item">
                    <div className="lines">
                      <div className="checklist-line"></div>
                      <div className="checklist-line"></div>
                    </div>
                    <div className="checkbox checked">✓</div>
                  </div>
                  <div className="checklist-item">
                    <div className="lines">
                      <div className="checklist-line"></div>
                      <div className="checklist-line"></div>
                    </div>
                    <div className="checkbox checked"></div>
                  </div>
                  <div className="checklist-item">
                    <div className="lines">
                      <div className="checklist-line"></div>
                      <div className="checklist-line"></div>
                    </div>
                    <div className="checkbox checked"></div>
                  </div>

                  <div className=" placeholder-box-bottom"></div>
                </div>
              </div>

              {/* <img
                src={man1}
                className="lg:top-[40%] lg:h-64 lg:w-32 z-20 "
                alt="man1"
              /> */}

              <img
                src={womanStanding}
                className="h-[170px] left-20 top-55 lg:h-[200px] lg:left-[42%]
                lg:top-[38%] z-20 relative lg:asset lg:woman-standing"
                alt="woman standing"
              />
              <img
                src={man1}
                className="left-[-25%] bottom-7 h-[250px] lg:h-[300px] lg:left-[7%]
                lg:top-[-23%] z-20 relative lg:asset lg:woman-standing"
                alt="woman standing"
              />
              {/* <img
                src={deskTeam}
                className="asset desk-team"
                alt="team at desk"
              /> */}
              <img
                src={plant}
                className="bottom-15 right-70 
                lg:bottom-30 z-10 lg:left-[-2%]
                 asset lg:plant1"
                alt="plant in vase"
              />

              <div className="mt-4 floor-lines">
                <div className="floor-line main"></div>
                <div className="floor-line shadow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequirmentAnimation;
