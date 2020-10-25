export class Login {
    id: number;
    username: string;
    pwd: string;

    constructor(user:Login){
        this.id = new Date().getTime();
        this.username = user.username;
        this.pwd = user.pwd;    
    }    
}
