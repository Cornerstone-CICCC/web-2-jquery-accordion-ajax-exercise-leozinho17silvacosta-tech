
// Exercise 1:

$(function () {
  $('.accordion-header').on('click', function () {
    $('.accordion-content').slideUp();
    $(this).next('.accordion-content').slideDown();
  });
});

// Exercise 2:

$(function () {
  $('.todos button').on('click', function () {
    $.ajax({
      url: "https://dummyjson.com/todos",
      type: "GET",
      success: function(response) {
        const list = $('.todos ul');
        list.empty();
        
        response.todos.forEach(todo => {
          list.append(`<li>${todo.todo}</li>`);
        });
      },
      error: function(err) {
        console.error(err);
      }
    });
  });
});