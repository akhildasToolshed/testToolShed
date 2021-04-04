export class UserModel {

    private username:String;
    private role:String;
    private firstName: String;
    private lastName: String;
    private token: String;

    private password: String;

    public setPassword(password:String){
        this.password = password;
    }

    public getPassword(){
        return this.password;
    }

    public setToken(token: String){
        this.token= token;
    }
    
    public getToken(){
        return this.token
     }
    



    public setLirstName(lastName: String){
        this.lastName= lastName;
    }
    
    public getLirstName(){
        return this.lastName
     }
    



    public setFirstName(firstName: String){
        this.firstName= firstName;
    }
    
    public getFirstName(){
        return this.firstName
     }
    

    
 public setUsername(username: String){
    this.username= username;
}

public getUsername(){
    return this.username
 }

public setRole(role: String){

   this.role= role;
}


public getRole(){
   return this.role;
}


}
