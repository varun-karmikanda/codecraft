class Student{
    private name: string;
    private usn: string;
    private age: number;

    constructor(name: string, usn: string, age: number){
        this.name = name;
        this.usn = usn;
        this.age = age;
    }

    public setName = (name: string) => {
        this.name = name;
    }

    public setUSN = (usn: string) => {
        this.usn = usn;
    }
    
    public setAge = (age: number) => {
        this.age = age;
    }

    public getName = (): string => {
        return this.name;
    }

    public getUSN = (): string => {
        return this.usn;
    }

    public getAge = (): number => {
        return this.age;
    }

    public toString(): string {
        return `Student{
    name: ${this.name},
    usn: ${this.usn},
    age: ${this.age}
}`;
    }
    
}

const student = new Student("Varun", "CS67", 21);
console.log(student.toString())
