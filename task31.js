//task 31: No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
console.log("task no. 31:")
var users = ['admin', 'Dawood', "Saher", "Rukhsar", "Heer"];
for (let i = 0; i < users.length; i++) {
    if (users[i] == '') {
        console.log('We need to find some users!')
    } else {
        console.log(`hello ${users[i]}`)
    }
}
users.splice(0,5,)
console.log(users)