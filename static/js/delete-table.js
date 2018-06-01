function deleteTable(){
  $.post(clear_table_url,
  {
  },
  function (data) {
    window.location.href = 'index.html';
  });
}
