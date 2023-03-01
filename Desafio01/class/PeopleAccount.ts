import { DioAccount } from "./DioAccount"

export class PeopleAccount extends DioAccount {

  private _doc_id: number

  constructor(doc_id: number, name: string, accountNumber: number){
    super(name, accountNumber)
    this._doc_id = doc_id
  }

  get doc_id( ) {
    return this._doc_id
  }

  set doc_id( id: number ) {
    this._doc_id = id
  } 

}