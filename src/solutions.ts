// problem 1
const multiplyValue =(value:number, multiplier?:number)=>{

    if(multiplier || multiplier === 0){
        return value*multiplier;
    }

    return value*2;

}

// console.log(multiplyValue(10, undefined));

// problem 2
const processInput =(value: string | number | boolean)=>{
    if(typeof value === "string"){
        return value.trim().toLowerCase();
    }
    else if(typeof value === "number"){
        return value * 10
    }
    else{
        if(value == true){
            return "Active";
        }
        else{
            return "Inactive";
        }
    }
}

// console.log(processInput("  TypeScript  "))
// console.log(processInput(7));
// console.log(processInput(true));
// console.log(processInput(false));


// problem 3
const formatCoordinate =([latitude, longitude, locationName]: readonly [number, number, string])=>{
    return `Location: ${locationName} (${latitude}, ${longitude})`
}
// console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
// console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));


// problem 4
const concatenateArrays = <T>(...arrays: T[][]): T[]=>{
    const newArray: T[]=[];
    for(const array of arrays){
        newArray.push(...array)
    }
    return newArray;
}

// console.log(concatenateArrays([1, 2], [3]))
// console.log(concatenateArrays(["a", "b"], ["c", "d"]));
// console.log(concatenateArrays([1, 2], [3, 4], [5]));



// problem 5
interface Course{
    title: string;
    students: number;
    isPublished: boolean;
}

const courses = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true }
]
const getPopularCourses = (courseArray: Course[], minStudents: number)=>{
    const updatedCourses:Course[]=[];
    for(const course of courseArray){
        if(course.isPublished == true && Number(course.students) >= minStudents){
            updatedCourses.push(course);
        }
    }
    return updatedCourses;
}
// console.log(getPopularCourses(courses, 80));


// problem 6
const pluckValues = <T, K extends keyof T>(items:T[], key: K): T[K][]=>{
    return items.map((item)=>item[key])
}
const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" }
];
// console.log(pluckValues(users, "name"));
// console.log(pluckValues(users, "id"));



// problem 7
class Employee{
    constructor(protected name: string, private baseSalary: number){

    }
    getDetails(){
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
    }
}

class Manager extends Employee{
    constructor(name:string, baseSalary: number, private department: string){
        super(name, baseSalary);
    }
    getRoleInfo(){
        return `Manager of ${this.department}: ${this.name}`
    }
}

const manager = new Manager("Alice", 50000, "Engineering");
// console.log(manager.getDetails());
// console.log(manager.getRoleInfo());



// problem 8
async function validateAgeAsync(age:number): Promise<string>{
   return new Promise((resolve, reject)=>{
    if(age<18){
        reject(new Error("Error: Access Denied: Must be 18 or older"));
        return;
    }
     setTimeout(()=>{
        resolve("Access Granted")
     }, 1000);
   });
}

// console.log(await validateAgeAsync(20)); 
// console.log(await validateAgeAsync(15)); 