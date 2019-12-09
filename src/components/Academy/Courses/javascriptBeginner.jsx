import React from 'react';

const javascriptBeginner = ({ loadedCourse, register }) => {
  return (
    <>
      <div className='overview' id='overview'>
        <h1>Overview</h1>
        <p>
          <span className='courseSpan'>Your kickstart to coding</span>
          <br />
          The Javascript for Beginners bootcamp is a unique kickstart into the
          world of coding. Whether your goal is to understand a bit more about
          programming or to move your career in a new direction, this is the
          best primer with which to begin. You will find out just how fun
          programming can be! <br /> We will cover all the fundamentals of a web
          application. Check out the daily agenda below. Right now, most of
          these topics might seem very foreign to you, but soon you will
          understand all of this. At the end of the program you will put
          everything into practice during in a project day. Together with your
          team, and with our help where necessary, you will build your own
          website in just one day.
        </p>
        <div className='courseDuration'>
          {loadedCourse.days + ' Days of training'}
        </div>
      </div>
      <div className='package' id='package'>
        <h1>What You Will Learn</h1>
        <p>
          <span className='courseSpan'>
            We will cover all the fundamentals of a web application.
          </span>
        </p>
        <div>
          <h4>HTML, Git and Github</h4>
          <p>
            You will start on your first app by learning how to inspect any web
            application you find online, using Chrome DevTools. You will learn
            all about HTML5, how to use version control using Git and publish
            your app online using GitHub.
          </p>
          <h4>CSS & RWD</h4>
          <p>
            In CSS and RWD (Responsive Web Development), you will learn how to
            style the page that you created on day one, taking into account
            different screen sizes.
          </p>
          <h4>JavaScript and the DOM</h4>
          <p>
            Javascript was invented to make your webpage interactive. You will
            learn how you can use JavaScript to deal with user input on your
            page, such as forms and buttons.
          </p>
          <h4>Build and Interactive web app</h4>
          <p>
            Now that you have been introduced to all the fundamentals of a front
            end application, you will bring your newly gained knowledge into
            practice by building a complete front end application!
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
          The JavaScript beginner bootcamp costs €2399, there is no VAT
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
          <span className='courseSpan'>
            No technological background is needed
          </span>
          <br />
          There are no requirements to join this bootcamp, but we will send some
          pre-work to you for you to work on before the bootcamp starts. This in
          order the ensure that you can get the most out of your time with us.{' '}
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
          React (intermediate) boot camp and TypeScript & GraphQL (advanced)
          boot camps correspond to weeks 2 and 3, and week 5 and 6 respectively.
          Weeks 4, and 7 to 10 of the Academy are composed of individual and
          group assignments.
        </p>

        <h4> What level is the Javascript Bootcamp?</h4>
        <p>
          The JavaScript Bootcamp is an entry level course geared towards
          absolute beginners. Whether your goal is to understand a bit more
          about programming or to move your career in a new direction, this is
          the best primer with which to begin.
        </p>
      </div>
    </>
  );
};

export default javascriptBeginner;
