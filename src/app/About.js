import React, { useState } from "react";
import pg from "../app/page.module.css";

const About = () => {
  return (
    <div>
        <p className={pg.title}>src/app/About.js </p>
        <p className={pg.name}>김수민</p>
        <p className={pg.no}>202130403</p>
    </div>
  );
};

export default About;