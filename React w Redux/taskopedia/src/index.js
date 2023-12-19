import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

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

//you can render like below
//root.render(MainBody());

//or render like this as well
//root.render(<MainBody />);

//or something like below
root.render(
  <div>
    <MainBody />
    <MainBody />
    <MainBody />
  </div>
)