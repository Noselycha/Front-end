import { yearUntilRetirement } from "./utils.js";
import { addNumber, calculateArea } from "./mUtils.js";
import makeAjaxRequest from "./a.js";

// Using the imported functions
yearUntilRetirement({ year: 1987, firstName: "John" });

console.log(addNumber(1, 2, 3, 4, 5, 6, 7));

let radius = 21;
let area21 = calculateArea({ radius, power: 2 });

radius = 7;
let area7 = calculateArea({ radius, power: 2 });

console.log(`area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

makeAjaxRequest("www.google.com");
