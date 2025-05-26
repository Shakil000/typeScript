let poorMan = {
    name: 'Hud',
    balance: 0,
    addBalance(balance : number): string{
        return `New Balance is : ${this.balance + balance}`
    }
}