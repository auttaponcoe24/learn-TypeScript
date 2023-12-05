// console.log("Hello App Typescript");

// ####################### Function #######################
// # FN ที่ไม่มีการส่งค่ากลับ void #
// function sayHi(name: string): void {
// 	console.log(`Hello ${name}`);
// }
// sayHi("auttapon");

// # Fn ที่มีการส่งค่า return #
// function getDiscount(): number {
// 	return 500;
// }
// console.log(getDiscount());

// function getAddress(): string {
// 	return "hatyai";
// }
// console.log(getAddress());

// # Fn ที่มีการรับและส่งค่า #
// function checkNumber(num: number): string {
// 	let result: string;
// 	if (num % 2 === 0) {
// 		result = "Even";
// 	} else {
// 		result = "Odd";
// 	}
// 	return result;
// }
// console.log(checkNumber(10));

// function total(a: number, b: number): number {
// 	return a + b;
// }
// console.log(total(2, 2));

// # Arrow FN #
// const checkNumber = (num: number): string => {
// 	let result: string;
// 	if (num % 2 === 0) {
// 		result = "Even";
// 	} else {
// 		result = "Odd";
// 	}
// 	return result;
// };
// console.log(checkNumber(10));

// # Default Parameter #
// function showEmployee(name: string, age: number, address: string = "Bangkok") {
// 	console.log(`name = ${name}, age = ${age}, address = ${address}`);
// }

// showEmployee("Neung", 30, "HatYai");
// showEmployee("Aut", 28, "HatYai");
// showEmployee("Jay", 30);

// ####################### Object #######################
// const person = {
// 	name: "Auttaon",
// 	age: 30,
// };

// const person2: { name: string; age: number } = {
// 	name: "Aut",
// 	age: 28,
// };

// const clone = { ...person2 };
// clone.name = "Nam";
// console.log(clone);

// # FN รับค่า Object #
// const showDetail = (data: { name: string; age: number }) => {
// 	console.log(`Name: ${data.name}, Age: ${data.age}`);
// };
// showDetail(person2);

// # Fn ส่งค่า Object #
// const position: { lat: number; long: number } = { lat: 20, long: 100 };

// const randomPosition = (): { lat: number; long: number } => {
// 	return {
// 		lat: Math.random() * 10,
// 		long: Math.random(),
// 	};
// };
// console.log(randomPosition());

// ####################### Excess Properties Check #######################
// const showDetail = (data: { name: string; age: number }) => {
// 	console.log(`Name: ${data.name}, Age: ${data.age}`);
// };

// showDetail({
// 	name: "Auttapon",
// 	age: 30,
// 	// address: "HatYai",
// });

// ####################### Type Aliases #######################
// type Employee = {
// 	id: number;
// 	name: string;
// 	salary: number;
// 	phone: string;
// };

// const emp1: Employee = {
// 	id: 1,
// 	name: "Auttapon",
// 	salary: 30000,
// 	phone: "0818887789",
// };

// for (let key in emp1) {
// 	console.log(`${key}: ${emp1[key]}`);
// }

// # Type Aliases (Optional Properties) systax => property?: type #
// type EmpOptional = {
// 	id: number;
// 	name: string;
// 	salary?: number;
// 	phone?: string;
// };
// let emp2: EmpOptional = { id: 2, name: "Aut" };
// console.log(emp2);

// # Type Aliases (Readonly Modifier) systax => readonly property?: type #
// type EmpReadonly = {
// 	readonly id: number;
// 	name: string;
// 	salary?: number;
// 	phone?: string;
// };
// let emp: EmpReadonly = { id: 1, name: "Auttapon", salary: 30000 };
// // emp.id = 30; // แก้ไม่ได้ readonly
// console.log(emp);

// ####################### Array #######################
// const user1 = ["Neung", "Aut", "Nam"];
// console.log(user1);

// const user2: string[] = ["Neung", "Aut", "Nam"];
// console.log(user2);
// user2.push("Mom");
// user2.shift();
// for (let element of user2) {
// 	console.log(element);
// }

// const ages: number[] = [18, 20, 25];
// console.log(ages);

