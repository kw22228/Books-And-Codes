import { InvocationHandler, Person } from './interface';

class OwnerInvocationHandler implements InvocationHandler {
  person: Person;

  constructor(person: Person) {
    this.person = person;
  }

  invoke(proxy: any, method: any, args: any) {
      
  }
}
