import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  private totalLoans = 0;

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan( loan: number): void {
    if( super.status) {
      this.totalLoans += loan;
      this.deposit( loan );
      console.log('Voce pegou um empréstimo');
    } else {
      console.log( "Não é possível realizar o empréstimo");
    }
    
  }

  showLoans( ) {
    console.log( `Você deve ao todo ${this.totalLoans}` );
  }


}
