const hero = document.querySelector(".hero");
const name = document.querySelector(".name");
const email = document.querySelector(".email");
const phone = document.querySelector(".phone");
const enroll = document.querySelector(".enroll");
const date = document.querySelector(".date");
const avatarBtn = document.querySelector(".avatarBtn");
const studentBtn = document.querySelector(".studentBtn");
const input = document.querySelectorAll("input");
const heroBlock = document.querySelector(".heroBlock");
const header = document.querySelector("#header");
const heroId = document.querySelector("#hero");

newStudent();

studentBtn.addEventListener("click", () => {
    let newObj = {
        name: name.value,
        email: email.value,
        phone: phone.value,
        enroll: enroll.value,
        date: date.value,
    };

    let student = JSON.parse(localStorage.getItem("okuucu")) || [];
    student.push(newObj);
    localStorage.setItem("okuucu", JSON.stringify(student));

    for (let i of input) {
        i.value = "";
    }
    header.style.display = "none";
    hero.style.display = "block";
    newStudent();
});

function newStudent() {
    // hero.innerHTML += "";
    const student = JSON.parse(localStorage.getItem("okuucu")) || [];
    student.forEach((element) => {
        const box = document.createElement("div");
        const newName = document.createElement("h3");
        const newEmail = document.createElement("h3");
        const newPhone = document.createElement("h3");
        const newEnroll = document.createElement("h3");
        const newDate = document.createElement("h3");
        box.classList = "box";

        newName.innerText = element.name;
        newEmail.innerText = element.email;
        newPhone.innerText = element.phone;
        newEnroll.innerText = element.enroll;
        newDate.innerText = element.date;

        hero.append(box);
        box.append(newName);
        box.append(newEmail);
        box.append(newPhone);
        box.append(newEnroll);
        box.append(newDate);
    });

    newStudent();
}
