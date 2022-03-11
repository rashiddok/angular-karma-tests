export class User{
    firstname: string;
    surname: string;
    dateofbirth: string;
    notes: string

    constructor(firstname: string, surname: string, dateofbirth: string, notes: string){
        this.firstname = firstname;
        this.surname = surname;
        this.dateofbirth = dateofbirth;
        this.notes = notes;
    }
}