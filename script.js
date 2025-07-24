document.addEventListener("DOMContentLoaded", () => {
  //import the variables
  const techGrid = document.querySelector(".tech-grid");
  const techTemplate = document.querySelector(".tech-template");
  const projectsGrid = document.querySelector(".projects-grid");
  const projectTemplate = document.querySelector(".project-template");

  fetch("techstack.json")
    .then((response) => response.json())
    .then((data) => {
      techData = data;
      console.log(data);
      renderTechStack();
    })
    .catch((error) => console.error("Error fetching techsack.json", error));

  fetch("projects.json")
    .then((response) => response.json())
    .then((projects) => {
      projectData = projects;
      console.log(projects);
      renderProjects();
    })
    .catch((error) => console.error("Error fetching projects.json", error));

  //function for rendering the tech stack
  function renderTechStack() {
    techGrid.innerHTML = "";

    techData.forEach((techDetails) => {
      const techClone = techTemplate.content.cloneNode(true);
      const techName = techClone.querySelector(".tech-name");
      const experienceInfo = techClone.querySelector(".experience");

      techName.textContent = techDetails.tech;
      experienceInfo.textContent = techDetails.experience;

      techGrid.appendChild(techClone);
    });
  }

  //function for rendering the projectss
  function renderProjects() {
    projectsGrid.innerHTML = "";

    projectData.forEach((projectDetails) => {
      const projectClone = projectTemplate.content.cloneNode(true);
      const projectTitle = projectClone.querySelector(".project-title");
      const projectImg = projectClone.querySelector(".project-img-div");
      const projectsLiveSite = projectClone.querySelector(".project-link");

      projectTitle.textContent = projectDetails.title;
      projectImg.style.backgroundImage = `url(${projectDetails.img})`;
      projectsLiveSite.href = projectDetails.livesite;

      projectsGrid.appendChild(projectClone);
    });
  }
});
