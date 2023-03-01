import {PeopleAccount} from "../class/PeopleAccount";
import { expect } from "chai";
import StudentAccount from "../class/StudentAccount";

describe(`#### Desafios
[ x ] Implementar os métodos de depósito (deposit) e saque (withdraw) na classe DioAccount
  - Os valores dos saldos devem ser alterados, de acordo com o valor informado para depósito
  - Apenas contas com o status true e saldo (balance) maior que o valor solicitado podem fazer saques
  `,
  ()=>{
    let account = new PeopleAccount(2345678, "Joao da Silva", 1);

    it("verifica os valores iniciais: A conta foi inicializada com balanço 0", ( ) => {
        expect( account.doc_id ).to.be.a( 'number' );
        expect( account.getName( ) ).to.be.eq( 'Joao da Silva' );
        expect( account.getBalance( ) ).to.be.eq( 0 );
    });

    it("verifica as operações de deposito", ( ) => {
      account.deposit( 100 );
      expect( account.getBalance( ) ).to.be.a( 'number' );
      expect( account.getBalance( ) ).to.be.eq( 100 );
      
      account.deposit( -10 );
      expect( account.getBalance( ) ).to.be.a( 'number' );
      expect( account.getBalance( ) ).to.be.eq( 100 );

      account.deposit( 0 );
      expect( account.getBalance( ) ).to.be.a( 'number' );
      expect( account.getBalance( ) ).to.be.eq( 100 );

      account.deposit( 1000 );
      expect( account.getBalance( ) ).to.be.a( 'number' );
      expect( account.getBalance( ) ).to.be.eq( 1100 );
    });

    it("verifica as operações de saque", ( ) => {
      account.withdraw( 100 );
      expect( account.getBalance( ) ).to.be.a( 'number' );
      expect( account.getBalance( ) ).to.be.eq( 1000 );
      
      account.withdraw( -10 );
      expect( account.getBalance( ) ).to.be.a( 'number' );
      expect( account.getBalance( ) ).to.be.eq( 1000 );

      account.withdraw( 0 );
      expect( account.getBalance( ) ).to.be.a( 'number' );
      expect( account.getBalance( ) ).to.be.eq( 1000 );

      account.withdraw( 1500 );
      expect( account.getBalance( ) ).to.be.a( 'number' );
      expect( account.getBalance( ) ).to.be.eq( 1000 );

      account.withdraw( 1000 );
      expect( account.getBalance( ) ).to.be.a( 'number' );
      expect( account.getBalance( ) ).to.be.eq( 0 );

    });

  });

  describe( `
  Student Account:
  [ X ] Criar um novo tipo de conta a partir da DioAccount
  - Esta conta não deve receber novos atributos
  - Esta conta terá um método de depósito, que acresce 10 a mais ao valor informado para depósito. (Ex: Um depósito de 100, será de 110 no final)
  `, ( ) => {
    let account = new StudentAccount("Joao da Silva", 1);

    it("verifica os valores iniciais: A conta foi inicializada com balanço 0", ( ) => {
        expect( account.getName( ) ).to.be.eq( 'Joao da Silva' );
        expect( account.getBalance( ) ).to.be.eq( 0 );
    });

    it("verifica as operações de deposito", ( ) => {
      account.deposit( 100 );
      expect( account.getBalance( ) ).to.be.a( 'number' );
      expect( account.getBalance( ) ).to.be.eq( 100 );
      
      account.deposit( -10 );
      expect( account.getBalance( ) ).to.be.a( 'number' );
      expect( account.getBalance( ) ).to.be.eq( 100 );

      account.deposit( 0 );
      expect( account.getBalance( ) ).to.be.a( 'number' );
      expect( account.getBalance( ) ).to.be.eq( 100 );

      account.deposit( 1000 );
      expect( account.getBalance( ) ).to.be.a( 'number' );
      expect( account.getBalance( ) ).to.be.eq( 1100 );
    });

    it("verifica as operações de saque", ( ) => {
      account.withdraw( 100 );
      expect( account.getBalance( ) ).to.be.a( 'number' );
      expect( account.getBalance( ) ).to.be.eq( 1000 );
      
      account.withdraw( -10 );
      expect( account.getBalance( ) ).to.be.a( 'number' );
      expect( account.getBalance( ) ).to.be.eq( 1000 );

      account.withdraw( 0 );
      expect( account.getBalance( ) ).to.be.a( 'number' );
      expect( account.getBalance( ) ).to.be.eq( 1000 );

      account.withdraw( 1500 );
      expect( account.getBalance( ) ).to.be.a( 'number' );
      expect( account.getBalance( ) ).to.be.eq( 1000 );

      account.withdraw( 1000 );
      expect( account.getBalance( ) ).to.be.a( 'number' );
      expect( account.getBalance( ) ).to.be.eq( 0 );
    } )

    it("verifica as operações de deposito especial", ( ) => {
      account.premiumDeposit( 100 );
      expect( account.getBalance( ) ).to.be.a( 'number' );
      expect( account.getBalance( ) ).to.be.eq( 110 );
      
      account.premiumDeposit( -10 );
      expect( account.getBalance( ) ).to.be.a( 'number' );
      expect( account.getBalance( ) ).to.be.eq( 110 );

      account.premiumDeposit( 0 );
      expect( account.getBalance( ) ).to.be.a( 'number' );
      expect( account.getBalance( ) ).to.be.eq( 110 );

      account.premiumDeposit( 1500 );
      expect( account.getBalance( ) ).to.be.a( 'number' );
      expect( account.getBalance( ) ).to.be.eq( 1620 );

      account.premiumDeposit( 1000 );
      expect( account.getBalance( ) ).to.be.a( 'number' );
      expect( account.getBalance( ) ).to.be.eq( 2630 );
    } )

  })