package javaSE;

public class JavaSESyntax {

	public static void main(String[] args) {
		//1. Variables
				System.out.println("Variables ##############################");
				var str ="string";
				var num = 4;
				System.out.println(str + " " + num);
				
				
		//2. Primitive Data Types
				System.out.println("Primitive Data Types ##############################");
				byte b = 127;
				short s = 32767;
				int i = 2147483647;
				long l = 9223372036854775807l;
				float fl = 0.1234567f;
				double d = 0.123456789012345;
				boolean bool = true;
				char c = 'c';
				
		//3. Type Casting
			/*
			 * Widening Casting (automatically) - converting a smaller type to a larger type size
			 * byte -> short -> char -> int -> long -> float -> double
			 * Narrowing Casting (manually) - converting a larger type to a smaller size type
			 * double -> float -> long -> int -> char -> short -> byte
			*/
				System.out.println("Type Casting ##############################");
				int x = (int)3.14;
				System.out.println(x);
				
		//4. Strings
				System.out.println("Strings ##############################");
				String str1 = "Welcome to SE class!"; //array of char => 'W' 'e' 'l' ....
				System.out.println(str1);
				System.out.println(str1.charAt(1));
				System.out.println(String.valueOf(3.14)+5);
				
		//5. Math
				System.out.println("Math ##############################");
				System.out.println(Math.PI);
				System.out.println(Math.max(5, 6));
				System.out.println(Math.sqrt(80));
				int rand = (int)(Math.random()*100);
				System.out.println(rand);
				
		//6. Conditions
			//6.1. if .. else
				System.out.println("if .. else ##############################");
				int value = 6;
				if( value>5)
					System.out.println(value);
				else
					System.out.println(5);
				
			//6.2. switch
				System.out.println("switch ##############################");
				switch (value) {
				case 6:
					System.out.println(6);
					break;
				case 5: 
					System.out.println(5);
					break;
				default:
					System.out.println("Not valid number");
				}
				
		//7. Loops
			//7.1. while
				System.out.println("while ##############################");
				int index = 0;
				while( index < 5 ) {
					System.out.println(index);
					index++;
				}

			//7.2. do..while
				System.out.println("do..while ##############################");

				int index1 = 0;
				do {
					System.out.println(index1);
					index1++;
				} while( index1 < 5 );
				
			//7.3. for
				System.out.println("for ##############################");
				for(int index3=0;  index3<5; index3++) {
					System.out.println(index3);
				}

			//Arrays
				System.out.println("Arrays ##############################");
				int[] arr = {1,2,3,4,5};
				for(int index4=0; index4<arr.length; index4++) {
					arr[index4] = 5; //changing the array elements
					System.out.println(arr[index4]);
				}
				
				for (int j : arr) {
					System.out.println(j);
				}
				
			//7.4. foreach
				System.out.println("foreach ##############################");
				int[] arr1 = {1,2,3,4,5};
				
				for(int j : arr1) {
					j = 5; //changing the value of j ONLY NOT the Array Elements :)
					System.out.println(j);
				}

				for(int j : arr1) {
					System.out.println(j);
				}
				
		//Methods calls
				System.out.println("Methods calls ##############################");
				System.out.println(addTwoNumbers(4,5)); //
				System.out.println(addTwoNumbers(4,5.5));
				System.out.println(addTwoNumbers(4.5,5.5));
				
				
		//OOP
				System.out.println("OOP ##############################");
				Human person1 = new Human();
				System.out.println(person1);
				System.out.println(person1.height);
				System.out.println(person1.name);
				System.out.println(person1.weight);
				System.out.println(person1.SSN);
				System.out.println(person1.eat(true));

				
			}
			
		//Methods
			static int addTwoNumbers(int n1, int n2){
				return n1+n2;
			}
			
			static double addTwoNumbers(double n1, int n2) {
				return n1+n2;
			}
			
			static double addTwoNumbers(double n1, double n2) {
				return n1+n2;
			}
					


		}



