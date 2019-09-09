
var emp = [
	{
		name: "Revathi",
		age: 29,
		id: 591445,
		gender: "f"
	},
	{
		name: "Ram",
		age: 39,
		id: 4343434,
		gender: "f"
	},
	{
		name: "Yuvaraj",
		age: 30,
		id: 830087,
		gender: "m"
	},
	{
		name: "Raj",
		age: 35,
		id: 530337,
		gender: "m"
	}
];

function empList(){
	var x = "";
	for(var i = 0; i < emp.length; i++){
	var y = i + 1;
	x += `<tr><td> ${y} </td><td> ${emp[i].name} </td><td> ${emp[i].age} </td><td> ${emp[i].id} </td><td> ${emp[i].gender} </td></tr>`;
	};
	document.getElementById("demo").innerHTML = x;
};


function addEmp(){
	var v = {
				name: "Revathi",
				age: 29,
				id: 591445,
				gender: "f"
			};
	emp.push(v);
	empList();
};


function addNewEmp(){
	var newName = document.getElementById("newName").value;
	var newAge = document.getElementById("newAge").value;
	var newEmpId = document.getElementById("newEmpid").value;
	var newGender = document.getElementsByName("newGender");
	
	if(newName == "") {
		newNameEmpty = "Name is empty"
		document.getElementById("nameError").innerHTML = newNameEmpty;
	}else if (!isNaN(newName)){
		newNameNumber = "Enter a name not an number"
		document.getElementById("nameError").innerHTML = newNameNumber;
	}else{
		newNameString = ""
		document.getElementById("nameError").innerHTML = newNameString;
		newName1 = newName;
	}
	
	if(newAge == "") {
		newAgeEmpty = "Age is empty"
		document.getElementById("ageError").innerHTML = newAgeEmpty;
	}else{
		newAgeNumber = ""
		document.getElementById("ageError").innerHTML = newAgeNumber;
		newAge1 = newAge;
	}
	
	if(newEmpId == "") {
		newEmpIdEmpty = "Emp id is empty"
		document.getElementById("empIdError").innerHTML = newEmpIdEmpty;
	}else{
		newEmpIdNumber = ""
		document.getElementById("empIdError").innerHTML = newEmpIdNumber;
		newEmpId1 = newEmpId;
	}
	
	//better way
	for(var i = 0; i <= newGender.length; i++){
		if(newGender[i].checked){
			//console.log(newGender[i].value);
			var newGender1 = newGender[i].value;
			  break;
		}
	}
	
	if(newName != "" && newEmpId != "" && newAge != ""){
		var newRow = {
			name: newName1,
			age: newAge1,
			id: newEmpId1,
			gender: newGender1
		};
		emp.push(newRow);
		empList();
	}
	
	
	
	//console.log(newName, newAge, newEmpId, newGender);
};




empList();


