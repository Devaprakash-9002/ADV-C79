all_students=[];

function submit() {
    var name1=document.getElementById("p1").value;
    var name2=document.getElementById("p2").value;
    var name3=document.getElementById("p3").value;
    var name4=document.getElementById("p4").value;

    all_students.push(name1);
    all_students.push(name2);
    all_students.push(name3);
    all_students.push(name4);
    console.log(all_students);

    document.getElementById("display_all_students").innerHTML=all_students;
    document.getElementById("submit").style.display="none";
    document.getElementById("sort_btn").style.display="inline-block";
}

function sort_btn() {
    all_students.sort();
    console.log(all_students);
    document.getElementById("display_all_students").innerHTML=all_students;
}