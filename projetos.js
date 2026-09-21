const projetos = [

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
  },
  {
    titl: "Quantum Computing - Numerical Pulses Optimization",
    desc: "Developed and implemented numerical pulse-optimization methods for a two-qubit Nuclear Magnetic Resonance (NMR) quantum computer using MATLAB. The project involved modelling the system Hamiltonian, implementing quantum gates and pulse sequences, simulating spin dynamics, and calculating quantum-state fidelity. I implemented and analysed Strongly Modulating Pulses (SMP) and GRAPE-based pulse optimization, including numerical parameter optimization and density-matrix analysis. The optimized pulses were experimentally tested on an NMR quantum computing platform, allowing the comparison of simulated and experimental results and providing hands-on experience in quantum control, numerical optimization, and experimental quantum computing.",
    tech: "MATLAB",
    link: "https://github.com/VerneckDev/QuantumComputing-NumericalOP"
  },
  {
    titl: "ATECC608B - Encoder Microchip",
    desc: "A hardware cryptography project using the ATECC608B secure element to encode simple phrases and small files. The chip communicates with an Arduino Uno over I2C, with one folder handling initial configuration and locking of the chip, and two more folders implementing separate encoders/decoders — one for phrase decoding, another for small file encoding.",
    tech: "C++, Pytohn",
    link: "https://github.com/VerneckDev/ATECC608B-Project.git"
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
