package week1Day1AfternoonLab;

public class WhileLoop1 {

	public static void main(String[] args) {
		// Using a while loop, print each char of a string ‘Hello World’
		
		// create a string
		String name = "Hello World";
		
		System.out.println("Characters in " + name + " are:");
			
		for(int i = 0; i<name.length(); i++) {

			// access each character
		  char a = name.charAt(i);
		  System.out.print(a + ", ");
		}
		
		
	}
}
