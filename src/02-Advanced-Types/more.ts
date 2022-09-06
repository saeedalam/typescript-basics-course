interface User {
    id: number;
    age: number;
    firstName: string;
    lastName: string
    posts: Post[],
    role: Role
}

interface Post {
    id: number;
    title: string;
    body: string
}

type Role = "admin" | "user" | "super-admin"
//enum Role {"admin" , "user" , "super-admin"}

// function getUser(): IUser {
//     console.log({

//     })
// }

type TUser = {
    id: number;
    isAdmin: boolean;
    age: number;
    firstName: string;
    lastName: string
}

// union
//intersection
// derived type 