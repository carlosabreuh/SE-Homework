package javaOOP;


///String _licenseNumber (for field names)

public class Vehicle {
	String licenseNumber;
	String make;
	String model;
	String price;
	
	//constructor
	//public Vehicle(String ln, String m, String mod, String p) != this works but it should have meaningful names
	
	//v_ is to differentiate local variable
	public Vehicle(String v_licenseNumber, String v_make, String v_model, String v_price) {
		this.licenseNumber = v_licenseNumber;
		this.make = v_make;
		this.model = v_model;
		this.price = v_price;
	}
	
	//method
	public void drive(boolean forward) {
		if (forward == true)
			System.out.println("Going forward");
		else
			System.out.println("Stop");
	}
	
	//static method
	public static void gasRefill (boolean gasLight) {
		if (gasLight == true)
			System.out.println("Put gas!");
		else
			System.out.println("Keep going!");
	}
	
}

