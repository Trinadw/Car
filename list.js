var todos = ["Buy new turtle"];
var input = prompt("What would you like to do?");

while(input !=="quit"){
	//handle input
	if (input === "list"){
		console.log(todos);
	}else if(input ==="new"){
	//ask for new todo
	var newTodo = prompt("Enter new todo");
	//add to todos array
	todos.push(newTodo);
}


var input = prompt("What would you like to do?");
//ask again for new input


}
console.log("Ok, you quit the app!");