// Rectangle class
// class Rectangle {
// 	private len: number;
// 	private wid: number;
// 	constructor(len: number, wid: number) {
// 		this.len = len;
// 		this.wid = wid;
// 	}
// 	getLength(): number {
// 		return this.len;
// 	}
// 	setLength(l: number) {
// 		this.len = l;
// 	}
// 	getWidth(): number {
// 		return this.wid;
// 	}
// 	setWidth(w: number) {
// 		this.wid = w;
// 	}
// 	getArea(): number {
// 		return this.len * this.wid;
// 	}
// 	getPrimeter(): number {
// 		return 2 * (this.len + this.wid);
// 	}
// }
// let obj1 = new Rectangle(3, 5);
// obj1.setLength(12);
// console.log(obj1.getPrimeter());
// Employee class
// class Employee {
// 	private id: number;
// 	private fName: string;
// 	private lName: string;
// 	private salary: number;
// 	constructor(id: number, fName: string, lName: string, salary: number) {
// 		this.id = id;
// 		this.fName = fName;
// 		this.lName = lName;
// 		this.salary = salary;
// 	}
// 	getId(): number {
// 		return this.id;
// 	}
// 	getFirstName(): string {
// 		return this.fName;
// 	}
// 	getLastName(): string {
// 		return this.lName;
// 	}
// 	getSalary(): number {
// 		return this.salary;
// 	}
// 	getAnnualSalary(): number {
// 		return this.salary * 12;
// 	}
// 	getRaiseSalary(per: number): number {
// 		let s = this.salary;
// 		let raiseSalary = (per * s) / 100;
// 		return s + raiseSalary;
// 	}
// 	getFullName(): string {
// 		return `the full name is ${this.fName} ${this.lName}`;
// 	}
// }
// let obj2 = new Employee(1, "mostafa", "magdy", 5000);
// console.log(obj2.getRaiseSalary(10));
// invoice item
// class InvoiceItem {
// 	private id: string;
// 	private desc: string;
// 	private qty: number;
// 	private unitPrice: number;
// 	constructor(id: string, desc: string, qty: number, unitPrice: number) {
// 		this.id = id;
// 		this.desc = desc;
// 		this.qty = qty;
// 		this.unitPrice = unitPrice;
// 	}
// 	getId(): string {
// 		return this.id;
// 	}
// 	getDesc(): string {
// 		return this.desc;
// 	}
// 	getQty(): number {
// 		return this.qty;
// 	}
// 	getUnitPrice(): number {
// 		return this.unitPrice;
// 	}
// 	getTotal(): number {
// 		return this.unitPrice * this.qty;
// 	}
// }
// let obj3 = new InvoiceItem("12", "10", 14, 120);
// console.log(obj3.getId());
// class Account
// class Account {
// 	private id: string;
// 	private name: string;
// 	private balance: number;
// 	constructor(id: string, name: string, balance: number) {
// 		this.id = id;
// 		this.name = name;
// 		this.balance = balance;
// 	}
// 	getId(): string {
// 		return this.id;
// 	}
// 	getName(): string {
// 		return this.name;
// 	}
// 	getBalance(): number {
// 		return this.balance;
// 	}
// 	credit(amount: number): number {
// 		this.balance += amount;
// 		return this.balance;
// 	}
// 	debit(amount: number): number {
// 		if (amount <= this.balance) {
// 			this.balance -= amount;
// 			return this.balance;
// 		} else {
// 			console.log("Amount exeeded balance");
// 			return this.balance;
// 		}
// 	}
// 	transferTo(another: Account, amount: number) {
// 		if (amount <= this.balance) {
// 			console.log("added");
// 			another.credit(amount);
// 		} else {
// 			console.log("Amount exceeded balance");
// 		}
// 	}
// }
// let obj4 = new Account("1", "mostafa", 500);
// obj4.credit(300);
// console.log(obj4.getBalance());
// let obj5 = new Account("2", "mohamed", 0);
// obj4.transferTo(obj5, 400);
// console.log(obj5.getBalance());
// class Date
// class DateClass {
// 	private day: number;
// 	private month: number;
// 	private year: number;
// 	constructor(day: number, month: number, year: number) {
// 		this.day = day;
// 		this.month = month;
// 		this.year = year;
// 	}
// 	getDay() {
// 		return this.day;
// 	}
// 	getMonth() {
// 		return this.month;
// 	}
// 	getYear() {
// 		return this.year;
// 	}
// 	setDay(day: number) {
// 		this.day = day;
// 	}
// 	setMonth(month: number) {
// 		this.month = month;
// 	}
// 	setYear(year: number) {
// 		this.year = year;
// 	}
// }
// let date = new DateClass(21, 2, 1996);
// end task one
// ---------------------------------------------
