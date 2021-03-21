export class LoginModel {

 private username: String;
 private password: String;
 
 public setUsername(username: String){
     this.username= username;
 }

 public setPassword(password: String){

    this.password= password;
 }
 
 public getUsername(){
    return this.username
 }

public getPassword(){
    return this.password;
 }

}
