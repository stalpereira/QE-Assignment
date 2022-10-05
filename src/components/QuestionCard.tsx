import React, { useState } from 'react';
// Types
import { AnswerObject } from '../App';
// Styles
import { Wrapper, ButtonWrapper } from './QuestionCard.styles';

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
};

let typedAnswer: any;
const getValue = async(question: any) => {
  const input = document.getElementById('typedAnswer') as HTMLInputElement | null;
  const value = input?.value;
  typedAnswer = value;
}  

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => (
  <Wrapper>
    <p className='number'>
      Question: {questionNr} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    <div>
      {answers.map((answer) => (
        <ButtonWrapper
          key={answer}
          correct={userAnswer?.correctAnswer === answer}
          userClicked={userAnswer?.answer === answer}
        >
          <button disabled value={answer}>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </ButtonWrapper>
      ))}
      <input type='text' id="typedAnswer" name="typedAnswer" placeholder="Type your answer here" defaultValue="" onChange={(question)=>getValue(question)} style={{margin:"5px", borderRadius:"10px", height: "37px"}} />
      <button className='next' onClick={()=>callback(typedAnswer)} disabled={userAnswer ? true : false}>
            Submit
          </button>
    </div>
  </Wrapper>
);

export default QuestionCard;
