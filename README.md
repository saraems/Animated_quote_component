# Animated quotes component | ENG | [GitHubPage](https://saraems.github.io/sentence_component_CL/)

This React component created as a Sentence class which extends React.Component class, displays quotes letter by letter passed as an array of strings through props. 

Quotes are rendering in a infinitive loop in two HTML elements: header(h1) and paragraph(p).


`h1` element renders full quote (single array's string element). 

`p` element renders quote from h1 element letter by letter with decelerated delay/speed passed to Sentence component through props. 


```ruby
render() {
        return (
            <div className='sentence_container'>
                <h1>{ this.state.fullSentence }</h1>
                <p>{ this.state.letterByLetter }</p>
            </div>
        );
    }
```

After rendering in both HTML elements full sentence from quotes array component waits 2000ms and then displays next array's element (sentence) or if the passed array has only one argument it displays again the array from the beginning. 

![quote_component](https://user-images.githubusercontent.com/43315389/53941742-342cf600-40b9-11e9-86c3-b711cd947e6a.JPG)


![quote_component_2](https://user-images.githubusercontent.com/43315389/53941767-45760280-40b9-11e9-84be-47041eb9672e.JPG)


`Default component's props values` if nothing will be passed: 
```ruby
<Sentence time={ 500 } sentences={ [Ala] }/>
```


# Animowany komponent z cytatami | PL | [GitHubPage](https://saraems.github.io/sentence_component_CL/)

Komponent Sentence będący instancją klasy React.Component, renderuje na stronie zdania przekazane w propsach jako tablica łańcuchów (zdań będących stringami) litera po literze każdy z elementów.

Zdania, czy też cytaty renderują się w nieskończonej pętli w dwóch elementach HTML: w nagłówku (h1) oraz w paragfie (p).


Element `h1` renderuje pełny cytat (pojedyńczy element tablicy).

element `p` renderuje cytat z elementu h1 litera po literze z prędkością przekazywaną do komponentu Sentence poprzez propsy.


```ruby
renderowanie() {
         powrót (
             <div className = 'sentence_container'>
                 <h1> {this.state.fullSentence} </ h1>
                 <p> {this.state.letterByLetter} </ p>
             </ div>
         );
     }
```

Po wyrenderowaniu w obu elementach HTML pełnego zdania z elementu tablicy komponent czeka 2000ms, a następnie wyświetla w ten sam sposów następny element tablicy. Jeżeli przekazana tablica ma tylko jeden argument, komppnent wyświetla ponownie jego pierwszy element.

![quote_component](https://user-images.githubusercontent.com/43315389/53941742-342cf600-40b9-11e9-86c3-b711cd947e6a.JPG)


![quote_component_2](https://user-images.githubusercontent.com/43315389/53941767-45760280-40b9-11e9-84be-47041eb9672e.JPG)

`Domyślne wartości propsów` jeśeli żadne nie zostaną zadeklarowane w komponencie: 
```ruby
<Sentence time={ 500 } sentences={ [Ala] }/>
```

-----------------------------------------------------



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
