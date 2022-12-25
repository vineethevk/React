import React from "react";
import ReactDOM from "react-dom";
// function add(first, second) {
//     return first + second;
// }
import("./index.css");

// console.log(add(1, 3))

// const Heading = document.createElement("h1");
// Heading.innerHTML = "Hello Webpack";
// Heading.setAttribute("class", "bluecolor");

// document.getElementById("root").appendChild(Heading);

ReactDOM.createRoot(document.getElementById("root")).render(
    React.createElement("h1", { className: "bluecolor" }, "Hello Webpack")
)

let obj = {
    normal() {
        console.log("normal", this)
    },
    arrow: () => {
        console.log(this);
    }
}

obj.normal();
obj.arrow();



