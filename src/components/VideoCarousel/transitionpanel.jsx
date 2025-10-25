'use client';
import React, { useState } from 'react';
import { TransitionPanel } from '../motion-primitives/transition-panel';
import "./transitionpanel.css"


export function TabsTransitionPanel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const ITEMS = [
    {
      title: 'Lynne Tan',
      subtitle: 'Relationship & Career',
      content:
        'Raymond is most intuitive and very knowledgable about a wide vareity of issues, and has been a great help thus far, highly recommended',
    },
    {
      title: 'Dave Mommen',
      subtitle: 'Relationship & Career',
      content:
        'Incredibly capable and knowleggeable therapist. I would recommend Raymond for every kind of therapy and treatment that involves building mental fortitude.',
    },
    {
      title: 'Sophia Chiang',
      subtitle: 'Relationship',
      content:
        'Raymond is a knowledgeable and empathetic therapist. As a counsellor in the same profession, I appreciate his rational approach to addressing my relationship issues. I highly recommend Raymond',
    },
      {
      title: 'Wendy Koh',
      subtitle: 'Past incident',
      content:
        'Raymond helped me overcome a past trauma and my anxiety issues in about 8 sessions. Hypnotherapy works! It makes me remember the anchoring techniques to feel less anxious',
    },
     {
      title: 'Dev',
      subtitle: 'Emotional Struggle',
      content:
        'Raymond was a good listener and extremely patient. He went above and beyond to make sure that i was at ease at all times and shared several techniques to address specific issues ',
    },
     {
      title: 'Lilian Chia',
      subtitle: 'Past Issue',
      content:
        'Going through the session with Raymond has helped me to better divert my thoughts and to gain clarity on why such thoughts keep reappearing, would highly recommend him',
    },
    {
      title: 'Gerald Koh',
      subtitle: 'Business Venture',
      content:
        'Mr. Raymond is very professional listening carefully to client and always provide great ideas. Even our session has ended, during the same day, he would still keep a lookout for you and provide new ideas. ',
    },
     {
      title: 'Karthik Nair',
      subtitle: 'Past Issue & Confidence',
      content:
        'Great listener, Shares past experiences to relate. Helps to narrow down issues to tackle them based on priority and advices best course of action ',
    },
  ];

  return (
    <div>

   <h1 className='mp'>Testimonals</h1>
    <div className="testimonial-tabs">
  
  {ITEMS.map((item, index) => (
    <button 
      key={index}
      onClick={() => setActiveIndex(index)}
      className={`testimonial-btn ${activeIndex === index ? "active" : ""}`}
    >
      {item.title}
    </button>
  ))}
</div>




      <div className='overflow-hidden border-t border-zinc-200 dark:border-zinc-700'>
        <TransitionPanel style={{textAlign:"center"}}
          activeIndex={activeIndex}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          variants={{
            enter: { opacity: 0, y: -50, filter: 'blur(4px)' },
            center: { opacity: 1, y: 0, filter: 'blur(0px)' },
            exit: { opacity: 0, y: 50, filter: 'blur(4px)' },
          }}
        >
          {ITEMS.map((item, index) => (
            <div key={index} className='py-2'>
              <h3 className='mb-2 font-medium text-zinc-800 dark:text-zinc-100'>
                {item.subtitle}
              </h3>
              <p className='text-zinc-600 dark:text-zinc-400'>{item.content}</p>
            </div>
          ))}
        </TransitionPanel>



      </div>
    </div>
  );
}
