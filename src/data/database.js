import Project from "./Project";

var myProject = new Project(
    "Awesome Project",
    "project-picture.jpg",
    "Tech",
    "6 months",
    ["John Doe", "Jane Smith"],
    ["Web Development", "UI/UX Design"],
    ["React", "Node.js", "MongoDB"],
    "2 Developers, 1 Designer",
    "We faced challenges with scalability and data handling."
);

var projectMap = new Map();

projectMap.put("1", myProject);

console.log(projectMap);