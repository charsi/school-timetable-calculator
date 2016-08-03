class Teacher{
	constructor(id, name, type, allowedSubjects, maxLectures, minFreeLectures){
		this.id = id;
		this.name = name;
		this.type = type;
		this.allowedSubjects = allowedSubjects;
		this.maxLectures = maxLectures;
		this.minFreeLectures = minFreeLectures;
		this.classTeacherOf = false;
		this.lectures;
	}
}

class Subject{
	constructor(id, name, type, minLectures){
		this.id = id;
		this.name = name;
		this.type = type;
		this.minLectures = minLectures;
	}
	
}

class Lecture{
	constructor(day, slot, classroom){
		this.id = day+"-"+slot;
		this.day = day;
		this.subject;
		this.teacher;
		this.slot = slot;
		this.inClassroom = classroom;
		this.subjectNotTaughtbyClassTeacher = ; 
	}
}

class Classroom{
	constructor(id, displayName, classTeacher){
		this.id = id;
		this.displayName = displayName;
		this.classTeacher = classTeacher;
		this.lectures =[];
		Classroom.prototype.createTimetable = function(teachers){
			lectures = this.lectures;
			for (i=0; i<lectures.length; i++){
				var lecture = lectures[i];
				// assign class teacher for lectures 1 and 9
				if (lecture.slot == 1 || lecture.slot ==9){
					lecture.teacher = this.classTeacher;
				}
				else {
					lecture.teacher = 
				}
			}
		}
	}
}

class Grade{
	constructor(displayName, sections){
		this.displayName = displayName;
		this.sections = sections;
	}
}

class Timetable{
	constructor(){
		
	}
}


var grades = [new Grade("1", 9), new Grade("2", 8), new Grade("3", 8) ];
var teachers = [];
var subjects = ["English","Hindi","Maths","EVS", "dance", "art", "games", "library", "computers", "music"]
var classrooms = [];
var lectures = [];

// create teachers part1
for (i=1; i<=25; i++){
	var subSubjects = [subjects[1],subjects[2],subjects[3],subjects[4]];
	var name = Math.random().toString(36).substring(7);
	var t = new Teacher(i, name, "class teacher", subSubjects, 32, 13) ;
	teachers.push(t);
}

// create teachers part2
for (i=26; i<=28; i++){
	var subSubjects = [subjects[1],subjects[2],subjects[3]];
	var name = Math.random().toString(36).substring(7);
	var t = new Teacher(i, name, "subject teacher", subSubjects, 32, 13) 
	teachers.push(t);
}

// create teachers part3
for (i=29; i<=33; i++){
	var name = Math.random().toString(36).substring(7);
	var t = new Teacher(i, name, "hobby teacher", subjects, 32, 13) 
	teachers.push(t);
}

function getChar(n){
	return String.fromCharCode(96 + n);
}

//create classes
var classIdCount = 1;
for (i=1; i<=grades.length; i++){
	var grade = grades[i-1];
	var secNumber = grade.sections;
	for (e=1; e<=secNumber; e++){
		classIdCount++;
		c = new Classroom(classIdCount, grade.displayName+getChar(e), teachers[classIdCount])
		classrooms.push(c);
	}
}

// assign classes to class teachers
for (i=0; i<=24; i++){
	teachers[i].classTeacherOf = classrooms[i];
}

var days = ["monday","tuesday","wednesday","thursday","friday"];

// create lectures
for (i=0; i<classrooms.length; i++){
	cl = classrooms[i];
	for (ii=0; ii<days.length; ii++){
		weekday = days[ii];
		for (iii=1; iii<=9; iii++){
			daySlot = iii;
			var lec = new Lecture(weekday, daySlot, cl.displayName );
			cl.lectures.push(lec);
			lectures.push(lec);
		}
	}	
}

/* function createTimetable(){
	// 
	for (i=0; i<classrooms.length; i++){
		thisclass = classrooms[i];
		for (ii=0; ii<thisclass.lectures.length; ii++){
		
		}
	}	
} */

classrooms[1].createTimetable(3);

console.log("teachers : ");
console.log(teachers);
console.log("classrooms : ");
console.log(classrooms);