const projects = [
  {
    titl: "Contact Manager - Java (RMI & Socket)",
    desc: "Two client-server contact management applications built in Java, both offering the same terminal-based experience (register, login, and manage a personal contact list) but implemented with different communication technologies.",
    tech: "Java",
    link: "https://github.com/VerneckDev/Contact-Manager.git"
  },
  {
    titl: "INEM SOS - Emergency Management System",
    desc: "A console-based emergency dispatch and management system inspired by INEM (Instituto Nacional de Emergência Médica — Portugal's national emergency medical services). The system allows staff to register emergencies, automatically dispatch the nearest ambulance and hospital, and track the lifecycle of each occurrence.",
    tech: "Java",
    link: "https://github.com/VerneckDev/INEM-Simulation.git"
  },
  {
    titl: "2048 - The Game",
    desc: "A terminal-based implementation of the classic 2048 puzzle game, written in Java. The board is rendered using Unicode box-drawing characters, and the game is controlled entirely from the keyboard.",
    tech: "Java",
    link: "https://github.com/VerneckDev/2048-GAME.git"
  }
];

const container = document.getElementById("lista-projetos");

projetos.forEach((p) => {
  const div = document.createElement("div");
  div.className = "projeto";

  div.innerHTML = `
    <h3>${p.titl}</h3>
    <p>${p.desc}</p>
    <p><strong>Technology:</strong> ${p.tech}</p>
    <a href="${p.link}" target="_blank" title="Fork repository on GitHub">See on GitHub</a>
  `;

  container.appendChild(div);
});
