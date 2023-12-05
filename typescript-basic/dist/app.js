"use strict";
// ####################### starter TypeScript #######################
// let fname: string = "Auttapon";
// let age: number = 30;
// let isWorking: boolean = true;
// console.log(`name: ${fname.toUpperCase()} age: ${age} `);
// ####################### any & unknow #######################
// function formatNumber(num: number) {
// 	return num.toFixed(2);
// }
// let money: any = "50.034";
// money = 50.034;
// console.log(formatNumber(money));
// let money: unknown = 50.034;
// money = "50.034";
// if (typeof money === "number") {
// 	console.log(formatNumber(money));
// } else {
// 	console.log("money is not number");
// }
// ####################### Type Assertions => as #######################
// let username: unknown;
// username = "auttapon";
// console.log((username as string).toUpperCase());
// console.log((<string>username).toUpperCase());
// ####################### if..else #######################
// let amount = 50;
// let amount2 = 51;
// let result: string;
// if (amount % 2 === 0) {
// 	result = "isEven";
// } else {
// 	result = "isOdd";
// }
// console.log(result);
// ternary
// let result2: string = amount2 % 2 === 0 ? "isEven" : "isOdd";
// console.log(result2);
// ####################### Switch..Case #######################
// let service: number = 0;
// let result: string;
// switch (service) {
// 	case 1:
// 		result = "สอบถามยอมคงเหลือ";
// 		break;
// 	case 2:
// 		result = "ฝากเงิน";
// 		break;
// 	case 3:
// 		result = "ถอนเงิน";
// 		break;
// 	default:
// 		result = "หมายเลขไม่ถูกต้อง";
// 		break;
// }
// console.log("ผลลัพธ์ =>", result);
// ####################### For Loop #######################
// for (let count: number = 1; count <= 10; count++) {
// 	console.log(`${count}`);
// }
// array
// let users: string[] = ["neung", "aut"];
// let users2 = [0, "aut"];
// forEach
// users.forEach((el) => {
// 	console.log(el);
// });
// for..of
// for (let index of users) {
// 	console.log(index);
// }
// ####################### Function #######################
