import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';

import App from './App';
import Sentence from './components/Sentence'



it('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// mock component's props and function
const time = 100;
const sentences = ["Ala", "Ola"];

function later(delay) {
    return new Promise(function(resolve) {
        setTimeout(resolve, delay);
    });
}

describe('<Sentence />', () => {

    const sentenceComponent = shallow(<Sentence time={ time } sentences={ sentences }/>);
    const sentencesArray = sentenceComponent.state().arr;


    it('component renders h1 HTML element', () => {
      expect(sentenceComponent.find('h1').length).toEqual(1);
    });

    it('component renders p HTML element', () => {
      expect(sentenceComponent.find('p').length).toEqual(1);
    });

    it('state is properly set from props', () =>
    {
        expect(sentenceComponent.state().letterTiming).toBe(time);
        expect(sentenceComponent.state().arr).toEqual(sentences);
    });


    test("HTML's elements properly display sentences passed through props in time function", async () => {

        for (let i = 0; i < sentencesArray.length; i++) {
            expect(sentenceComponent.state().fullSentence).toEqual(sentencesArray[i]);
            expect(sentenceComponent.find('h1').text()).toEqual(sentencesArray[i]);
            for (let j = 0; j < sentencesArray[i].length; j++) {
                await later(time);
                expect(sentenceComponent.state().letterByLetter).toEqual(sentencesArray[i].slice(0, j+1));
                expect(sentenceComponent.find('p').text()).toEqual(sentencesArray[i].slice(0, j+1));
            }
            await later(2000);
        }
    });

    test("state and HTML p element are cleaned after each full sentence iteration", async () => {

        for (let i = 0; i < sentencesArray.length; i++) {
            for (let j = 0; j < sentencesArray[i].length; j++) {
                await later(time);
            }
            await later(2000);
            expect(sentenceComponent.state().letterByLetter).toEqual('');
            expect(sentenceComponent.find('p').text()).toEqual('');
        }
    });
  }
);



