/* Note: This only work on browser
Open the Followers / Following list and scroll until all list is loaded.
Inspect the element where the username is and copy the first Class name of the Span element. Note: The class name isn't the same everytime, so, you need to check the class name of the element everytime you need to use this script */

//Get Followers list
const followers = document.querySelectorAll("span.[classname]"); //Class name where the account username is

var i;
for(i=0; i < followers.length; i++){
console.log(followers[i].innerHTML); //Get the username inside the Span and print them, in list format, to the console
}

//Get Following list
const following = document.querySelectorAll("span.[classname]"); //Class name where the account username is

var i;
for(i=0; i < following.length; i++){
console.log(following[i].innerHTML); //Get the username inside the Span and print them, in list format, to the console
}
