import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import TestName from './TestName';
import FinishTestBtn from './FinishTestBtn';
import BtnsAction from './BtnsAction';
import Test from './Test';
import s from './TestPage.module.css';
import technicalTest from './util/technicalTest.json';

export default function TestPage() {
  const location = useLocation();
  const [testNumber, setTestNumber] = useState(0);
  console.log(testNumber);

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <TestName testName={location.state.testName} />
        <FinishTestBtn />
      </div>
      <div>
        <Test
          test={technicalTest[testNumber]}
          testNumber={testNumber}
          testLength={technicalTest.length}
        />
      </div>
      <div>
        <BtnsAction
          updateNumber={setTestNumber}
          testLength={technicalTest.length}
          numberQuestion={testNumber}
        />
      </div>
    </div>
  );
}
