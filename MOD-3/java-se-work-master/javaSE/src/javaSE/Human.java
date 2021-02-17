package javaSE;

	public class Human {
		String name;
		double height;
		double weight;
		int SSN;
		
		
		String eat(boolean hungry) {
			if(hungry)
				return "Need some food!";
			else
				return "Don't need any food!";
		}
		

	}

