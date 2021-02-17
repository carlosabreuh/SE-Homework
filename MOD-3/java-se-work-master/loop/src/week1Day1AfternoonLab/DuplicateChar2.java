package week1Day1AfternoonLab;

public class DuplicateChar2 {

	public static void main(String[] args) {
		// Create a Java Program to find duplicate characters in a String
		
		String str = "beautiful beach";
		
		//str.toCharArray() converts the string into a sequence of characters
	      char[] array = str.toCharArray();
	      
	      System.out.println("The string is: " + str);
	      System.out.print("Duplicate Characters in above string are: ");
	      
	      for (int i = 0; i < str.length(); i++) {
	         for (int j = i + 1; j < str.length(); j++) {
	            if (array[i] == array[j]) {
	               System.out.print(array[j] + " ");
	               break;
	            }
	         }
	      }
	}

}
