

export const Display = (() => {
  
})(); 










// The module that affects what the user sees;
// Everything that alters the dom;
// Must have to pull information to fill values,
// or allow another module/function to do the filling.

// function to create dom elements with optional class and innerText;
// if text was wanted, but a className is not, enter false instead;
function tagMaker(htmlTag, className, text) {
  let element = document.createElement(htmlTag);
  if(className) {
    element.classList.add(className);
  } else if(text) {
    element.innerHTML = text;
  } return element;
}

const valueAssignment = () => {
	function buildTile() {
		let book_div = document.createElement('div');
		let title = tagMaker('p');
		let author = tagMaker('p');
		let pageNum = tagMaker('p');
		let read = tagMaker('p');
		let omit = tagMaker('p');
		book.append(title, author, pageNum, read, omit);
		return book_div;
	}
	function assignValues(domElement, obj) {
		let nodes = domElement.childNodes;
		for(let i = 0; i < nodes.length; i++) {
			let keyValue = Object.values(obj)[i];
			nodes[i].textContent = keyValue;
		}
	};
	function produceBookTile(obj) {
		let book = buildTile();
		assignValues(book, obj);
		return book;
	}

	return { produceBookTile };
};

 // Attaches the information from the book object onto it's DOM element
function giveValues(obj, arr){
  for(i = 0; i < arr.length; i++){
   let key = Object.keys(obj)[i];
   let keyValue = Object.values(obj)[i];
   (key === 'remove') ? createButton(arr[i]) : arr[i].textContent = keyValue;
   arr[i].classList = `flex flex-${key}`;
   (key === 'read') ? createSpan(arr[i], keyValue) : false;
  }; return
};  


// function to create a book item, containing all the fields necessary
function buildTile(obj){
  let book = document.createElement('div');
  let title = tagMaker('p');
  let author = tagMaker('p');
  let pageNum = tagMaker('p');
  let read = tagMaker('p');
  let omit = tagMaker('p');
  book.append(title, author, pageNum, read, omit);
  let nodes = book.childNodes; // creates a nodeList of each p element created and appended
  giveValues(obj, nodes); // I want to take this out and have seperate function
                          // perform this action on the dom element it returns;
  library_grid.appendChild(book_div).classList = 'book-div';
};
 // Clears the existing grid of all elements
 function clearGrid(){
  let book_divs = document.querySelectorAll('.book-div');
  book_divs.forEach((element)=>{
    if(element !== book_divs[0]){
      element.remove();
    };
  }); 
}; 
 