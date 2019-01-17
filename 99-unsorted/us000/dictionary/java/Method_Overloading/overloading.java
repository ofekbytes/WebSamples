package hd;

public class overloading {

	
	public void difarg(int intAge)
	{
		System.out.println("intAge  == " + intAge);
	}

	public void difarg(int intAge, String StFirtName)
	{
		System.out.println("intAge  == " + intAge + " StFirtName == " + StFirtName);
	}
	
	
	public void difargtype(int intAge)
	{
		System.out.println("int - intAge  == " + intAge);
	}
	
	public void difargtype(char chSex)
	{
		//m=male/f=female
		System.out.println("char - chSex  == " + chSex);
	}
	

	public void sameArg(int intAge, String StFirtName)
	{
		System.out.println("intAge  == " + intAge + " StFirtName == " + StFirtName);
	}
	
	public void sameArg(String StFirtName, int intAge)
	{
		System.out.println(" StFirtName == " + StFirtName + "intAge  == " + intAge);
	}
	
	
	
	//temp
	public overloading() {
		// TODO Auto-generated constructor stub
		System.out.println("[<<< overloading >>>] \n");
	}

	
}
