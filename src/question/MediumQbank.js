const MediumQbank = [
    {
      question: "Which of the following is a correct identifier in C++?",
      answers: ["VAR_1234", "$var_name", "7VARNAME", "7var_name"],
      correct: "VAR_1234",
      questionId: "0991099",
    },
    {
      question: "Which of the following is not a type of Constructor in C++?",
      answers: ["Default constructor", "Parameterized constructor", "Copy constructor", "Friend constructor"],
      correct: "Friend constructor",
      questionId: "093909",
    },
    {
      question: "Which transmission media provides the highest transmission speed in a network?",
      answers: ["coaxial cable", "twisted pair cable", "optical fiber", "electrical cable"],
      correct: "optical fiber",
      questionId: "009039",
    },
    {
      question: "Which of the following tasks is not done by data link layer?",
      answers: ["framing", "error control", "flow control", "channel coding"],
      correct: "channel coding",
      questionId: "090089",
    },
    {
      question: "CRC stands for __________",
      answers: ["cyclic redundancy check", "code repeat check", "code redundancy check", "cyclic repeat check"],
      correct: "cyclic redundancy check",
      questionId: "01010101",
    },
    {
      question: "Which of the following is a data link protocol?",
      answers: ["ethernet", "point to point protocol", "hdlc", "all of the mentioned"],
      correct: "all of the mentioned",
      questionId: "092299",
    },
    {
      question: "Which of the following type is provided by C++ but not C?",
      answers: ["double", "float", "int", "bool"],
      correct: "bool",
      questionId: "099099",
    },
    {
      question: "Which of the following correctly declares an array in C++?",
      answers: ["array{10};", "array array[10];", "int array;", "int array[10];"],
      correct: "int array[10];",
      questionId: "222099",
    },
    {
      question: "Which is more effective while calling the C++ functions?",
      answers: ["call by object", "call by pointer", "call by value", "call by reference"],
      correct: "call by reference",
      questionId: "2222099",
    },
    {
      question: "What does OS X has?",
      answers: ["monolithic kernel with modules", "microkernel", "monolithic kernel", "hybrid kernel"],
      correct: "hybrid kernel",
      questionId: "09922099",
    },
    {
      question: "The main memory accommodates ____________",
      answers: ["cpu", "user processes", "operating system", "all of the mentioned"],
      correct: "operating system",
      questionId: "222292099",
    },
    {
      question: "The operating system is responsible for?",
      answers: ["bad-block recovery", "booting from disk", "disk initialization", "all of the mentioned"],
      correct: "all of the mentioned",
      questionId: "0998999099",
    },
    {
      question: "For real time operating systems, interrupt latency should be ____________",
      answers: ["zero", "minimal", "maximum", "dependent on the scheduling"],
      correct: "minimal",
      questionId: "0999989",
    },
    {
      question: "The C++ code which causes abnormal termination/behaviour of a program should be written under _________ block.",
      answers: ["catch", "throw", "try", "finally"],
      correct: "try",
      questionId: "09099",
    },
    {
      question: "Which one of the following is a real time operating system?",
      answers: ["Windows CE", "RTLinux", "VxWorks", "All of the mentioned"],
      correct: "All of the mentioned",
      questionId: "97675678",
    },
    {
      question: "The information about all files is kept in ____________",
      answers: ["operating system", "separate directory structure", "swap space", "none"],
      correct: "separate directory structure",
      questionId: "09459099",
    },
    {
      question: "Network operating system runs on ___________",
      answers: ["every system in the network", "server", "both", "none"],
      correct: "server",
      questionId: "0912219099",
    },
  ];
  
  export default (n = 5) =>
    MediumQbank.sort(() => 0.5 - Math.random()).slice(0, n);
