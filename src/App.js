import './App.css';
import React from 'react';

function App(props) {
  return (
    <div>
      <Header data={props.data.header} />
      <Body segments={props.data.body} />
    </div>
  );
}

function Header(props) {
  return (
    <div>
      <MainTitle data={props.data.maintitle} />
      <Info data={props.data.info} />
    </div>
  );
}

function MainTitle(props) {
  return (
    <div>
      <h1 className="text-6xl font-extrabold font-sherif text-center mt-6">{props.data.title}</h1>
      <h3 className="text-xl text-gray-600 text-center mb-2">{props.data.tagline}</h3>
    </div>
  );
}

function Info(props) {
  return (
    <div className="border-t border-b overflow-auto">
      <h4 className="text-lg text-gray-800 float-left m-1 border-gray-200">{props.data.date}</h4>
      <Weather data={props.data.weather}/>
    </div>
  );
}

function Weather(props) {
  return (
    <div className="float-right overflow-auto">
      <h4 className="float-right m-1">{props.data.temp}</h4>
      <img className="float-left m-1 h-7" alt="weather icon" src={props.data.img} />
    </div>
  )
}

function Body(props) {
  let elements = []
  for (let i = 0; i < props.segments.length; i++) {
    elements.push(<Segment url={props.segments[i].url} title={props.segments[i].title} summary={props.segments[i].summary} key={'s'+i.toString()}/>)
    elements.push(<hr className="mx-4 border-gray-200" key={'r'+i.toString()} />)
  }

  elements.pop()

  return (
    <div>
      {elements}
    </div>
  )
}

function Segment(props) {
  return (
    <a href={props.url} className="m-2 block">
      <h3 className="m-1 text-xl font-bold">{props.title}</h3>
      <hr className="mx-8 border-gray-100"></hr>
      <p className="m-1">{props.summary}</p>
    </a>
  )
}

export default App;
