
class teacher
	Name				// string--input				name of the teacher
	type				// string--dropdown				class teacher or independent
	allowedSubjects		// string Array -- checkboxes	list of subjects the teacher is allowed to take
	maxLectures			// int--input					maximum number of lectures that can be alotted excluding free lectures
	minFreeLectures		// int--input					minimum number of lectures that need to be alloted as 'free'
	classTeacherOf		// classID						a class the teacher is always assigned 0,1,9 lectures

class subject
	Name				// string--input				name of the subject
	type				// Boolean--radio				main or hobby
	minLectures			// int--inpiut					minimum number of lectures required for the class

class lecture
	ID					// monday1-friday9
	display name		// 
	subject				// name of subject
	techer				// techer teaching the subject



other options
number of grades? X number of sections?
number of classes for each subject
