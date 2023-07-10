let num: number = 10;
let n = 1_000_000;
let anyVar: any = "hi";
anyVar = 1000;
anyVar = 10.0;

interface USER {
    username: string,
    type: ROLE,
    age?: number
}

type ROLE = "USER" | "ADMIN" | "GUEST"
let userType: ROLE;
userType = "USER";

function makeUser(type: ROLE): USER {
    return {
        username: "User",
        type: type
    }
}

function isAValidUser(role: USER) {
    if (role.type === "ADMIN" || role.type == "USER") {
        return true;
    }
    return false;
}

const uu = makeUser("ADMIN");
console.log(uu)

type CustomType = "Admin" | "User" | 1 | 0;
let usertype: CustomType = 1;
function checkUser(userType: CustomType) {
    if (userType === "Admin" || userType == 1) return true;
    return false;
}


enum AllUserRoles {
    "ADMIN",
    "USER",
    "GUEST"
}

interface IUser {
    username: string,
    age?: number,
    role: AllUserRoles
}

interface IUserDto {
    username: string,
    age?: number
}

function userGenerateor(userDTO: IUserDto): IUser {
    return {
        username: userDTO.username,
        age: userDTO.age,
        role: AllUserRoles.ADMIN
    } as IUser
}

function isAdmin(user: IUser): boolean {
    if (user.role == AllUserRoles.ADMIN) return true;
    return false;
}

enum Level {
    Bachelor,
    Master,
    PHD
}

type TUser = {
    username: string,
    name: string,
    job?: string,
    age: number
}
const us: TUser = {
    username: "username1",
    name: "saeed",
    age: 12,
    job: "dev"
}
console.log(us.username, us["username"])

enum Direction {
    North,
    South,
    Weast,
    East
}
const myDirection: Direction = Direction.East;
const myPrinter = (dir: Direction): void => {
    if (dir === Direction.East) {
        console.log("Hay East")
    } else {
        console.log("Hey Man")
    }
}


enum StatusCode {
    NotFound = 404,
    Success = 201,
    ServerError = 501
}
const statusCode = StatusCode.ServerError;
const errorHandler = (status: StatusCode) => {
    switch (status) {
        case StatusCode.NotFound: console.log("Not Fount"); break;
        case StatusCode.ServerError: console.error("Server Error"); break;
        case StatusCode.Success: console.error("Success"); break;
        default: console.log("Wrong status");
    }
}


interface StudentDto {
    name: string,
    username: string,
    age?: number,
    level: Level
}

interface Student extends StudentDto {
    id: string
};


function validated(object: StudentDto): boolean | Error {
    if (object.name === null) return new Error("invalid data");
    return true
}

function mocApiRegister(student: StudentDto) {
    if (!validated(student)) return false;
    return true;
}
function register(student: StudentDto): Student | null {
    if (mocApiRegister(student)) {
        return {
            ...student,
            id: "10"
        } as Student
    }
    return null
}

const myuser: StudentDto = {
    name: "saeed",
    username: "sva",
    age: 23,
    level: Level.Master
}

const results = register(myuser);
console.log(results)

//--- array
const cities: string[] = ["Stockholm", "linkoping"];
cities.push("Malmo");
console.log(cities.join("-"));
cities.forEach(city => console.log(`I love ${city}`))

const multiType: (string | number)[] = ["Tehran", 21, "Isfahan", 31];


// tuple and an array of tuples
type Grade = [string, number];
const userGrades: Grade[] = [
    ["Math", 10],
    ["Algebra", 15]
]
userGrades.forEach(grade => console.log(grade[0], " ", grade[1]))

// destructing
type Point = [number, number];
const point: Point = [10, 20];
const [px, py] = point;
console.log(point, px, py)

type TCarType = string;
type TCarYear = number;
type TCarModel = string;
type TCar = {
    type: TCarType,
    model: TCarModel,
    year: TCarYear
}

//type , enum and unions
type Box = {
    height: number,
    width: number
}
enum ColorType { "RED" = 11, "GREEN" = 22, "BLUE" = 33 }
type ColorTypeStr = "RED" | "GREEN" | "BLUE";

type ColoredBox = Box & { color: ColorType | ColorTypeStr }

const box: Box = { height: 100, width: 200 };
const anotherBox: ColoredBox = { height: 100, width: 200, color: ColorType.GREEN }
const newBox: ColoredBox = { height: 120, width: 230, color: "GREEN" }
console.log(anotherBox, newBox)

//---
function addNumbers(a: unknown): number {
    if (typeof a === "number") {
        return a + 10;
    } else if (typeof a === "string") {
        return 10 + parseInt(a);
    }

    return 10;
}
const nn : string = addNumbers("30").toFixed() ;
console.log("nn" , nn)


//-------------
function getUserName(params : {first:string , last?:string}) {
    if(params.last){
        return `Hi ${params.first} - ${params.last}`;
    }

    return `Hi ${params.first}`
}

console.log(getUserName({first:"Saeed"}))
console.log(getUserName({first:"Saeed" , last:"Alam"}))

// import {it ,expect} from "vitest";
// it("getUserName function test" , ()=> {
//     expect(getUserName({first:"Alex"})).toBe("Hi Alex");
//     expect(getUserName({first:"Alex" , last:"Alam"})).toBe("Hi Alex - Alam")
// })