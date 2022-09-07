const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const buildHtml = require("./src/template");
const teamMembers = [];

//Manager Questions
const managerQuestions = [
 {
  type: "input",
  name: "managerName",
  message: "What is the Manager's Name ?",
 },
 {
  type: "input",
  name: "managerId",
  message: "What is the Manager's Id ?",
 },
 {
  type: "input",
  name: "managerEmail",
  message: "What is the Manager's Email ?",
 },
 {
  type: "input",
  name: "managerOffice",
  message: "What is the Manager's Office Number ?",
 },
];

//Menu Questions
const menuQuestions = [
 {
  type: "list",
  name: "menuAnswer",
  message: "Choose what to do next:",
  choices: ["Build an Engineer", "Build an Intern", "Build an HTML file"],
 },
];

//Engineer Questions
const engineerQuestions = [
 {
  type: "input",
  name: "engineerName",
  message: "What is the Engineer's Name ?",
 },
 {
  type: "input",
  name: "engineerId",
  message: "What is the Engineer's Id ?",
 },
 {
  type: "input",
  name: "engineerEmail",
  message: "What is the Engineer's Email ?",
 },
 {
  type: "input",
  name: "engineerGithub",
  message: "What is the Engineer's Github ?",
 },
];

//Intern Questions
const internQuestions = [
 {
  type: "input",
  name: "internName",
  message: "What is the Intern's Name ?",
 },
 {
  type: "input",
  name: "internId",
  message: "What is the Intern's Id ?",
 },
 {
  type: "input",
  name: "internEmail",
  message: "What is the Intern's Email ?",
 },
 {
  type: "input",
  name: "internSchool",
  message: "What is the Intern's School ?",
 },
];

//Functions
function promptManagerFn() {
 inquirer.prompt(managerQuestions).then((managerAnswers) => {
  const manager = new Manager(
   managerAnswers.managerName,
   managerAnswers.managerId,
   managerAnswers.managerEmail,
   managerAnswers.managerOffice
  );
  console.log(manager);
  teamMembers.push(manager);
  console.log(teamMembers);
  promptMenuFn();
 });
}

function promptMenuFn() {
 inquirer.prompt(menuQuestions).then((menuAnswers) => {
  if (menuAnswers.menuAnswer == "Build an Engineer") {
   promptEngineerFn();
  }
  if (menuAnswers.menuAnswer == "Build an Intern") {
   promptInternFn();
  }
  if (menuAnswers.menuAnswer == "Build an HTML file") {
   promptHtmlFn();
  }
 });
}

function promptEngineerFn() {
 inquirer.prompt(engineerQuestions).then((engineerAnswers) => {
  const engineer = new Engineer(
   engineerAnswers.engineerName,
   engineerAnswers.engineerId,
   engineerAnswers.engineerEmail,
   engineerAnswers.engineerGithub
  );
  console.log(engineer);
  teamMembers.push(engineer);
  console.log(teamMembers);
  promptMenuFn();
 });
}

function promptInternFn() {
 inquirer.prompt(internQuestions).then((internAnswers) => {
  const intern = new Intern(
   internAnswers.internName,
   internAnswers.internId,
   internAnswers.internEmail,
   internAnswers.internSchool
  );
  console.log(intern);
  teamMembers.push(intern);
  console.log(teamMembers);
  promptMenuFn();
 });
}

function promptHtmlFn() {
 console.log(teamMembers);
 fs.writeFile("./dist/index.html", buildHtml(teamMembers), (error) => {
  console.log(error);
 });
}

//Call Functions
promptManagerFn();
