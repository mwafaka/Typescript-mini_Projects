// type MyBool = true | false


// interface Backpack<Type> {
//     add: (obj: Type) => void;
//     get: () => Type;
//   }
   
//   // This line is a shortcut to tell TypeScript there is a
//   // constant called `backpack`, and to not worry about where it came from.
//   declare const backpack: Backpack<string>;
   
//   // object is a string, because we declared it above as the variable part of Backpack.
//   const object = backpack.get();
   
//   // Since the backpack variable is a string, you can't pass a number to the add function.
//   backpack.get();



const names = ["Alice", "Bob", "Eve"];
 
// Contextual typing for function - parameter s inferred to have type string
names.forEach(function (s) {
  console.log(s.toUpperCase());
});
 
// Contextual typing also applies to arrow functions
names.forEach((s) => {
  console.log(s.toUpperCase());
});