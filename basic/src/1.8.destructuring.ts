//! Object destructuring
{
const user = {
    id:2251,
    name: {
        fName: 'Robot',
        mName: 'Machine',
        lName: 'Hammer'
    },
    contactNo: '0157845454',
    addressNo: 'AramBag Dhaka',
};

const {
    id, name:{fName}, contactNo, addressNo
} = user;

const friends = {
    name: {
        fName: 'Skl',
        LName: 'M'
    },
    age:[10,15,20],
    contact: '015',
    address: 'Uganda'
}

const {
    contact,
    address,
    name:{LName},
    age:[firstAge]
} = friends;

// ! Array destructuring TS
const Bosses = ['Montu','Bontu','Jhantu', 'Antu','Pontu'];

const [Montua, Bontua,Hero Alam, ...rest] = Bosses;
}