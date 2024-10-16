/* ==============================================Modal-window==================================================== */

const pulseBtn1 = document.getElementById('pulseBtn1');
const bookModaliki = document.getElementById('bookModal');

const pulseBtn2 = document.getElementById('pulseBtn2');
const clientModaliki = document.getElementById('clientModal');

const pulseBtn3 = document.getElementById('pulseBtn3');
const cartModaliki = document.getElementById('cartModal');

const pulseBtn4 = document.getElementById('pulseBtn4');
const staticModaliki = document.getElementById('staticModal');


pulseBtn1.addEventListener("click", () => {
   bookModaliki.classList.toggle("hidden");
});

pulseBtn2.addEventListener("click", () => {
  clientModaliki.classList.toggle("hidden");
});

pulseBtn3.addEventListener("click", () => {
  cartModaliki.classList.toggle("hidden");
});

pulseBtn4.addEventListener("click", () => {
  staticModaliki.classList.toggle("hidden");
});

/* ==============================================book-list==================================================== */

const name = document.getElementById("book-name");
const author = document.getElementById("book-author");
const num = document.getElementById("book-num");
const addBookB = document.getElementById("add-book-button");
const list = document.getElementById("book-list-ul");

addBookB.addEventListener("click", () => {
    const bName = name.value;
    const bAuthor = author.value;
    const bNum = num.value;

    if (bName && bAuthor && bNum) {
        if (addBookB.textContent === "Save changes") {
            const currentLi = document.querySelector(".editing");

            currentLi.innerHTML = ` <span>Name of book:</span> ${bName} <br> 
                                    <span>Author of book:</span> ${bAuthor} <br> 
                                    <span>Number of book:</span> ${bNum} <br>  
                                    <button class="butDel">Delete book</button> 
                                    <button class="butRedact">Redact book</button>`;

            const delBut = currentLi.querySelector(".butDel");
            const redactBut = currentLi.querySelector(".butRedact");

            delBut.addEventListener("click", () => currentLi.remove());

            redactBut.addEventListener("click", () => startEditing(currentLi));

            addBookB.textContent = "Add Book";
            name.value = "";
            author.value = "";
            num.value = "";
            currentLi.classList.remove("editing");

        } else {
            const li = document.createElement("li");
            li.innerHTML = `<span>Name of book:</span> ${bName} <br> 
                            <span>Author of book:</span> ${bAuthor} <br> 
                            <span>Number of book:</span> ${bNum} <br>  
                            <button class="butDel">Delete book</button> 
                            <button class="butRedact">Redact book</button>`;
            list.appendChild(li);

            name.value = "";
            author.value = "";
            num.value = "";

            const delBut = li.querySelector(".butDel");
            delBut.addEventListener("click", () => li.remove());

            const redactBut = li.querySelector(".butRedact");
            redactBut.addEventListener("click", () => startEditing(li));
        }
    } else {
        alert("Enter all strings please)");
    }
});

function startEditing(li) {
    li.classList.add("editing");

    const details = li.querySelectorAll("span");
    name.value = details[0].nextSibling.nodeValue.trim();
    author.value = details[1].nextSibling.nodeValue.trim();
    num.value = details[2].nextSibling.nodeValue.trim();

    addBookB.textContent = "Save changes";
}



/* ==============================================people-list==================================================== */
const peopleName = document.getElementById("people-name");
const peopleSurname = document.getElementById("people-surname");
const peopleId = document.getElementById("people-id");
const addPeopleB = document.getElementById("add-person-button");
const listOfPeople = document.getElementById("person-list-ul");



addPeopleB.addEventListener("click", () => {
    const pName = peopleName.value;
    const pSur = peopleSurname.value;
    const pId = peopleId.value;

    if (pName && pSur && pId) {
        if (addPeopleB.textContent === "Save changes") {
            const currentLi = document.querySelector(".editing-person");

            currentLi.innerHTML = `<span>Name of person:</span> ${pName} <br> 
                                   <span>Surname of person:</span> ${pSur} <br> 
                                   <span>ID of person:</span> ${pId} <br>  
                                   <button class="butDel">Delete person</button> 
                                   <button class="butRedact">Edit person</button>`;

            const delBut = currentLi.querySelector(".butDel");
            const redactBut = currentLi.querySelector(".butRedact");

            delBut.addEventListener("click", () => currentLi.remove());

            redactBut.addEventListener("click", () => startEditingPerson(currentLi));

            addPeopleB.textContent = "Add Person";
            peopleName.value = "";
            peopleSurname.value = "";
            peopleId.value = "";
            currentLi.classList.remove("editing-person");
        } else {
            const li = document.createElement("li");
            li.innerHTML = `<span>Name of person:</span> ${pName} <br> 
                            <span>Surname of person:</span> ${pSur} <br> 
                            <span>ID of person:</span> ${pId} <br>  
                            <button class="butDel">Delete person</button> 
                            <button class="butRedact">Edit person</button>`;
            listOfPeople.appendChild(li);

            peopleName.value = "";
            peopleSurname.value = "";
            peopleId.value = "";

            const delBut = li.querySelector(".butDel");
            delBut.addEventListener("click", () => li.remove());

            const redactBut = li.querySelector(".butRedact");
            redactBut.addEventListener("click", () => startEditingPerson(li));
        }
    } else {
        alert("Enter all strings please)");
    }
});

function startEditingPerson(li) {
    li.classList.add("editing-person");

    const details = li.querySelectorAll("span");
    peopleName.value = details[0].nextSibling.nodeValue.trim();
    peopleSurname.value = details[1].nextSibling.nodeValue.trim();
    peopleId.value = details[2].nextSibling.nodeValue.trim();

    addPeopleB.textContent = "Save changes";
}



/* ==============================================cart-list==================================================== */

const cartName = document.getElementById("cart-name");
const cartAughtor = document.getElementById("cart-author");
const addCartB = document.getElementById("add-cart-button");
const listOfCart = document.getElementById("cart-list-ul");

addCartB.addEventListener("click", () => {
    const cName = cartName.value;
    const cAuthor = cartAughtor.value;
    if (cName && cAuthor) {
        const li = document.createElement("li");
        li.innerHTML = `<span>Name of book:</span> ${cName} <br> <span>Author of book:</span> ${cAuthor} <br>  <button class="butDel">Get back book</button>`;
        listOfCart.appendChild(li);
        cartName.value = "";
        cartAughtor.value = "";
        const delBut = li.querySelector(".butDel");
        const issueDate = new Date().toLocaleDateString();
        delBut.addEventListener("click", () => {
            li.innerHTML = `<span>Take of the book:</span> ${issueDate}`;
        })
    }
    else {
        alert("Enter all strings please)")
    }
})


/* ==============================================stats-list==================================================== */
const mostPopularBooks = document.getElementById('popularBooksList');
const mostActiveVisiters = document.getElementById('activeVisitorsList');
const statikBurron = document.querySelector(".staticBtn");


statikBurron.addEventListener("click", () => {
    mostPopularBooks.classList.toggle("hid");
});

statikBurron.addEventListener("click", () => {
    mostActiveVisiters.classList.toggle("hid");
});