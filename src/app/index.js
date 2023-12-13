import React, { useState } from "react";
import pg from "../app/page.module.css";

const index = () => {
  return (
    <div>
        <p className={pg.title}>src/app/index.js </p>
        <p className={pg.name}>김수민</p>
        <p className={pg.no}>202130403</p>
        <p>오류는 미 발생하나 일부 항목 이행 못함</p>
    </div>
  );
};

export default index;