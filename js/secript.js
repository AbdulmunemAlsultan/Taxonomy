$(document).ready(function () {
  console.log("ok");
  $(function () {
    $('.tree-div').click(function () {
      $(this).next().toggleClass('tree-open');
    });
    $('.search-input').keyup(function () {
      var filter_text = $(this).val();
      if (filter_text) {
        $('.tree-li-ul').each(function () {
          var match_flag = false

          $(this).children().each(function () {

            if ($(this).children().text().toLowerCase().indexOf(filter_text) >= 0) {

              match_flag = true;

              $(this).parent().addClass('tree-open');
               console.log(filter_text);
              $(this).slideDown();
            }

            else {

              $(this).slideUp();

              if (!match_flag) $(this).parent().parent().removeClass('tree-open');
            }
          });
        });
      }

      else {

        $('.tree-li-ul').removeClass('tree-open');

        $('.tree-li-ul-li').slideDown();
      }
    });
  });
  var toggler = document.getElementsByClassName("caret");
  var i;
  for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function () {
      this.parentElement.querySelector(".nested").classList.toggle("active");
      this.classList.toggle("caret-down");
    });
  }

});










