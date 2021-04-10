import React from 'react';
import { useLocation } from 'react-router-dom';

import s from './ResultPage.module.css';

export default function ResultPage() {
  const location = useLocation();
  const { result, totalQuestions, testName } = location.state;

  return (
    <div className={s.result}>
      <h1 className={s.resultHeading}>Results</h1>
      <p className={s.testName}>[ {testName}_]</p>
      <div className={s.horizontalLine}></div>
      <div>Диаграмма</div>
      <div className={s.textResult}>
        <p>Correct answers - {result}</p>
        <p>Total questions - {totalQuestions}</p>
      </div>
    </div>
  );
}
