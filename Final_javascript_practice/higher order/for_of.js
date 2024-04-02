// for of
const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
  // console.log(num);
}
const str = "himansu";
for (const st of str) {
  // console.log(st);
}

// maps for unique value
const maps = new Map();
maps.set("IN", "india");
maps.set("IN", "india");
maps.set("US", "america");
// console.log(maps);
for (const [key, value] of maps) {
  // console.log(key, "=", value);
}

// object for of is not iterable
const myobj = {
  in: "india",
  us: "america",
};
for (const [key, value] of myobj) {
  console.log(key, "=", value);
}
