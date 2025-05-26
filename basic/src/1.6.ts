//Normal Function

function add (num1: number, num2: number): number{
    return num1 + num2
}

add(2,2);


//arrow function

const addArrow = (num1: number, num2: number): number => num1 + num2;

//object--> function--Method

const normalUser = {
    name: 'Vuttu',
    balance: 10,
    addBalance(balance: number): string{
        return `His new Balance is: ${this.balance + balance}`
    },
};

// use map square any number with typeScript
const array: number[] = [1,2,3,4,5]
const newArray: number[] = array.map((element: number): number => element * element);