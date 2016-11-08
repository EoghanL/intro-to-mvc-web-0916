const Store = {}

Store.data = {
  teachers: []
}

class Teacher{
  constructor(name, hometown){
    this.name = name;
    this.hometown = hometown;
    Store.data.teachers.push(this);
  }
}
function addClicker(){
  let former = document.getElementsByTagName('form')
  former[0].addEventListener('submit', function(element){
    element.preventDefault();
    let teach_name = document.getElementsByName("student[name]")[0].value
    let teach_htown = document.getElementsByName("student[hometown]")[0].value
    new Teacher(teach_name, teach_htown)
    document.getElementsByName("student[name]")[0].value = ''
    document.getElementsByName("student[hometown]")[0].value = ''
    $('.container ul').empty()
    Store.data.teachers.forEach((teacher) =>{
      $('.container ul').append(`<li>name: ${teacher.name} hometown: ${teacher.hometown}</li><br>`)
    })
   })
 }
