const inputSearch = document.querySelector(".search input");

const div = document.querySelector(".notes");

const eraseBtn = document.querySelector(".erase");
const addBtn = document.querySelector(".add");
const inputAdd = document.querySelector(".btns input");

const h1 = document.querySelector(".notes h1");

let deleteBtn = null;

let searchTasks = [];

let toggled = false;

const deleteOneNote = (e) => {
    e.target.parentNode.parentNode.remove();

    let index = e.target.parentNode.parentNode.textContent;
    searchTasks.forEach((task, i) => {
        if (task.includes(index)) {
            searchTasks.splice(i, 1);
        }
    });

    if (!document.querySelector(".notes div")) {
        div.innerHTML = '<h1 class="start">Tutaj znajdziesz swoje notatki...</h1>';
    }
}

const addNote = () => {
    if (inputAdd.value != "") {
        if (document.querySelector(".notes h1")) {
            document.querySelector(".notes h1").style.display = "none";
        }

        const inside = `<div>${inputAdd.value}<button><i class="icon-trash"></i></button></div>`;

        div.innerHTML += inside;

        searchTasks.push(inputAdd.value);

        deleteBtnClick();
    }
}

const searchNotes = (e) => {
    const searchText = e.target.value.toLowerCase();
    let sN = searchTasks;

    sN = sN.filter(note => note.toLowerCase().includes(searchText));

    console.log(sN);

    div.innerHTML = '';

    sN.forEach(note => div.innerHTML += `<div>${note}<button><i class="icon-trash"></i></button></div>`);

    deleteBtnClick();
}

const deleteBtnClick = () => {
    deleteBtn = document.querySelectorAll('.notes div button');
    deleteBtn.forEach(item => item.addEventListener('click', deleteOneNote)
    );
}

addBtn.addEventListener('click', () => {
    if (!toggled) {
        inputAdd.style.display = "block";
        toggled = !toggled;
    }
    else {
        addNote();

        inputAdd.style.display = "none";
        inputAdd.value = "";
        toggled = !toggled;
    }
});

eraseBtn.addEventListener('click', () => {
    div.innerHTML = '<h1 class="start">Tutaj znajdziesz swoje notatki...</h1>';

    searchTasks = [];
});

inputSearch.addEventListener('input', searchNotes);







