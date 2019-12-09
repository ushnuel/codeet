import React from 'react';

const fullstackCourse = ({ loadedCourse, register }) => {
  return (
    <>
      <div className='overview' id='overview'>
        <h1>Overview</h1>
        <p>
          <span className='courseSpan'>
            During the 11 week academy, you will become a professional in modern
            web development.
          </span>
          <br />
          We offer a broad curriculum where you will learn all about HTML, CSS,
          JavaScript, Databases, Security, APIs and how to build cutting edge
          web applications using popular frameworks and libraries. Our academy
          ensures that you will be hired as a junior software engineer within 3
          months of graduation. <br /> In the unlikely case that you are not
          hired within 3 months, we waive your tuition fee. All you have to do
          is pay an ₦{loadedCourse.price} admission, and your future employer
          will pay the tuition fee of ₦{loadedCourse.price}. Previous technical
          experience is not needed to join the academy. However, students must
          go through a technical exam and interview before being accepted.
        </p>
        <div className='courseDuration'>
          {loadedCourse.days + ' Days of training'}
        </div>
      </div>
      <div className='package' id='package'>
        <h1>What You Will Learn</h1>
        <p>
          <span className='courseSpan'>
            During this 11 week intensive program, you will learn to build
            complex websites and even multiplayer games with databases, APIs,
            and modern front-end technology.
          </span>
          <br />
          We teach you the latest and greatest technologies most senior
          developers have not even worked with yet – or at least not as
          intensively as you. We aim for teaching you technologies, tools, and
          approaches that development teams around the world are looking to
          implement. These are the technologies & tools we teach:
        </p>
        <div>
          <h4>HTML5 & CSS3</h4>
          <p>
            HTML brings structure to the content of a web page, while CSS brings
            styling. We cover all the latest of HTML5 and CSS3, including
            building responsive pages and flexbox.
          </p>
          <h4>Programming Logic</h4>
          <p>
            Learn to write code by describing data structures, and work with
            them using functions, recursion, and by controlling the flow of your
            program.
          </p>
          <h4>Database Implementation</h4>
          <p>
            Learn to store, organize, retrieve, and aggregate data from the most
            advanced types of relational and non-relational databases used in
            this industry.
          </p>
          <h4>JavaScript</h4>
          <p>
            One of the most popular programming languages around will be your
            2nd language during this course. JS allows you to write client side
            code that can be run by web browsers.
          </p>
          <h4>
            Behavioural Driven Development (BDD) and Test Driven Development
            (TDD)
          </h4>
          <p>
            Learn to write code to automate testing your code. This helps you
            speed up your development. Professional code bases are fully tested,
            allowing for rapid feature development and refactoring without
            having to worry about breaking things unexpectedly.
          </p>
          <h4>API Implementation</h4>
          <p>
            APIs play a big role in the web development industry. Providing
            programmatic interfaces to applications allows communication between
            them.
          </p>
          <h4>NodeJS, ES6/7 Syntax and Babel Configuration</h4>
          <p>
            NodeJS is becoming very popular in web development because it allows
            us to write JavaScript on the server side. The new ES6 and ES7
            syntaxes breathe new life in this old quirky language, making it fun
            and efficient to work with. You will also learn how to transpile
            your codes using babel 7 for easier coding
          </p>
          <h4>React and Redux</h4>
          <p>
            React allows us to build next generation web applications. Advanced
            single page front-end applications are in high demand these days,
            and you will learn how to build them as well as manage the data flow
            with Redux.
          </p>
          <h4>Service Base Architecture</h4>
          <p>
            Build clusters of small API services to serve as a back-end for your
            React applications. Learn to manage data and flow with hooks and
            middlewares.
          </p>
          <h4>Native Android Apps</h4>
          <p>
            Web development? What about App development? Learn how to use your
            React-Native, Flutter skills to build mobile apps as well!
          </p>
        </div>
      </div>
      <div className='courseCost' id='courseCost'>
        <h1>Training Cost</h1>
        <p>
          <span className='courseSpan'>
            Our Payment plan is very simple and affordable
          </span>
          <br />
          Every student pays the admission fee of ₦{loadedCourse.price}. The
          remainder of your education cost will be paid by the company that
          hires you. After graduating from our 11-week course, you'll have a 3
          month job search period. You will choose where you want - and don’t
          want - to work and you will work for these companies directly. If you
          are not hired within these 3 months, then we will bear the cost of
          your tuition fee.
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
          You need a laptop for the period of the bootcamp. We believe that age
          should not be a determining factor in the application process.
          Therefore we do not consider applicants under 18 or over 50 for the
          Academy. <br /> The average age of our students is 30. All of our
          classes are taught in English. You should be able to converse
          effortlessly in both technical and non-technical discussions, and read
          and understand technical materials.
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

        <h4> How long do I have to pay the admission fee?</h4>
        <p>
          As soon as you sign your contract you will receive an invoice for the
          admission fee. The admission fee for the Coding Academy is ₦
          {loadedCourse.price}. The admission fee is paid, in principle, by the
          Student, unless your admission fee is covered otherwise (e.g. through
          our scholarship program). The admission fee is due within 14 days of
          signing this offer or before the Academy starting date (whichever date
          comes first).
        </p>
      </div>
    </>
  );
};

export default fullstackCourse;
