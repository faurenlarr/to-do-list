$(document).ready(function () {
  page.init();
});
var todoData = [];
var toThrowAway = [];
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
    var id = $(this).parent().attr("data-id");
    if(todoData[id].completed) {
      todoData[id].completed = false;
    } else {
      todoData[id].completed = true;
    }


    // var content = $(this).context.innerText.trim()
  });




  $('footer').on('click', 'li', function(){
  $(this).removeClass('.hidden');
  $(this).siblings().toggleClass('.hidden');
  console.log(this);
  });

  $('.clear').on('click', function(){
  $('.clear').removeClass('hidden');

  });

  $('form').on('submit', function (event) {
      event.preventDefault();
      var newToDo = {
        content: $('input[name="todo"]').val().trim(),
        completed: false
      };

      todoData.push(newToDo);
      var todoId = todoData.indexOf(newToDo);
      newToDo.id = todoId;
      page.loadTemplate($('.container'), newToDo, $('#todoTmpl').html());
      $('input[name="todo"]').val("");
      page.itemsLeft();
    });

      $('.container').on('click', 'i', function (event){
        event.preventDefault();
        page.itemsLeft();
      });
      //
  //



    $('#active').on('click', function() {
      $.each($('.box'),function(idx,el) {
        if($(el).find('i').hasClass('crossedout')) {
         $(el).css('display','none');
        } else {
          $(el).css('display', 'block');
        }
      });
    });

    $('#completed').on('click', function() {
      $.each($('.box'),function(idx,el) {
        if($(el).find('i').hasClass('crossedout')) {
           $(el).css('display','block');
        } else {
          $(el).css('display','none');
        }
      });
    });

    $('#all').on('click', function(el) {
        $('.box').css('display', 'block');
      });

  $('#clear').on('click', function(){
    todoData = _.filter(todoData, function(el,idx,arr){
      return (!el.completed) ;
        });
         $('.changecolor').parent().remove();
       });

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
  itemsLeft: function() {
    var leftToComplete = $('.fa-circle-o').length;
    $('#itemsleft').text("Items Left" + " " + parseInt(leftToComplete));
  }
};  //end of var page
