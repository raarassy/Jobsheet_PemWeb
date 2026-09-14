// BAGIAN 13: Stack (LIFO)
class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
}

const searchHistory = new Stack();
searchHistory.push("laptop");
searchHistory.push("phone");
searchHistory.push("tablet");

function undoSearch(history) {
  return !history.isEmpty() ? history.pop() : null;
}

// BAGIAN 14: Queue (FIFO)
class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(item) {
    this.items.push(item);
  }
  dequeue() {
    return this.items.shift();
  }
  peek() {
    return this.items[0];
  }
  isEmpty() {
    return this.items.length === 0;
  }
}

// BAGIAN 15: Recursion
const categoriesTree = [
  {
    name: "Electronics",
    children: [
      { name: "Laptop", children: [] },
      { name: "Phone", children: [] }
    ]
  },
  {
    name: "Groceries",
    children: []
  }
];

function printCategories(categories, depth = 0) {
  for (const category of categories) {
    console.log(" ".repeat(depth * 2) + category.name);
    if (category.children && category.children.length > 0) {
      printCategories(category.children, depth + 1);
    }
  }
}

// BAGIAN 16: Algorithm Complexity (Big-O)
function compareSearchSteps(target) {
  const dataSize = 10000;
  const arr = Array.from({ length: dataSize }, (_, i) => i + 1);

  // Linear Search Steps
  let linearSteps = 0;
  for (let i = 0; i < arr.length; i++) {
    linearSteps++;
    if (arr[i] === target) break;
  }

  // Binary Search Steps
  let binarySteps = 0;
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    binarySteps++;
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) break;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return { target, linearSteps, binarySteps };
}

// --- Pengujian Pengolahan Data ---
console.log("UNDO SEARCH:", undoSearch(searchHistory));
console.log("RECURSION CATEGORIES:");
printCategories(categoriesTree);
console.log("KOMPLEKSITAS SEARCH:", compareSearchSteps(7500));