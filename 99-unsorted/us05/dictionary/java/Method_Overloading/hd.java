/**
 * 
 */
package hd;

/**
 * @author ykessler
 *
 */
public class hd {

	/**
	 * 
	 */
	public hd() {
		// TODO Auto-generated constructor stub
	}

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub

		overloading ov = new overloading();
		
		ov.difarg(22);
		ov.difarg(23, "myname");
		
		System.out.println("\n");
		
		ov.difargtype(33);
		ov.difargtype('m');
		
		System.out.println("\n");
		
		ov.sameArg(23, "myname");		
		ov.sameArg("myname",23);

        //
        
	}

}
