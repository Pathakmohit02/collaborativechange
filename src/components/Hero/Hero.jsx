
        import React from 'react';
        import './Hero.css';
        import { TextLoop } from '../motion-primitives/text-loop';
    import { TextEffect } from '../motion-primitives/text-effect';
    import { Magnetic } from '../motion-primitives/magnetic';
        


        const Hero = () => {
        return (
            <section className="hero-section">
            <div className="hero-responsive-image-wrapper"></div>
            <div className="hero-content">
                <TextEffect per='char' preset='fade' className="hero-title-main">
        Collaborative Change
        </TextEffect>
        
        <TextEffect per='char' preset='fade' className="hero-quote-main"
 >
        "I sought out Collaborative Change to help me stop smoking. I had a hypnotherapy session with Raymond Tay and gave up that day, that was over two months ago and I haven't slipped once. I will defo be a returning customer to focus on other things I would like to improve! I would highly recommend Collaborative Change for anyone looking to make positive changes in their lives but don't know where to start and need a helping hand!"
        </TextEffect>
         
          <Magnetic>
              <button
                type='button'
                className='hero-button-main'
              >
                <span>Get Started</span>
              </button>
            </Magnetic>
                    
            </div>
            </section>
        );
        };

        export default Hero;
