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
function post_text(){
    // 値を取得
    const new_text = document.super_search.textarea.value; 
    const old_text = document.getElementById("search_text").textContent;
    document.super_search.textarea.value = ""; // delete textarea
    // need space or not (and, or: need, remove: not need)
    if(old_text.slice(-1) == '-'){
        document.getElementById("search_text").textContent = old_text + new_text;
    }else {
        document.getElementById("search_text").textContent = old_text + ' ' + new_text;
    }
}
function delete_text(){
    document.getElementById("search_text").textContent = "";
}
function add_text(){
    // get option
    conditional_text = document.super_search.pullMenu.value ;
    const old_text = document.getElementById("search_text").textContent;
    // combine text
    document.getElementById("search_text").textContent = old_text + ' ' + conditional_text;
    // reset selected value
    document.getElementById("pullMenu").value = ""
}

function search_text() {
  const text = document.getElementById("search_text").textContent;
  location.href='https://www.google.com/search?q='+text;
}
