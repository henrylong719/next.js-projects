import React from 'react';
import Image from 'next/image';
import classes from './hero.module.css';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/me.png" alt="Hero" width={300} height={300} />
      </div>
      <h1>Hi, I'm Henry</h1>
      <p>
        I blog about web development - especially fronted frameworks like react
        and angular
      </p>
    </section>
  );
};

export default Hero;
