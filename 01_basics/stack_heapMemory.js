// Stack (used in primitive dat type), Heap (non-primitive)

let myName = "hv"

let anothername = myName
anothername = "chvr"
console.log(myName)
console.log(anothername)

let userone = {
    email: "user@google.com",
    upi : "user@ybl",
}
let usertwo = userone

usertwo.email = "hv@google.com"
console.log(userone.email)
console.log(usertwo.email)