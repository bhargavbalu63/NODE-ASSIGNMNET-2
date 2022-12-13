const readline= require("readline")

// const rl =readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// })
// rl.question("please tell your name", (ans)=>
// {
//     console.log("hello "+ ans);
// })
// console.log(createInterface);
const rl= readline.createInterface({
    input:process.stdin,
    output:process.stderr
})
rl.question("Please enter your name: ", (ans)=>
{
    console.log("Hello "+ ans);
    rl.question("how are u ", (ans)=>
        {
            console.log("good");
             
    rl.close()
        })
   
})