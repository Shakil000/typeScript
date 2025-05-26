// generic constraint with keyof operator

type Vehicle = {
    bike: string;
    car: string;
    ship: string;
}

type Owner = keyof Vehicle