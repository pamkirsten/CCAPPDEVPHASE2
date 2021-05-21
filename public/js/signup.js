function createDateOptions() {
  var d = new Date();
  var currYear = d.getFullYear();
  var yroptions = "<option value='0'>"+currYear+"</option>"
  for (var i = 0; i < 100; i++){
    currYear--;
    yroptions += "<option value='"+currYear+"'>"+currYear+"</option>";
  }
  document.getElementById('year').innerHTML = yroptions;

  var dayoptions = "<option value='0'>1</option>"
  for (var i = 2; i < 32; i++){
    dayoptions += "<option value='"+i+"'>"+i+"</option>";
  }
  document.getElementById('day').innerHTML = dayoptions;

}
