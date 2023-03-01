import { CompanyAccount } from './class/CompanyAccount';
import { PeopleAccount } from './class/PeopleAccount';
import StudentAccount from './class/StudentAccount';


//Use Cases:


const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.withdraw( 50 )
peopleAccount.deposit( 100 )
peopleAccount.withdraw( 50 )
console.log(peopleAccount)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.withdraw( 50 );
companyAccount.getLoan( 1000 );
companyAccount.deposit( 100 );
companyAccount.showLoans( );
console.log(companyAccount);
const studentAccount = new StudentAccount("Jorge Martins", 555999);
console.log(studentAccount)
studentAccount.withdraw( 50 )
studentAccount.deposit( 100 )
studentAccount.withdraw( 50 )
console.log(studentAccount)