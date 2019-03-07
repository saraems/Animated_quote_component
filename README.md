# Animated quote component | ENG | [GitHubPage](https://saraems.github.io/sentence_component_CL/)

This React component created as a Sentence class which extends React.Component class, displays quotes letter by letter passed as an array of strings through props. 

Quotes are rendering in a infinitive loop in two HTML elements: header(h1) and paragraph(p).


`h1` element renders full quote (single array's string element). 

`p` element renders quote from h1 element letter by letter with decelerated delay/speed passed to Sentence component through props. 

`Default component's props values` if nothing will be passed: 
```ruby
<Sentence time={ 500 } sentences={ [Ala] }/>
```

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

Code is tested with Jest tests, its coverage equals approximately 70%. Tests can be run in console with `CI=true npm test` command.

# Animowany komponent z cytatami | PL | [GitHubPage](https://saraems.github.io/sentence_component_CL/)

Komponent Sentence będący instancją klasy React.Component, renderuje na stronie zdania przekazane w propsach jako tablica łańcuchów (zdań będących stringami) litera po literze każdy z elementów.

Zdania, czy też cytaty renderują się w nieskończonej pętli w dwóch elementach HTML: w nagłówku (h1) oraz w paragfie (p).


`h1` renderuje pełny cytat (pojedyńczy element tablicy).

 `p` renderuje cytat z elementu h1 litera po literze z prędkością przekazywaną do komponentu Sentence poprzez propsy.


`Domyślne wartości propsów` jeśeli żadne nie zostaną zadeklarowane w komponencie: 
```ruby
<Sentence time={ 500 } sentences={ [Ala] }/>
```

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

Pokrycie kodu testami Jest wynosi ok 70%. Testy można uruchamiać w konsoli za pomocą komendy `CI = true npm test`.

-----------------------------------------------------



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
