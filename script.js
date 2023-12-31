/* create 1+26(alphabet)=26 cell horizontal using for loop 
//need to create a cell individual of <div>
// here we the cell is not 0th we neec have every cell with ascii code
need to append to the header class
*/
const header=document.querySelector(".header");
let columns=27;
for(let i=0;i<columns;i++){
    const cell=document.createElement("div");
    i!=0 && (cell.innerText=String.fromCharCode(64+i));
    // cell.className="cell";
    i===0 ? (cell.className="frist-cell") :(cell.className="cell");
    header.appendChild(cell); //append the div to the header
}

const snoContainer=document.querySelector(".sno-container");
const rowsContainer=document.querySelector(".rows-container");
let rows=50;

function createRow(rowNumber){
    const row=document.createElement("div");  //<div></div> 
    row.className="row"; //<div class="row"></div>
    //<div class="row">need to create 26 cell</div>
    for(let i=1;i<columns;i++){
      //  <div class="row"><div class="cell"></div></div>
      //each cell need to contentEditable=true
      const cell=document.createElement("div");
      cell.contentEditable=true;
      cell.className="cell";
      row.appendChild(cell);
    }  
    return row;  

}
for(let i=1;i<=rows;i++){
    const snoCell=document.createElement("div");
    snoCell.className="snoCell";
    snoCell.innerText=i;
    snoContainer.appendChild(snoCell); 
    //for rows-container
    //let createRow() where it need to return row =>append to rowsConatiner
    let rowElement=createRow(i);
    rowsContainer.append(rowElement);
}
/* for the rows-container(cells) we need add 50 rows
for each =>we need to insert 26 columns */