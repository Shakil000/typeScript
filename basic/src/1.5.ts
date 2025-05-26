const user: {
    company: 'PH', // type literal types
    //readonly company: string, // type literal types
    firstName: string; 
    middleName?: string; // optional type
    lastName: string;
    isMarried: boolean;
} = {
    company: 'PH',
    firstName: 'Shakil',
    lastName: 'Hasan',
    isMarried: true,
}

user.company = 'PH'