import React from 'react';
import Section from '../Section/section';
import ExpertiseCard from '../Cards/expertiseCard';
import {
  faPython,
  faNodeJs,
  faHtml5,
  faJava,
  faReact,
  faCss3,
  faGit,
  faJsSquare,
} from '@fortawesome/free-brands-svg-icons';

const expertise = () => {
  return (
    <Section className='section-container'>
      <h2>Tech Expertise</h2>
      <p style={{ textAlign: 'center' }}>
        Unlocking the world's creativity using newest technology.
      </p>
      <div className='card-container'>
        <ExpertiseCard
          tech={faPython}
          className1='card-expertise'
          className2='tech'
        >
          <h4>Python</h4>
        </ExpertiseCard>
        <ExpertiseCard
          tech={faNodeJs}
          className1='card-expertise'
          className2='tech'
        >
          <h4>NodeJs</h4>
        </ExpertiseCard>
        <ExpertiseCard
          tech={faReact}
          className1='card-expertise'
          className2='tech'
        >
          <h4>React</h4>{' '}
        </ExpertiseCard>
        <ExpertiseCard
          tech={faJava}
          className1='card-expertise'
          className2='tech'
        >
          <h4>Java</h4>{' '}
        </ExpertiseCard>
        <ExpertiseCard
          tech={faHtml5}
          className1='card-expertise'
          className2='tech'
        >
          <h4>Html </h4>{' '}
        </ExpertiseCard>
        <ExpertiseCard
          tech={faGit}
          className1='card-expertise'
          className2='tech'
        >
          <h4>Git Operation</h4>
        </ExpertiseCard>
        <ExpertiseCard
          tech={faCss3}
          className1='card-expertise'
          className2='tech'
        >
          <h4>CSS designs</h4>
        </ExpertiseCard>
        <ExpertiseCard
          tech={faJsSquare}
          className1='card-expertise'
          className2='tech'
        >
          <h4>JavaScript</h4>
        </ExpertiseCard>
      </div>
    </Section>
  );
};

export default expertise;
