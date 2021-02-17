package weekdayGen;

public class weekdayGen {

	//generate random number from 1-10, then based on that # make a 
	//switch statement that if 1, output Monday
	//2, output Tues
	//...
	//7, output sunday
	//8-10, output "not valid"
	
	public static void main(String[] args) {
		
		switch ( (int)(Math.random( )*8) ) {
        case 1:  System.out.println("Monday"); break;
        case 2:  System.out.println("Tuesday"); break;
        case 3:  System.out.println("Wednesday"); break;
        case 4:  System.out.println("Thursday"); break;
        case 5:  System.out.println("Friday"); break;
        case 6:  System.out.println("Saturday"); break;
        case 7:  System.out.println("Sunday"); break;
        default: System.out.println("Invalid Day!"); break;

		}
	}
}

////////////////////////////////////////////////////////////////////////////
//int randomNum = (int)(Math.random() * 11);
//switch (randomNum) {
//case 1:
//	System.out.println("Monday");
//	break;
//case 2:
//	System.out.println("Tuesday");
//	break;
//case 3:
//	System.out.println("Wednesday");
//	break;
//case 4:
//	System.out.println("Thursday");
//	break;
//case 5:
//	System.out.println("Friday");
//	break;
//case 6:
//	System.out.println("Saturday");
//	break;
//case 7:
//	System.out.println("Sunday");
//	break;
//default:
//	System.out.println("Not Valid");
//}