$(document).ready(function () {
  page.init();
});

var page = {

  // deleteSection: function (idx) {
  //
  //     todoData.splice(idx,1);
  //     $('.container').html('');
  //     page.loadArticles(blogData);
  //   },

init: function() {
  page.initEvents ();
  page.initStyling ();

},

initEvents: function (){

$('.container').on('click', 'i', function(){
$(this).toggleClass('fa fa-check-circle-o');
$(this).toggleClass('fa fa-circle-o');
$(this).toggleClass('crossedout');
$(this).toggleClass('changecolor');
});

$('footer').on('click', 'li', function(){
  $(this).removeClass('.hidden');
  $(this).siblings().toggleClass('.hidden');
  console.log(this);
});

// var activepage = function(){
//   if('i')hasClass('crossedout');
//
// };

        $('form').on('submit', function (event) {
              event.preventDefault();
              var newToDo = {
              content: $('input[name="todo"]').val()
              };
              todoData.push(newToDo);
              var todoId = todoData.indexOf(newToDo);
              // newToDo.id = todoId;
              page.loadTemplate($('.container'), newToDo, $('#todoTmpl').html());
              $('input[name="todo"]').val("");
              console.log(todoId);
              $('#itemsleft').text("Items Left" + " " + todoId);

              //
              $('.container').on('click', 'i', function (event){
                event.preventDefault();
                  $('#itemsleft').text("Items Left" + " " +  parseInt(todoId - 1));
              });
              //
      //         $('.clear').on('click', function (event) {
      //           event.preventDefault();
      //          $(this).closest('section').data('id');
      //           page.deleteSection(todoId);
      // });
            });

            // $('.container').on('dbclick', 'i', function (event){
            //     event.preventDefault();
            //     $().
            // };


          },



initStyling: function (){},

loadTemplate: function ($el, data, tmpl) {
      var template = _.template(tmpl);
      var html = template(data);
      $el.append(html);
    },
    // loadContent: function (arr) {
    //       _.each(arr, function (el, idx, arr) {
    //         el.id = idx;
    //         page.loadTemplate($('.container'), el, $('#infoTmpl').html());
    //       });
    //     },

};  //end of var page
