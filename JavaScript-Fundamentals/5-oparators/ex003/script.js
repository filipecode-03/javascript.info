let a = "" + 1 + 0 // number
let b = "" - 1 + 0 // number
let c = true + false // number
let d = 6 / "3" // number
let e = "2" * "3" // number
let f = 4 + 5 + "px" // string
let g = "$" + 4 + 5 // string
let h = "4" - 2 // number
let i = "4px" - 2 // NaN
let j = "  -9  " + 5 // string
let k = "  -9  " - 5 // number
let l = null + 1 // number
let m = undefined + 1 // NaN
let n = " \t \n" - 2 // number

console.log(n);