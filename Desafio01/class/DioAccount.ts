export abstract class DioAccount {


  private balance: number = 0
  private _status: boolean = true

  constructor( private readonly name: string, private readonly accountNumber: number ) {

  }

  getName( ) {
    return this.name
  }

  getAccountNumber( ) {
    return this.accountNumber;
  }

  get status( ) {
    return this._status;
  }

  set status( s: boolean ) {
    this._status = s;
  }

  changeStatus( ) {
    this._status = !this._status;
  }
 

  deposit( ammount: number ) {
    if( ammount > 0.01 ) {
      if(this.validateStatus()){
        this.balance += ammount;
        console.log('Voce depositou')
      } else {
        console.log('Valor de deposito inválido');
      }
    }
  }

  withdraw( ammount: number ) {
    if( ammount <= 0 ) {
      console.log("valores de saque devem ser positivos");
      return;
    }
    if( this.balance >= ammount ) {
      if( this.status ) {
        this.balance -= ammount;
        console.log('Voce sacou')
      } else {
        console.log("Conta com status inválido");
      }
    } else {
      console.log("Valor solicitado indisponível");
    }
    
  }

  getBalance() {
    return this.balance
  }

  private validateStatus(): boolean {
    if (this.status) {
      return this.status
    }
    throw new Error('Conta inválida')
  }
}
