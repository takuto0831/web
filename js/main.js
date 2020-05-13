function changeLang(lang) {
    if (lang == 'jp') {
      $('.en').each(function () {
        $(this).css('display', 'none');
        $(this).prev($(this).prop('tagName')).fadeIn();
        langEng = false;
      });
    } else if (lang == 'en') {
      $('.en').each(function () {
        $(this).prev($(this).prop('tagName')).css('display', 'none');
        $(this).fadeIn();
        langEng = true;
      });
    }
  }

