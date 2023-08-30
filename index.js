(async () => {
  const inquirer = (await import("inquirer")).default;
  const fs = (await import("fs")).default;
  const  { Triangle, Square, Circle }  = (await import("./lib/shapes.js")).default;
   

  function UserPrompt() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "Enter the text that would be in the SVG",
          name: "text",
          validate: (text) => {
            if (text.length > 3) {
              console.log("You cannot enter more tham 3 characters");
              return false;
            } else {
              return true;
            }
          },
        },
        {
          type: "input",
          message: "What should be the  color of the text? ",
          name: "textColor",
        },
        {
          type: "list",
          message: "Enter the shape of the logo",
          name: "shape",
          choices: ["Triangle", "Circle", "Square"],
        },
        {
          type: "input",
          message: "Enter the color of the shape",
          name: "shapeColor",
        },
      ])
      .then((answers) => {
        writeToFIle("logo.svg", answers);
      
      });
  }

  function writeToFIle(fileName, answers) {
    let html = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="200" height="200">`;
    html += `<g>`


    let choice;
    if (answers.shape === "Triangle") {
      choice = new Triangle(answers.shapeColor);
      html += choice.render();
    } else if (answers.shape === "Square") {
      choice = new Square(answers.shapeColor);
      html += choice.render();
    } else {
      choice = new Circle(answers.shapeColor);
      html += choice.render();
    }

    html += `<text x="80" y="100" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>`;
html += `</g>`
    html += `</svg>`;

    fs.writeFile(fileName, html, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Generated logo.svg");
      }
    });
  }

  UserPrompt();
})();
