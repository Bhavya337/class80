var name_of_the_array=[];
function submit(){
var display_student_array=[];
for (var x=1; x<=4; x++ )
{ var name_of_the_student=document.getElementById("name_of_the_student_"+x).value;
console.log(name_of_the_student); 
name_of_the_array.push(name_of_the_student);
}
console.log(name_of_the_array);
var lenght=name_of_the_array.length;
console.log(lenght);

for (var b=0; b<lenght; b++ )
{
display_student_array.push("<h4>NAME - "+ name_of_the_array [b] + "</h4>");
console.log(display_student_array);
}
document.getElementById("display_name_with_commas").innerHTML=display_student_array;

var remove_commas = display_student_array.join(" "); 
 console.log(remove_commas);
  document.getElementById("display_name_without_commas").innerHTML = remove_commas; 
  document.getElementById("submit_button").style.display = "none"; 
  document.getElementById("sort_button").style.display = "inline-block";
}
function sort(){name_of_the_array.sort();
    console.log(name_of_the_array);
    var sort_array=[];
    var l_1=name_of_the_array.length;
    for (var k = 0; k < l_1; k++) 
    { sort_array.push("<h4>NAME - " + name_of_the_array [k] + "</h4>");
     console.log(sort_array); } var remove_commas = sort_array.join(" ");
      console.log(remove_commas);
       document.getElementById("display_name_without_commas").innerHTML = remove_commas;


}