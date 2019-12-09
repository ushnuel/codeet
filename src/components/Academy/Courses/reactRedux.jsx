import React from 'react';

const reactRedux = ({ loadedCourse, register }) => {
  return (
    <>
      <div className='overview' id='overview'>
        <h1>Overview</h1>
        <p>
          <span className='courseSpan'>
            Take your frontend skills higher with this our react/redux bootcamp
          </span>
          <br />
          Each day we focus on a single component of modern web applications: an
          interactive frontend with Javascript and React, the database,
          deploying your app to a server, etc. The result of each day is a live
          and kicking web application that works. Not only do you learn the
          necessary skills, but also the industry standards: ways to add common
          functionality such as allowing users to create accounts and sign in,
          handle image uploads, and more. <br />
          <br /> The React & Redux Bootcamp is perfect for those who have
          completed our beginners bootcamp. If you have not completed that, but
          still have some programming skills, we might still accept you as a
          student. Please contact us and we will schedule a call with you to
          determine your current level. There is a good chance that we ask you
          to complete some pre-work before we accept you.
        </p>
        <div className='courseDuration'>
          {loadedCourse.days + ' Days of training'}
        </div>
      </div>
      <div className='package' id='package'>
        <h1>What You Will Learn</h1>
        <p>
          <span className='courseSpan'>
            We cover everything that is needed to build rich react applications.
          </span>
        </p>
        <div>
          <h4>React Basics</h4>
          <p>
            Explore the beauty of a SPA, of state and props, while building
            several applications with React.
          </p>
          <h4>components and Props</h4>
          <p>
            Today, you will learn all about components and React forms. Also,
            you will dive even deeper into state and props.
          </p>
          <h4>Routing in React</h4>
          <p>
            Work with react-router and fetch data from an API. You will also be
            learning about the differences between containers and views
          </p>
          <h4>State Management using Redux</h4>
          <p>
            We will cover the use of Redux to manage the state of our
            application. We will also revisit the use of immutability and pure
            functions
          </p>
          <h4>Redux Thunk</h4>
          <p>
            Learn how to fetch data using redux-thunk, access restricted APIs
            through JWT tokens and how to create log in forms!
          </p>
        </div>
      </div>
      <div className='courseCost' id='courseCost'>
        <h1>Training Cost</h1>
        <p>
          <span className='courseSpan'>
            Our training cost for a week of react coding
          </span>
          <br />
          The React/Redux Bootcamp costs ₦{loadedCourse.price}, there is no VAT
          applicable.
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
          <span className='courseSpan'>Basic JavaScript knowledge</span>
          <br />
          This bootcamp is the follow-up of the Advanced JavaScript Bootcamp. If
          you have not completed that, but still have some programming skills,
          we might still accept you as a student. Please contact us and we will
          schedule a call with you to determine your current level. There is a
          good chance that we ask you to complete some pre-work before we accept
          you.
        </p>
      </div>
      <div className='faqs' id='faqs'>
        <h1>FAQS</h1>
        <h4> How do the Academy and Bootcamps compare?</h4>
        <p>
          Our code Academy is a 11-week program. Sections of these 11 weeks can
          be attended separately via our Boot camps. The Javascript Bootcamp
          (beginner) is the same as week 1 of the Academy program. The NodeJS &
          React (intermediate) boot camp and TypeScript & GraphQL (advanced)
          boot camps correspond to weeks 2 and 3, and week 5 and 6 respectively.
          Weeks 4, and 7 to 10 of the Academy are composed of individual and
          group assignments.
        </p>
      </div>
    </>
  );
};

export default reactRedux;
