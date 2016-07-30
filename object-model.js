
class teacher
	Name				// name of the teacher
	type				// class teacher or independent
	allowedSubjects		// the subjects the teacher is allowed to take
	maxLectures			// maximum number of lectures that can be alotted excluding free lectures
	minFreeLectures		// minimum number of lectures that need to be alloted as 'free'
	classTeacherOf		// a class the teacher is always assigned 0,1,9 lectures

class subject
	Name				// name of the subject
	type				// main or hobby
	minLectures			// minimum number of lectures required for the class

class lecture
	ID					// monday1-friday9
	subject				// name of subject
	techer				// techer teaching the subject




