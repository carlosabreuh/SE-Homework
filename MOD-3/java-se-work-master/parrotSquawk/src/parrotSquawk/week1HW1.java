package parrotSquawk;


/*We have a parrot that likes to squawk at night in its cage when it’s scared. Write a method named getUp that has 2 parameters
* 1st parameter should be a boolean squawking- it represent the parrot.
* 2nd parameter represents the hour of the day and is an int named currentHour has a valid range of 0-23.
* We have to get up if the parrot is squawking before 6 or after 22 hours so in that case return true.
* All other cases will return false. If the currentHour parameter is less than 0 or greater than 23 return false*/


public class week1HW1 {
	
	
	//method
	public static void getUp(boolean squawking, int currentHour) {
		if (squawking == true) {
				if ( currentHour < 6 || currentHour > 22) {
					System.out.println("Time to get up");
			} 
				else {
				System.out.println("Stay in bed");
			}
				
		}
		if (squawking == false) {
			System.out.println("Stay in bed");
		}
	}
	
	
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		getUp(true, 9);

	}

}
