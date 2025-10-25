  import React from "react";
  import "./About.css";
  import { TextRoll } from "../motion-primitives/text-roll";
  import { TextScramble } from '../motion-primitives/text-scramble';
  import { useState } from 'react';
  import { TextShimmer } from "../motion-primitives/text-shimmer";
  

  const About = () => {
    const [isTrigger, setIsTrigger] = useState(false);

    return (
      <section className="about-section">
        <div className="about-container">
         

<div className="about-photo-wrapper">

  <img
    src="/photo.avif"
    alt="Dr. Samantha Tay"
    className="about-photo relative z-10"
  />

  {/* Optional extra glow layer above footer */}
  

  <div className="about-photo-footer relative z-20">
    <div className="about-doctor-name">
      Hypnotherapy & Cognitive Behavioural Therapy Singapore
    </div>
    <div className="about-photo-btn-group">
      <button className="about-btn">Learn More</button>
      <button className="about-btn about-btn-secondary">Contact us</button>
    </div>
  </div>
</div>


          <div className="about-content">
            <h2
              onMouseEnter={() => setIsTrigger(true)}
              onMouseLeave={() => setIsTrigger(false)}
              // style={{ cursor: "pointer" }}
            >
              <TextScramble
                // className="text-2xl font-bold text-gray-900"
                speed={0.02}
                trigger={isTrigger}
              >
                About Collaborative Change Psychotherapy
              </TextScramble>
            </h2>
            
            <p>
              <TextShimmer 
              // className='font-mono text-sm' duration={1.5}
              // className='text-xl font-medium [--base-color:var(--color-blue-600)] [--base-gradient-color:var(--color-blue-200)] dark:[--base-color:var(--color-blue-700)] dark:[--base-gradient-color:var(--color-blue-400)]'
    duration={1.5}  spread={3}
              >
                    Are you searching for solutions to alleviate your pain, boost your confidence, or enhance your productivity and relationships?
                  </TextShimmer>
              

  I offer integrative psychotherapy, utilizing evidence-based methodologies such as hypnotherapy, cognitive-behavioral therapy, coaching, screening tools, psychometric assessments, and more. My aim is to help you overcome your challenges and foster personal growth, empowering you to become the best version of yourself. As your guide and facilitator, I work collaboratively with you to create lasting positive changes.
            </p>
            <p>
              Throughout my practice, I have worked with both male and female clients facing various issues, including addiction (e.g., smoking, drinking, binge eating, gaming), anxiety, depression, insomnia, phobias (e.g., public speaking, crowded places, cats), trauma (e.g., sexual violence, workplace abuse), and relationship issues (e.g., broken marriage, break-up). Remember, you are not alone, and I am here to offer my support and assistance.
            </p>
            <p>
              All information shared during the session is confidential and will not be revealed to any other person or agency without your written permission, except in cases where my duty to warn applies if you intend to harm yourself or others, or in response to a court subpoena.
            </p>
            
            <p>Don't wait! Contact us immediately for an exclusive package. Call/text/WhatsApp me at 9450 5934 today or email </p>

            <TextRoll //className='text-4xl text-black dark:text-white'
                  // className='text-black dark:text-white'
                >
                  collaborativechangebyhypnosis@gmail.com
                </TextRoll>

      

                
          </div>
        </div>
      </section>
    );
  };

  export default About;




