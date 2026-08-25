const projetos = [
  {
    titulo: "Contact Manager - Java (RMI & Socket)",
    descricao: "Two client-server contact management applications built in Java, both offering the same terminal-based experience (register, login, and manage a personal contact list) but implemented with different communication technologies.",
    tecnologia: "Java",
    link: "https://github.com/VerneckDev/Contact-Manager.git"
  },
  {
    titulo: "INEM SOS - Emergency Management System",
    descricao: "A console-based emergency dispatch and management system inspired by INEM (Instituto Nacional de Emergência Médica — Portugal's national emergency medical services). The system allows staff to register emergencies, automatically dispatch the nearest ambulance and hospital, and track the lifecycle of each occurrence.",
    tecnologia: "Java",
    link: "https://github.com/VerneckDev/INEM-Simulation.git"
  },
  {
    titulo: "2048 - The Game",
    descricao: "A terminal-based implementation of the classic 2048 puzzle game, written in Java. The board is rendered using Unicode box-drawing characters, and the game is controlled entirely from the keyboard.",
    tecnologia: "Java",
    link: "https://github.com/VerneckDev/2048-GAME.git"
  }
];

const container = document.getElementById("lista-projetos");

projetos.forEach((p) => {
  const div = document.createElement("div");
  div.className = "projeto";

  div.innerHTML = `
    <h3>${p.titulo}</h3>
    <p>${p.descricao}</p>
    <p><strong>Technology:</strong> ${p.tecnologia}</p>
    <a href="${p.link}" target="_blank" title="Fork repository on GitHub">See on GitHub</a>
  `;

  container.appendChild(div);
});
