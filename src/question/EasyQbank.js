const EasyQbank = [
    {
      question: "In which decade was the American Institute of Electrical Engineers (AIEE) founded?",
      answers: ["1850s", "1880s", "1930s", "1950s"],
      correct: "1880s",
      questionId: "0991099",
    },
    {
      question: "What is part of a database that holds only one type of information?",
      answers: ["Report", "Field", "Record", "File"],
      correct: "Field",
      questionId: "093909",
    },
    {
      question: "'OS' computer abbrevation usually means?",
      answers: ["Order of Significance", "Open Software", "Operating System", "Optical Sensor"],
      correct: "Operating System",
      questionId: "009039",
    },
    {
      question: "'.MOV' extension refers usually to what kind of file?",
      answers: ["Image file", "Movie file", "Audio file", "MS Office Document"],
      correct: "Movie file",
      questionId: "090089",
    },
    {
      question: "Who developed Yahoo?",
      answers: ["Dennis Ritchie & Ken Thompson", "David Filo & Jerry Yang", "Vint Cerf & Robert Kahn", "Steve Case & Jeff Bezos"],
      correct: "David Filo & Jerry Yang",
      questionId: "01010101",
    },
    {
      question: "The most common format for a home video recorder is VHS. VHS stands for...?",
      answers: ["Video Home System", "Very high speed", "Video horizontal standard", "Voltage house standard"],
      correct: "Video Home System",
      questionId: "092299",
    },
    {
      question: "'DB' computer abbreviation usually means ?",
      answers: ["Database", "Double Byte", "Data Block", "Driver Boot"],
      correct: "Database",
      questionId: "099099",
    },
    {
      question: "Who created Pretty Good Privacy (PGP)?",
      answers: ["Phil Zimmermann", "Tim Berners-Lee", "Marc Andreessen", "Ken Thompson"],
      correct: "Phil Zimmermann",
      questionId: "222099",
    },
    {
      question: "What do we call a network whose elements may be separated by some distance? It usually involves two or more small networks and dedicated high-speed telephone lines.",
      answers: ["URL", "LAN", "WAN", "WWW"],
      correct: "WAN",
      questionId: "2222099",
    },
    {
      question: "What does AM mean?",
      answers: ["Angelo marconi", "Anno median", "Arithmetic mean", "Amplitude modulation"],
      correct: "Amplitude modulation",
      questionId: "09922099",
    },
    {
      question: "Who built the world's first binary digit computer: Z1...?",
      answers: ["Konrad Zuse", "Ken Thompson", "Alan Turing", "Maxim depp"],
      correct: "Konrad Zuse",
      questionId: "222292099",
    },
    {
      question: "Who co-created the UNIX operating system in 1969 with Dennis Ritchie?",
      answers: ["Bjarne Stroustrup", "Steve Wozniak", "Ken Thompson", "Niklaus Wirth"],
      correct: "Ken Thompson",
      questionId: "0998999099",
    },
    {
      question: "What is the term to ask the computer to put information in order numerically or alphabetically",
      answers: ["Crop", "Report", "Record", "Sort"],
      correct: "Sort",
      questionId: "0999989",
    },
    {
      question: "The input used by an antenna or cable to a TV set uses frequencies called..?",
      answers: ["IF", "RF", "AF", "SAP"],
      correct: "RF",
      questionId: "09099",
    },
    {
      question: "Which is NOT a programming language",
      answers: ["C++", "Python", "Java", "HTML"],
      correct: "HTML",
      questionId: "97675678",
    },
    {
      question: "Who co-founded Hotmail in 1996 and then sold the company to Microsoft?",
      answers: ["Shawn Fanning", "Ada Byron Lovelace", "Sabeer Bhatia", "Ray Tomlinson"],
      correct: "Sabeer Bhatia",
      questionId: "09459099",
    },
    {
      question: "Which is a type of Electrically-Erasable Programmable Read-Only Memory?",
      answers: ["Flash", "Flange", "Fury", "FRAM"],
      correct: "Flash",
      questionId: "0912219099",
    },
  ];
  
  export default (n = 5) => EasyQbank.sort(() => 0.5 - Math.random()).slice(0, n);