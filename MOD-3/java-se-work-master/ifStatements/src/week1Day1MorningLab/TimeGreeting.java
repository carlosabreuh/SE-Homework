package week1Day1MorningLab;

public class TimeGreeting {

	public static void main(String[] args) {
		/* Write a java  program that displays 
		 	* "Good Morning" if time is between 5AM-11:59 
		 	*"Good Afternoon" if time is between 12 - 16 
		 	*otherwise "Hey there" */

			int timeOfDay = 1400;
				if (timeOfDay >= 0500 && timeOfDay <= 1159) {
					System.out.println("Good Morning");
				}
				else if (timeOfDay >= 1200 && timeOfDay <= 1600) {
					System.out.println("Good Afternoon");
				}
				else {
					System.out.println("Hey There");
						
				}		
	}

}
