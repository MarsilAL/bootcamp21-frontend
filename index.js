const jquery = require('jquery')
//
$ = window.$ = window.jQuery = jquery;

$(function () {
    let endpoint = 'https://jsonplaceholder.typicode.com/todos'
    $.ajax({
        url: endpoint,
        contentType: "application/json",
        dataType: 'json',
        success: function (result) {
            for(let x = 0; x <result.length; x++){

            }
            // First Object
            var id = document.getElementById("todoID")
            id.innerHTML = 'ID: ' + result[3].id

            var title = document.getElementById("todoTitle")
            title.innerHTML = 'Title: ' + result[3].title

            var isCompleted = document.getElementById("isC")
            isCompleted.innerHTML = 'is Completed: ' + result[3].completed
            
        }
    })

})