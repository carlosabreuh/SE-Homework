package week1Day1MorningLab;

public class IfElseGrades {

	public static void main(String[] args) {
		/* Write an if/else statement for the following requirements:
			*If student gets 90 or higher: console log  A
			*If students get 80 or above: console log B
			*If students get 70 or above: console log C
			*If students get 55 or above: console log D
			*Any grade lower than 55 is F */ 
		
		
			int grade = 54;
			if (grade >= 90) {
				System.out.println("Grade A");
			}
			else if (grade >= 80 && grade <= 89) {
				System.out.println("Grade B");
			}
			else if (grade >= 70 && grade <= 79) {
				System.out.println("Grade C");
			}
			else if (grade >= 55 && grade <= 69) {
				System.out.println("Grade D");
			}
			else {
				System.out.println("Grade F");
			}
	}

}
