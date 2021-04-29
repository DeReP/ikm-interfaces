window.addEventListener('DOMContentLoaded', function () {
    let btn = document.getElementById("btn");
    let table = document.getElementById("table");

    function showTable(){
        let select_subjects = document.getElementById("subjects");
        let select_themes = document.getElementById("themes");
        if(select_subjects.value=="Проектирование интерфейсов"&&select_themes.value=="Пользовательский интерфейс"){
            table.classList.remove("hide");
            table.classList.add("show");
        }
    };
    
    btn.addEventListener('click', showTable, false);
});

