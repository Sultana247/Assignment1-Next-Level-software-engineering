const multiplyValue =(value:number, multiplier?:number)=>{

    if(multiplier || multiplier === 0){
        return value*multiplier;
    }

    return value*2;

}





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




const formatCoordinate =([latitude, longitude, locationName]: readonly [number, number, string])=>{
    return `Location: ${locationName} (${latitude}, ${longitude})`
}






const concatenateArrays = <T>(...arrays: T[][]): T[]=>{
    const newArray: T[]=[];
    for(const array of arrays){
        newArray.push(...array)
    }
    return newArray;
}






interface Course{
    title: string;
    students: number;
    isPublished: boolean;
}

const getPopularCourses = (courseArray: Course[], minStudents: number)=>{
    const updatedCourses:Course[]=[];
    for(const course of courseArray){
        if(course.isPublished == true && Number(course.students) >= minStudents){
            updatedCourses.push(course);
        }
    }
    return updatedCourses;
}




const pluckValues = <T, K extends keyof T>(items:T[], key: K): T[K][]=>{
    return items.map((item)=>item[key])
}






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

