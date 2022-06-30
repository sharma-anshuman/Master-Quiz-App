const HardQbank = [
    {
      question: "Which of the following sorting algorithms can be used to sort a random linked list with minimum time complexity?",
      answers: ["Insertion Sort", "Quick Sort", "Heap Sort", "Merge Sort"],
      correct: "Merge Sort",
      questionId: "0991099",
    },
    {
      question: "In the worst case, the number of comparisons needed to search a singly linked list of length n for a given element is",
      answers: ["log 2 n", "n/2", "log 2 n – 1", "n"],
      correct: "n",
      questionId: "093909",
    },
    {
      question: "Given a hash table T with 25 slots that stores 2000 elements, the load factor α for T is __________",
      answers: ["80", "0.0125", "8000", "1.25"],
      correct: "80",
      questionId: "009039",
    },
    {
      question: "The minimum number of stacks needed to implement a queue is",
      answers: ["3", "1", "2", "4"],
      correct: "2",
      questionId: "090089",
    },
    {
      question: "The average depth of a binary search tree is:",
      answers: ["O(n^0.5)", "O(n)", "O(log n)", "O(n log n)"],
      correct: "O(log n)",
      questionId: "01010101",
    },
    {
      question: "In a file which contains 1 million records and the order of the tree is 100, then what is the maximum number of nodes to be accessed if B+ tree index is used?",
      answers: ["5", "4", "3", "10"],
      correct: "4",
      questionId: "092299",
    },
    {
      question: "Trie is also known as _____",
      answers: ["Treap", "Binomial Tree", "2-3 Tree", "Digital Tree"],
      correct: "Digital Tree",
      questionId: "099099",
    },
    {
      question: "What is the worst case efficiency for a path compression algorithm?",
      answers: ["O(M log N)", "O(N log N)", "O(log N)", "O(N)"],
      correct: "O(M log N)",
      questionId: "222099",
    },
    {
      question: "What is the time complexity of insert function in a hash table using a doubly linked list?",
      answers: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
      correct: "O(1)",
      questionId: "2222099",
    },
    {
      question: "Which of the following technique stores data in a separate entity in case of a collision?",
      answers: ["Open addressing", "Chaining using doubly linked list", "Linear probing", "Double hashing"],
      correct: "Chaining using doubly linked list",
      questionId: "09922099",
    },
    {
      question: "Which of the following constructors are provided by the C++ compiler if not defined in a class?",
      answers: ["Copy constructor", "Default constructor", "Assignment constructor", "All of the mentioned"],
      correct: "All of the mentioned",
      questionId: "222292099",
    },
    {
      question: "Which concept allows you to reuse the written code in C++?",
      answers: ["Inheritance", "Polymorphism", "Abstraction", "Encapsulation"],
      correct: "Inheritance",
      questionId: "0998999099",
    },
    {
      question: "What is the benefit of c++ input and output over c input and output?",
      answers: ["Both Type safety & Exception", "Sequence container", "Exception", "Type safety"],
      correct: "Type safety",
      questionId: "0999989",
    },
    {
      question: "Which of the following is a Modifying Sequence Operation?",
      answers: ["all_of()", "any_of()", "equal()", "swap()"],
      correct: "swap()",
      questionId: "09099",
    },
    {
      question: "Which function can be used to find the sum of a vector container?",
      answers: ["findsum()", "accumulate()", "calcsum()", "checksum()"],
      correct: "accumulate()",
      questionId: "97675678",
    },
    {
      question: "Which algorithm is most optimised for finding the maximum subarray sum",
      answers: ["Kadane's Algorithm", "Floyd Warshall Algorithm", "Dijkstra Algorithm", "Boyer Moore's Algorithm"],
      correct: "Kadane's Algorithm",
      questionId: "09459099",
    },
    {
      question: "Which is not a paradigm of programming?",
      answers: ["Greedy", "Searching", "Dynamic Programming", "Recursion"],
      correct: "Searching",
      questionId: "0912219099",
    },
  ];
  
  export default (n = 5) => HardQbank.sort(() => 0.5 - Math.random()).slice(0, n);