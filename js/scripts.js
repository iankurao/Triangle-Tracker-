function linkIan() {
    var input1=document.getElementById("data1").value
    var input2=document.getElementById("data2").value
    var input3=document.getElementById("data3").value
    var side1 = parseInt(input1)
    var side2 = parseInt(input2)
    var side3 = parseInt(input3)

    if(side1 === side2 && side2 === side3 && side3 === side1){
        alert("This is an equilateral triangle ");
    }
    else if(side1 === side2 || side2 === side3 || side1 === side3){
    alert("This is an isosceles triangle ");
    }
    else if((side1 + side2) > side3 || (side1 + side3) > side2 || (side2 + side3) > side1) {
    alert("This is a scalene triangle");
    }
    else{
    alert("Not a triangle");
    }
}
