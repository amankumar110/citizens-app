const form = document.querySelector("form");
const resultdiv = document.querySelector(".result")
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const res = await data.json();
  const entertedName = e.target.username.value.toLowerCase();
  const entertedEmail = e.target.email.value.toLowerCase();
  for (const user of res) {
    if (user.username.toLowerCase() === entertedName
        && user.email.toLowerCase() === entertedEmail) {
      document.querySelector("#namefield").textContent = user.name;
      document.querySelector("#cityfield").textContent = user.address.city;
      document.querySelector("#numberfield").textContent = user.phone;
      document.querySelector("#streetfield").textContent = user.address.street;
      resultdiv.style.display = "grid";
      break;
    } else{
       alert("Incorrect username or Email address")
       break;
    }
  }
});
