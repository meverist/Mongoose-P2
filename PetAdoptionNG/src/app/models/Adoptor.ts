export class Adopter {

    userId :number;
    userEmail :string;
    userInfo :string;
    userName :string;
    userPassword :string;
    userRole :string;
    
    constructor(useremail :string, userinfo :string, username :string,  userpassword :string, userrole :string) {
        this.userEmail = useremail;
        this.userInfo = userinfo
        this.userName = username;
        this.userPassword = userpassword;
        this.userRole = userrole;
    }

}