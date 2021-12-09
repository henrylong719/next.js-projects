import React from 'react';
import Link from 'next/link';

import classes from './button.module.css';

const button = (props) => {
  if (props.link) {
    return (
      <Link href={props.link}>
        <a className={classes.btn}>{props.children}</a>
      </Link>
    );
  }

  return (
    <button className={classes.btn} onClick={props.clicked}>
      {props.children}
    </button>
  );
};

export default button;
