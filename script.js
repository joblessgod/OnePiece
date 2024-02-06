// alert("JavaScript is connected.")


function darkMode() {
    document.getElementById("body").classList.add("dark")
    // console.log(`Toggled Dark Mode`);
    // document.getElementById("dark").innerHTML = ("Light Mode")
    // document.getElementById("dark").classList.add("lightly")
}
function toLightMode() {
    document.getElementById("body").classList.remove("dark")
    // console.log(`Toggled Theme Mode`);
    // document.getElementById("dark").innerHTML = ("Dark Mode")

}
function toggleTheme() {
    document.getElementById("body").classList.toggle("dark")

}