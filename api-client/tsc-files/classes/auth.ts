import { User } from "./interfaces";

export class Auth {
    public authUser(user:User,loginAcess:User):boolean{
        let userPass = {
            u:user.userName,
            p:user.pw
        }
        let loginA = {
            u:loginAcess.userName,
            p:loginAcess.pw
        }
        let isUser:boolean;
        if (userPass == loginA) {
            isUser = true;
        }
        else{
            isUser = false;
        }
        return isUser;
    }
}