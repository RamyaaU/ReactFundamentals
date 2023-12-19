import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

//note always the component name must be starting with uppercase
function MainBody()
{
  return(
  <div>
      <p>Ramya, you are the best!</p>
      <ul>
        <li>Ramya</li>
        <li>is the prettiesttttt</li>
      </ul>
    </div>
  );
}

//assignment - display parent child component
function Header()
{
  return (<div>
     <MainHeader></MainHeader>
     <SubHeader></SubHeader>
      </div>)
}

//assignment - create a main header - parent comp
function MainHeader()
{
  return(
    <h1>Welcome to Ramya's React Course</h1>
  );
}

//assignment - create a sub header - child comp
function SubHeader()
{
  return <p>This will be an exciting course.</p>
}

//assignment - create a footer
function Footer()
{
  return(
    <p>Happy Coding!</p>
  );
}

//you can render like below
//root.render(MainBody());

//or render like this as well
//root.render(<MainBody />);

//or something like below
root.render(
  <div>
    <Header />
    <MainBody />
    <Footer />
  </div>
)