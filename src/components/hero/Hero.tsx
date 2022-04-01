import React from "react";

const Hero = (props: any) => {
  if (props.name) {
    return <h1>Hello, {props.name} snoo snoo!</h1>;
  } else {
    return <span>Hey, stranger boo boos</span>;
  }
};

export default Hero;
