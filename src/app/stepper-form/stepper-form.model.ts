export class PersonalDetails {
    public name: string;
    public gender: boolean;
    public dob: Date;
    public age: number;
    public city: string;
    public state: string

    constructor(
        name: string,
        gender: boolean,
        dob: Date,
        age: number,
        city: string,
        state: string
    ) {
        this.name = name;
        this.gender = gender;
        this.dob = dob;
        this.age = age;
        this.city = city;
        this.state = state
    }
}

export class ContactDetails {
    public email: string;
    public conatctNo: number;

    constructor(
        email: string,
        contactNo: number,
    ) {
        this.email = email;
        this.conatctNo = contactNo;
    }
}

export class CompanyDetails {
    public companyName: string;
    public department: string;
    public branch: string;
    public experience: number;

    constructor(
        companyname: string,
        department: string,
        branch: string,
        experience: number
    ) {
        this.companyName = companyname;
        this.department = department;
        this.branch = branch;
        this.experience = experience
    }
}