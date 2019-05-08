package userDetailsRequestModel;

public class UserDetailsRequestModel {

	private String email;
	private String name;
	public UserDetailsRequestModel(String email, String name) {
		super();
		this.email = email;
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public String getName() {
		return name;
	}
	
}
