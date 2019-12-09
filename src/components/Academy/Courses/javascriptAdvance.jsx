import React from 'react';

const javascriptAdvance = ({ loadedCourse, register }) => {
  return (
    <>
      <div className='overview' id='overview'>
        <h1>Overview</h1>
        <p>
          <span className='courseSpan'>
            learn some advance javascript concepts
          </span>
          <br />
          The JavaScript Advanced Bootcamp is perfect for those who have
          completed our beginners bootcamp. If you have not completed that, but
          still have some (basic) programming skills, we might still accept you
          as a student. Please contact us and we will schedule a call with you
          to determine your current level. There is a good chance that we ask
          you to complete some pre-work before we accept you.
        </p>
        <div className='courseDuration'>
          {loadedCourse.days + ' Days of training'}
        </div>
      </div>
      <div className='package' id='package'>
        <h1>What You Will Learn</h1>
        <p>
          <span className='courseSpan'>
            We cover everything you need to be confident using JavaScript.
          </span>
        </p>
        <div>
          <h4>OOP and imports in Javascript</h4>
          <p>
            In Javascript you can use Object Oriented Programming techniques.
            But what does that mean? Today you will learn how to use Javascript
            classes, what they are, and how to write your own.
          </p>
          <h4>Functional Javascript</h4>
          <p>
            You will learn how to use modern and fuctional Javascript in writing
            algorithms, using pure functions and immutable data to ensure there
            are no side effects in your code. No side effects means less bugs.
          </p>
          <h4>Data Transformation and Tests</h4>
          <p>
            Learn how to interact with a JSON REST API. Go and fetch some data,
            while doing some tests!
          </p>
          <h4>Build and Interactive web app</h4>
          <p>
            Using your knowledge of basic Javascript, tests, algorithms and OOP,
            you will build an app to feel more at home with all these concepts.
          </p>
        </div>
      </div>
      <div className='courseCost' id='courseCost'>
        <h1>Training Cost</h1>
        <p>
          <span className='courseSpan'>
            Our training cost for a week of coding
          </span>
          <br />
          The JavaScript Advance Bootcamp costs ₦{loadedCourse.price}, there is
          no VAT applicable.
        </p>
        <div className='coursePrice'>
          <div className='courseCapacity'>
            {'Max class size: ' + loadedCourse.capacity}
          </div>
          <div> {'Total cost: ₦ ' + loadedCourse.price}</div>
        </div>

        <button onClick={register} className='btn'>
          Register Course
        </button>
      </div>
      <div className='requirement' id='requirement'>
        <h1>Requirements</h1>
        <p>
          <span className='courseSpan'>
            Basic knowledge of Javascript concepts
          </span>
          <br />
          This bootcamp is the follow-up of the JavaScript for Beginners
          Bootcamp. If you have not completed that, but still have some (basic)
          programming skills, we might still accept you as a student. Please
          contact us and we will schedule a call with you to determine your
          current level. There is a good chance that we ask you to complete some
          pre-work before we accept you.
          <br />
          All of our classes are taught in English. You should be able to
          converse effortlessly in both technical and non-technical discussions,
          and read and understand technical materials
        </p>
      </div>
      <div className='faqs' id='faqs'>
        <h1>FAQS</h1>
        <h4> How do the Academy and Bootcamps compare?</h4>
        <p>
          Our code Academy is a 11-week program. Sections of these 11 weeks can
          be attended separately via our Boot camps. The Javascript Bootcamp
          (beginner) is the same as week 1 of the Academy program. The NodeJS &
          React (intermediate) boot camp and Database structure (advanced) boot
          camp correspond to weeks 2 and 3, and week 5 and 6 respectively. Weeks
          4, and 7 to 10 of the Academy are composed of individual and group
          assignments.
        </p>
      </div>
    </>
  );
};

export default javascriptAdvance;
