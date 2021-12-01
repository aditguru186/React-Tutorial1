// import React from "react";
// import ReactDOM, { render } from "react-dom";
// import "./main.css";
// console.log("Hi There");
var Avatar = function () {
  return (
    //Render profile picture here and return
    <div></div>
  );
};
var UserName = function () {
  //Render Username with proper fonts around here
  return <div></div>;
};
class GetConnected extends React.Component {
  render() {
    return (
      <div>
        <Like />
        <Share />
        <Add />
      </div>
    );
  }
}
var Like = function () {
  return (
    //Render the like image here
    //eventually learn to add the changing of colour on click after learning about the states
    <div></div>
  );
};
var Share = function () {
  return (
    //Add share image pic into this
    <div></div>
  );
};
var Add = function () {
  return (
    //Add current person icon
    <div></div>
  );
};
class Friendly extends React.Component {
  render() {
    return (
      <div>
        <Avatar />
        <UserName />
        <GetConnected />
      </div>
    );
  }
}
ReactDOM.render(<Friendly />, document.getElementById("friendly_app"));
