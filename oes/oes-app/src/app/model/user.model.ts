import {Role} from './role.model';
export class User {
    public _userId: number;
    public _fName: string;
    public _lName: string;
    public _company: string;
    public _email: string;
    public _phone: string;
    public _roleId: Role;
    public _password: string;
    private _updateDt: Date;
    private _insDt: Date;
}
