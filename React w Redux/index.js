//ReactDOM.render(<p>hiiiii</p>, document.getElementById("root"))

// ReactDOM.render(<div>
//     <h1>React Course</h1>
//     <p>Lets explore React</p>
// </div>,
// document.getElementById("root")
// );

//where the content has to be rendered?
const root = ReactDOM.createRoot(document.getElementById("root"));

//what to be rendered
root.render(
    <div>
    <h1>React Course</h1>
    <p>Lets learn React</p>
</div>);