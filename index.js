//generators and iterators

function* genFunc() {
    yield 'First Yeild'
    console.log('Ran code before second yeild')
    yield 'Second Yeild'
    console.log('Ran code before return')
    return 'Done!'
}

console.log(genFunc())

console.log(genFunc().next())
console.log(genFunc().next())

const runGen = genFunc()

console.log(runGen.next())
console.log(runGen.next())
console.log(runGen.next())

const genArr = [...genFunc()]
console.log(genArr)

for (let item of genFunc()) {
    console.log(item)
}


const array = ['Star', 'Heart', 'Gloves']
const string = 'I love JavaScript'
const object = { name: "Lydia Hallie" }
function regularFunction() {
    return 'I am a basic function'
}
function* generatorFunciton() {
    return 'I am a generator function'
}
const generatorObject = generatorFunciton()

console.log(array[Symbol.iterator])
console.log(string[Symbol.iterator])
console.log(generatorObject[Symbol.iterator])

console.log(regularFunction[Symbol.iterator])
console.log(generatorFunciton[Symbol.iterator])

generatorObject[Symbol.iterator] = function* () {
    yield this
}

console.log([...generatorObject])

const things = ['&', '$', '@']

function* genFunc3() {
    yield '!'
    yield* things
    yield '#'
}

const genObj = genFunc3()
console.log([...genObj])

function* genFunc4() {
    const second = yield 'First!'
    console.log(second)
    return 'All done!'
}

const runGen4 = genFunc4()
console.log(runGen4.next())
console.log(runGen4.next())


const bookClubs = [
    {
        name: "The Cool Club",
        clubMembers: [
            {
                name: "John Dow",
                books: [
                    { id: "hs891", title: "A Perfect" },
                    { id: "ey812", title: "A Good Book" }
                ]
            }
        ],
    },
    {
        name: "The Better Club",
        clubMembers: [
            {
                name: "Jane Doe",
                books: [
                    { id: "u8291", title: "A Great Book" },
                    { id: "p9201", title: "A Nice Book" }
                ]
            }
        ]
    }
]
function* iterateBooks(books) {
    for (let i = 0; i < books.length; i++) {
        yield books[i]
    }
}

function* iterateMembers(members) {
    for (let i = 0; i < members.length; i++) {
        const clubMember = members[i]
        yield* iterateBooks(clubMember.books)
    }
}

function* iterateBookClubs(clubs) {
    for (let i = 0; i < clubs.length; i++) {
        const bookClub = clubs[i]
        yield* iterateMembers(bookClub.clubMembers)
    }
}

const outputClubs = iterateBookClubs(bookClubs)
console.log(outputClubs.next())

console.log("--------------Separator------------------")
//JS Progmises and Async/Await
//"A promise is a placeholder for a value that can either resolve or reject at some time in the future"

console.log(new Promise(() => { }))

//Promise has 3 potential outputs
// => fulfilled
// => rejected
// => pending

new Promise((resolve, reject) => {
    try {           //Try run this
        const data = "preform task"
        resolve(data)           //return data
    } catch (e) {    //if an error occurs, pass error msg to obj
        reject(new Error(e))    //return error obj
    }
})
//1st param handles success
//2nd param handles errors
// try      code the determines if promise is resolved or rejected

//Promise properties
// .then     Gets called after a promise is resolved
// .catch    Gets called after a promise is resolved
// .finally  Always called

console.log(Promise.resolve("Yay"))
// console.log(Promise.reject("Dang"))

/*
console.log("log 1")

Promise.resolve('log 2')
    .then(res => { console.log(res)})

console.log('log 3')
*/

//the console logs are not run in order due to Promise timeout not being set, JS can preform asyncrionusly using Promise
//we can do this because of Micro and Macro tasks/stacks

// console.log("log 1")

// setTimeout(() => {
//     console.log('Timeout log')
// }, 0)

// Promise.resolve('log 2')
//     .then(res => { console.log(res)})

// console.log('log 3')

console.log("--------------Separator------------------")


const one = () => Promise.resolve('One!')

async function myFunc() {
    console.log('In funciton')
    const res = await one()
    console.log(res)
}

console.log('Before funciton!')
console.log(myFunc())
console.log('After function')

