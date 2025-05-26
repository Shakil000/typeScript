//! Object destructuring
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
