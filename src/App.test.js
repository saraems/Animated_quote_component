import React from 'react';
import { shallow, mount } from 'enzyme';
import ReactDOM from 'react-dom';

import App from './App';
import Sentence from './components/Sentence'


it('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


describe('<Sentence />', () => {
    it('component renders h1 HTML element', () => {
      const sentenceComponent = shallow(<Sentence/>);
      expect(sentenceComponent.find('h1').length).toEqual(1);
    });

    it('component renders p HTML element', () => {
      const sentenceComponent = shallow(<Sentence/>);
      expect(sentenceComponent.find('p').length).toEqual(1);
    });

    it('setting proper state out of props', () => {
        const wrapper = mount(<Sentence time={ 100 } sentences={ ["Ala"] }/>);
        expect(wrapper.state().letterTiming).toBe(100);
        expect(wrapper.state().arr).toEqual(["Ala"]);
    });



    // const sentenceComponent = mount(<Sentence/>);
    // expect.assertions(1);
    // // const data = await ;

    // const insertedSentence = expect(sentenceComponent.state('arr'));
    // expect(sentenceComponent.state('fullSentence')).toBe(insertedSentence[0]);

    // expect(sentenceComponent.find('p').length).toEqual(0)
  }
);



