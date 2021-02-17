package javaOOP;

public class Main {

	public static void main(String[] args) {
		Vehicle saraRav4 = new Vehicle("ABC 123","Toyota","RAV4","24000");
			System.out.println(saraRav4.licenseNumber + " " + saraRav4.make + " " + saraRav4.model + " " + saraRav4.price);
			
		saraRav4.drive(true);
		
		//static method
		saraRav4.gasRefill(true);
//		Warning: The static method gasRefill(boolean) from the type Vehicle should be accessed in a static way
		
		Vehicle.gasRefill(false);
	}

}
