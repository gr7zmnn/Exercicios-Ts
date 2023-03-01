import { DioAccount } from "./DioAccount";

export default class StudentAccount extends DioAccount {
    private static PREMIUM_VALUE = 10;
    constructor( name: string, accountNumber: number ) {
        super( name, accountNumber );
    }

    deposit( ammount: number ) {
        super.deposit( ammount );
    }

    premiumDeposit( ammount: number ) {
        if( ammount > 0 ){
            super.deposit( ammount + StudentAccount.PREMIUM_VALUE );
            console.log("Deposito especial, vc ganhou R$10,00 em bonus");
        } else {
            console.log("Deposito não realizado. Valor inválido");
        }
    }
}