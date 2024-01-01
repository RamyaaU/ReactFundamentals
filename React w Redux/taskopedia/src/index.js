import React from 'react';
import ReactDOM from 'react-dom/client';
import "./CSS/style.css"

const root = ReactDOM.createRoot(document.getElementById('root'));

//note always the component name must be starting with uppercase
function MainBody()
{
  const whatWeWillLearn = "React JS";
  const lectureCount = 3;
  //other ways of init variables
  //var whatWeWillLearn = "React JS";
  //let whatWeWillLearn = "React JS";

  return(
  <div>
      <p>In this course, we will learn {whatWeWillLearn} by building TaskOPedia!</p>
      <br />
      Total Lecture - 
      <ul>
        <li>Basic foundation</li>
        <li>Functional and class components</li>
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
    <h1 className="heading1">Welcome to Ramya's React Course</h1>
  );
}

//or using props styling can be done
const subHeaderStyle = {
  color : "blueviolet",
  backgroundColor : "lightgray",
}

//assignment - create a sub header - child comp
function SubHeader()
{
  //and can be called like the below
  return <p style={subHeaderStyle}>This will be an exciting course.</p>
}

//assignment - create a footer
function Footer()
{
  return(
    //style the footer directly through inline style
    <p style={{color : "gray", backgroundColor: "black"}}>Happy Coding!</p>
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