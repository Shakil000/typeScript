let typescript = 'I am exploring'
console.log(typescript);

function FoodCost(num1:number, num2: number){
    const cost = Math.ceil(num1 / num2);
    console.log(`Today\'s food cost per head: ${cost} taka`);
}
FoodCost(2050,15);

// ! Task 1: Basic Data Types and First Program
// ! Objective: Write a TypeScript program that outputs a welcome message.
// ! Create a TypeScript program.
// ! Print the following message to the console:
// ! Hello World, I will learn typescript successfully and become a backend Web Developer!

let developer: string = "Hello World, I will learn typescript successfully and become a backend Web Developer!"
console.log(developer);


// Objective: Create a function with parameters and an optional literal type.
// Instructions:
// •	Define a function that takes:
// o	name (string)
// o	age (number)
// o	role (optional, with type 'admin' | 'user' | 'guest')
// •	The function should log these values or perform a basic action.

function showUserInfo(name: string, age: number, role?: 'admin' | 'user' | 'guest'){
    console.log(`Name: ${name}`)
    console.log(`Age: ${age}`)
    console.log(`Role: ${role ?? 'No specific user'} `)
}

showUserInfo("Shakil", 29);
showUserInfo("Shakil Hasan Mithun", 29, "admin");
showUserInfo("Firoz", 25, 'guest');
showUserInfo("Abdul Kader", 30, 'user');

// Objective: Define a structured Person object using Type Aliases.
// Instructions:
// •	Define a Person type alias with properties for Name, Address, Hair and Eye Color,
//  Income and Expense, Hobbies, Family Members, Job, Skills, Marital Status, and Friends


type Person = {
    name: string,
    address: string,
    hairColor: string,
    eyeColor: string,
    income:number,
    expense: number,
    hobbies: string[],
    familyMember: string[],
    job: {
        title: string,
        company: string,
        experience: number,
    },
    skill: string[],
    maritalStatus: 'single' | 'married' | 'divorced' | 'widowed',
    friends: {
        name: string,
        contact: string,
    }[]

}

const main: Person = {
    name: 'Shakil',
    address: 'Mirpur',
    hairColor: 'Black',
    eyeColor: 'Black',
    income: 500000,
    expense: 40000,
    hobbies: ['code','traveling'],
    familyMember: ['mont', 'rant', 'bant'],
    job: {
        title: 'Developer',
        company: 'XYZ',
        experience: 5,
    },
    skill: ['React', 'Node', 'TypeScript'],
    maritalStatus: 'married',
    friends: [
        { name: "Alice", contact: "alice@example.com" },
        { name: "Bob", contact: "bob@example.com" },
    ],
}

console.log(main);

// Task 4: Union and Intersection Types
// Objective: Create union and intersection types using interfaces.
// Instructions:
// •	Define interfaces Book and Magazine.
// •	Create:
// o	A type that is a union of Book and Magazine.
// o	A type that is an intersection of Book and Magazine.
