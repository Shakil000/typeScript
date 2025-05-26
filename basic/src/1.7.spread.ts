//! Spread Operator
const list1 : string[] = ['Robi', 'Kiran', 'Mafi'];
const list2 : string[] = ['Rob', 'Kir', 'Mafia'];
let push = list1.push(...list2);
const list3 : [string, number,boolean,undefined,null] = ['Rob', 5, true,undefined,null];


const mentors1={
    typescript: 'Shakil',
    Redux: 'Hasan',
    Dbms: 'Mithun'
}

const mentors2={
    prisma: 'Firoz',
    next: 'Kader',
    cloud: 'Basar as Asad'
}

const mentorList = {
    ...mentors1,
    ...mentors2
}

//!Rest Operator cousin of Spread operator

const greetFriends = (...friends: string[]) => {
    //console.log(`Hi ${friend1} ${friend2} ${friend3}`)
    friends.forEach((friend:string) => console.log(`Hi ${friend}`));
}
greetFriends('Shakil', 'Hasan','Mithun')