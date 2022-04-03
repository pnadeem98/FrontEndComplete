export class Register{
    accno:number=  0;
    loginpsw:string="";
    confirmloginpsw:string="";
    transpsw:string="";
    confirmtranspsw:string="";
    otp:number=0;
    constructor(accno:number,loginpsw:string,confirmloginpsw:string,transpsw:string,confirmtranspsw:string,otp:number)
       {
        this.accno=accno;
        this.loginpsw=loginpsw;
        this.confirmloginpsw=confirmloginpsw;
        this.transpsw=transpsw;
        this.confirmtranspsw=confirmtranspsw;
        this.otp=otp;
       } 
    }