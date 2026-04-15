import React from 'react';
import './Sections.css';

// Import your provided image assets
import womanStanding from '../../assets/asset/fman2LightVector.webp';
import man1 from '../../assets/asset/man1LightVector.webp';
import plant from '../../assets/asset/plantVectorLight.webp';
import clip from '../../assets/asset/clipVector.webp';
import chatBubble from '../../assets/asset/contactUsAnimateMessage.webp';
import windowBlind from '../../assets/asset/windowVectorLight.webp';
import paperLeft from '../../assets/asset/copyVectorLight.webp';
import paperRight from '../../assets/asset/copyVectorLight1.webp';

const Requirments = () => {
  return (
    <div className='requirements-section w-full overflow-x-hidden'>

      {/* Top header */}
      <div className="section-header">
        <div className="step-badge">1</div>
        <h2 className="step-title">REQUIREMENTS ENGINEERING</h2>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:items-start max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="w-full lg:w-1/2 relative lg:sticky top-32 lg:top-34 flex justify-center">
          <div className='flex items-start justify-center lg:mt-32 w-full max-w-[500px]'>
          <div className="scene-wrapper">
            <div className="scene-container">
              
              {/* Background Elements */}
              <img src={windowBlind} className="asset window-blind" alt="window blinds" />
              
              <img src={paperLeft} className="asset paper-left" alt="floating paper" />
              <img src={paperRight} className="asset paper-right" alt="floating paper" />
              
              {/* CSS Clock (Asset not provided, drawn with CSS) */}
              <div className="css-clock">
                <div className="clock-hand minute"></div>
                <div className="clock-hand hour"></div>
              </div>

              <img src={chatBubble} className="asset chat-bubble bubble-left" alt="chat" />
              <img src={chatBubble} className="asset chat-bubble bubble-right" alt="chat" />

              <div className="giant-clipboard">
                <img src={clip} className="clipboard-clip" alt="clip" />
                
                <div className="clipboard-paper">
                  <div className="box placeholder-box-top"></div>
                  
                  <div className="checklist-item">
                    <div className="lines"><div className="line"></div><div className="line"></div></div>
                    <div className="checkbox checked">✓</div>
                  </div>
                  <div className="checklist-item">
                    <div className="lines"><div className="line"></div><div className="line"></div></div>
                    <div className="checkbox checked">✓</div>
                  </div>
                  <div className="checklist-item">
                    <div className="lines"><div className="line"></div><div className="line"></div></div>
                    <div className="checkbox checked">✓</div>
                  </div>
                  <div className="checklist-item">
                    <div className="lines"><div className="line"></div><div className="line"></div></div>
                    <div className="checkbox checked"></div>
                  </div>
                 

                  <div className="box placeholder-box-bottom"></div>
                </div>
              </div>

              <img src={man1} className="asset man1" alt="man1"/>
              <img src={womanStanding} className="asset woman-standing" alt="woman standing" />
              {/* <img src={deskTeam} className="asset desk-team" alt="team at desk" /> */}
              <img src={plant} className="asset plant" alt="plant in vase" />

              <div className="floor-lines">
                <div className="floor-line main"></div>
                <div className="floor-line shadow"></div>
              </div>

            </div>
          </div>
          </div>
        </div>




        {/* Right Section  */}
        <div className="right-column w-full lg:w-1/2 flex flex-col items-center lg:items-start px-4">
          <div className='hidden lg:block bg-white w-auto h-28'></div>
          <div className="timeline-item w-full flex flex-col items-center lg:items-start">
            <div className="hidden lg:block timeline-dot"></div>
            <div className="timeline-icon-box mx-auto lg:mx-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
            <div className="timeline-content w-full flex flex-col items-center lg:items-start text-center lg:text-left">
              <h3>Elicitation</h3>
              <p>This step involves identifying stakeholders and understanding their needs.</p>
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="timeline-item w-full flex flex-col items-center lg:items-start mt-8 lg:mt-0">
            <div className="hidden lg:block timeline-dot"></div>
            <div className="timeline-icon-box mx-auto lg:mx-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
            </div>
            <div className="timeline-content w-full flex flex-col items-center lg:items-start text-center lg:text-left">
              <h3>Analysis & Suggestions</h3>
              <p>We analyze requirements and suggest trending ideas and features that can add value to products.</p>
            </div>
          </div>

          {/* Timeline Item 3 */}

          <div className="timeline-item w-full flex flex-col items-center lg:items-start mt-8 lg:mt-0">
            <div className="hidden lg:block timeline-dot"></div>
            <div className="timeline-icon-box mx-auto lg:mx-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            </div>
            <div className="timeline-content w-full flex flex-col items-center lg:items-start text-center lg:text-left">
              <h3>Document requirements</h3>
              <p>Document requirements in a clear and concise manner.</p>
            </div>
          </div>
          {/* Timeline Item 4 (Placeholder to match image) */}

          <div className="timeline-item w-full flex flex-col items-center lg:items-start mt-8 lg:mt-0">
            <div className="hidden lg:block timeline-dot"></div>
            <div className="timeline-icon-box mx-auto lg:mx-0">
              <img src="../../../assets/asset/check.svg" alt="" />
            </div>
            <div className="timeline-content w-full flex flex-col items-center lg:items-start text-center lg:text-left">
              <h3>Verification and validation</h3>
              <p>Requirement verification checks that the requirements are correct, while requirement validation checks that the requirements are suitable for the intended purpose.</p>
            </div>
          </div>
          {/* Timeline Item 4 (Placeholder to match image) */}
          {/* <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <div className="timeline-content">
              <h3 style={{ color: "transparent" }}>Placeholder</h3>
            </div>
          </div> */}

        </div>
      </div>
    </div>
  );
};

export default Requirments;