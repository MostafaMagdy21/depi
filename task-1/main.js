// qst-1
// 1- add to array
// let arr = [1, 2, 3, 4];
// add to end
// arr.push(3);
// arr = [...arr, "add end"];

// add to first
// arr.unshift("add first");
// arr = ["add first", ...arr];
// console.log(arr);
// -------------------------------------
// qst-2 what the output
// -------------------------------------
// qst-3
// 1-
// Object.prototype.n = 4;
// Object.prototype.n2 = "ahmed";
// const sumObjectValues = () => {
// 	let obj = {
// 		val1: 11,
// 		val2: 22,
// 		val3: "mostafa",
// 		val4: 44,
// 		val5: "ahmed",
// 	};
// 	let newObj = Object.values(obj);
// 	let result = 0;
// 	for (let n of newObj) {
// 		if (typeof n == "number") {
// 			result += n;
// 		}
// 	}
// 	return result;
// };
// console.log(sumObjectValues());

// 2-
// setTimeout(() => console.log("hello 1"), 1000);
// setTimeout(() => console.log("hello 2"), 2000);
// setTimeout(() => console.log("hello 3"), 3000);

// 3-
// let getMaxNumber = () => {
// 	let array = [34, 55, 22, 102, 11, 65, 78, 23, 55];
// 	let result = 0;
// 	let index = 0;
// 	array.forEach((element) => {
// 		if (element > result) {
// 			result = element;
// 		}
// 	});
// 	// index = array.findIndex(result);
// 	// return { result, index };
// 	return result;
// };

// 4-
// console.log(getMaxNumber());
// let date1 = new Date("2020-02-24");
// let date2 = new Date("2021-02-24");
// let getTimeBetweenTwoDates = (d1, d2) => {
// 	let resultInMS = d2 - d1;
// 	let resultInDays = resultInMS / (1000 * 60 * 60 * 24);
// 	return resultInDays;
// };
// console.log(getTimeBetweenTwoDates(date1, date2));

// 5-
// let clcTwoNum = (fnum, snum, oper) => {
// 	let result = 0;
// 	if (oper == "+") {
// 		result = fnum + snum;
// 	}
// 	if (oper == "-") {
// 		result = fnum - snum;
// 	}
// 	if (oper == "*") {
// 		result = fnum * snum;
// 	}
// 	if (oper == "/") {
// 		result = fnum / snum;
// 	}
// 	return result;
// };
// console.log(clcTwoNum(6, 3, "/"));

// 6-
// let returnMultibleVlue = (ele1, ele2) => {
// 	let val1 = ele1 + ele2;
// 	let val2 = "mostafa";
// 	return { val1, val2 };
// };

// console.log(returnMultibleVlue(3, 4));
// 7-
// let array = [34, 55, 22, 11, 65, 78];
// const arrayReverce = () => {
// 	let arr2 = array.reverse();
// 	return arr2;
// };
// console.log(arrayReverce());

// 8-

// bonus
// 1-
// let timeFormat = (t, s) => {
// 	let result;
// 	if (t <= 24) {
// 		if (s == 24) {
// 			if (t <= 12) {
// 				result = t + 12;
// 			} else {
// 				return "invalid";
// 			}
// 		}
// 		if (s == 12) {
// 			if (t > 12) {
// 				result = t - 12;
// 			} else {
// 				result = t;
// 			}
// 		}
// 	} else {
// 		return "invalid";
// 	}
// 	return result;
// };

// console.log(timeFormat(12, 24));

// 2- don't understand

// 3-
// let arr = [
// 	{ name: "mostafa" },
// 	{ name: "john" },
// 	{ name: "ahmed" },
// 	{ name: "mohamed" },
// 	{ name: "ali" },
// ];

// let checking = (n) => {
// 	let isExist = arr.find((ele) => n == ele.name);
// 	if (isExist) {
// 		console.log("name exist");
// 	} else {
// 		console.log("name don't exist");
// 	}
// };

// checking("john");
