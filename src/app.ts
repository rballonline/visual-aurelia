export class Welcome {
    heading = 'Welcome to Aurelia!';
    firstName = 'John';
    lastName = 'Doe';

    get fullName() {
        debugger;
        return `${this.firstName} ${this.lastName}`;
    }

    submit() {
        alert(`Welcome, ${this.fullName}!`);
    }
}