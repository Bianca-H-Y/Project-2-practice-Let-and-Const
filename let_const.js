/*

1) 	Write the code for function addNewTeachers() found on line 35. This function should receive parameter newTeachers, defined on line 52, and add the new teachers to the treehouseTeachers variable. 
 //creatiion is on line 34
2)	Find function printTreehouseSummary(). There is something you need to fix in this function so the console.log() on the final line of the function outputs the correct number of JavaScript courses and teachers.
 //the fix is that there is a Var on line 42; change to let
3)	At this point, attempt to run your code by typing node let_const.js in your workspace console and hitting enter. You should receive an error message when you do this. Use the clues in this error message to fix the program so it runs.
-this is because variable have to be placed before their called, more on line 76
*/


const teachers = [
	{
		name: 'Ashley',
		topicArea: 'Javascript'
	}
];


const courses = ['Introducing JavaScript',
				'JavaScript Basics',
				'JavaScript Loops, Arrays and Objects',
				'Getting Started with ES2015',
				'JavaScript and the DOM',
				'DOM Scripting By Example'];
			

var i = courses.length;



function addNewTeachers(newTeachers) {
	// TODO: write a function that adds new teachers to the teachers array 
  teachers.push(...newTeachers); //I created the solution to push the variable newTeachers and it's array to const teachers
}

//1) 	Write the code for function addNewTeachers() found on line 35. This function should receive parameter newTeachers, defined on line 52(now57), and add the new teachers to the treehouseTeachers variable
/***Since line 57 has a variable with an array of object literals added I can add the variable newTeachers 
by adding a push method with the rest parameter added: line 32  teachers.push(...newTeachers); in the function
addNewTeachers with the parameter (newTeachers); looks like function addNewTeachers(newTeachers) { ***/
function printTreehouseSummary() {
	// TODO: fix this function so that it prints the correct number of courses and   teachers -done
	
  for (let i = 0; i < teachers.length; i++) { //change var to let//
	 console.log(`${teachers[i].name} teaches ${teachers[i].topicArea}`);
	}
	
  console.log(`Treehouse has ${i} JavaScript courses, and ${teachers.length} Javascript teachers`);
}

let newTeachers = [
{
    name: 'James',
    topicArea: 'Javascript'
},
{
    name: 'Treasure',
    topicArea: 'Javascript'
}
];

addNewTeachers(newTeachers);
printTreehouseSummary();



/***let newTeachers = [
	{
		name: 'James',
		topicArea: 'Javascript'
	},
	{
		name: 'Treasure',
		topicArea: 'Javascript'
	}
]; Note: code that existed here is not running b/c variable have to be listed at the top
or at least before they are called. ***/