// # การเข้าถึงสมาชิก array #
// const users: string[] = ["neung", "jay", "bas"];
// const cloneArr = [...users, "newUser"];
// for (let ele of cloneArr) {
// 	console.log(ele);
// }
// for (let i = 0; i < users.length; i++) {
// 	console.log(`ID: ${i + 1} , Name: ${users[i]}`);
// }

// # Array Type Aliases #
// type Employee = {
// 	name: string;
// 	salary: number;
// 	department: string;
// };

// const emp: Employee[] = [];
// emp.push({ name: "Neung", salary: 30000, department: "Programmer" });
// emp.push({ name: "Jay", salary: 30000, department: "SA" });
// emp.push({ name: "Bas", salary: 30000, department: "Network" });

// for (let ele of emp) {
// 	console.log(ele);
// }

// ####################### Function Overloading #######################
// คือ การสร้างฟังก์ชันที่มีชื่อเหมือนกันแต่สามารถรับพารามิเตอร์จำนวนต่างกัน พร้อมคืนค่าที่แตกต่างกันได้
// solu 1:
// function sayHi(): string;
// function sayHi(name: string): string;
// function sayHi(name?: unknown): unknown {
// 	if (!name) {
// 		return `hello typescript`;
// 	}
// 	if (typeof name === "string") {
// 		return `hello ${name}`;
// 	}
// 	throw new Error("ชนิดข้อมูลไม่ถูกต้อง");
// }

// console.log(sayHi());
// console.log(sayHi("neung"));

// solu 2:
// function total(a: string, b: string): string;
// function total(a: number, b: number): number;
// function total(a: unknown, b: unknown): unknown {
// 	if (typeof a === "string" && typeof b === "string") {
// 		// return a + b;
// 		return parseInt(a) + parseInt(b);
// 	}
// 	if (typeof a === "number" && typeof b === "number") {
// 		return a + b;
// 	}
// 	{
// 		throw new Error("ชนิดข้อมูลไม่ถูกต้อง");
// 	}
// }

// console.log(total("10", "20"));
// console.log(total(10, 20));

// ####################### Spread Operator #######################
// const section: string[] = ["บัญชี", "การเงิน"];
// const department: string[] = ["programmer", "marketing"];

// const clone = [...section, ...department];
// console.log(clone);

// department.push(...section);
// console.log(department);

// ####################### Rest Parameter #######################
// function total(...nums: number[]): number {
// 	let result = nums.reduce((acc, item) => {
// 		acc += item;
// 		return acc;
// 	}, 0);
// 	return result;
// }

// console.log(total(100, 200));
// console.log(total(100, 200, 300));

// ####################### Destructuring #######################
// array
// const colors: string[] = ["red", "green", "blue"];
// const [red, green, blue] = colors;
// console.log(red, green, blue);

// object
// type Person = {
// 	fname: string;
// 	age: number;
// 	address: string;
// };
// const person: Person = {
// 	fname: "neung",
// 	age: 30,
// 	address: "Hatyai",
// };
// const { fname, age, address } = person;
// console.log(fname, age, address);

// ####################### Tuple เจาะจง ชนิด และ จำนวนข้อมูล ของ arrar (fixed size มีขนาดตายตัว) #######################
// syntax : const name:[type1, type2, ...] = [value1, value2, ...]
// ex : const status:[number, string] = [200, 'OK']
// const point: [number, number, number] = [10, 20, 30];
// const statusCode: [number, string] = [200, "OK"];

// # Tuple Label กำหนดชื่อกำกับภายในชนิดข้อมูล #
// syntax : const point:[x:number, y:number] = [5, 10]
// const point: [x: number, y: number, z: number] = [10, 20, 30];
// const goodCode: [code: number, status: string] = [200, "OK"];

// # Type Tuple #
type HttpStatusCode = [number, string];

const goodStatus: HttpStatusCode = [200, "OK"];
const notFound: HttpStatusCode = [400, "ไม่พบข้อมูล"];
const badRequest: HttpStatusCode = [404, "คำขอไม่ถูกต้อง"];
const serverErr: HttpStatusCode = [500, "Internet Server Error"];
