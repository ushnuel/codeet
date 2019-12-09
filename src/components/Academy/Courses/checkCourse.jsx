import React from 'react';
import {
  FullstackCourse,
  JavascriptBeginner,
  JavascriptAdvance,
  ReactRedux,
  AndroidCourse,
} from '.';

const checkCourse = ({ loadedCourse, register }) => {
  let course;
  switch (loadedCourse.id) {
    case '1':
      course = (
        <FullstackCourse register={register} loadedCourse={loadedCourse} />
      );
      break;
    case '2':
      course = (
        <JavascriptBeginner register={register} loadedCourse={loadedCourse} />
      );
      break;
    case '3':
      course = (
        <JavascriptAdvance register={register} loadedCourse={loadedCourse} />
      );
      break;
    case '4':
      course = (
        <AndroidCourse register={register} loadedCourse={loadedCourse} />
      );
      break;
    case '5':
      course = <ReactRedux register={register} loadedCourse={loadedCourse} />;
      break;
    default:
      break;
  }
  return course;
};

export default checkCourse;
