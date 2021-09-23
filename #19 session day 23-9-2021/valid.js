
$("#regiesterbtn").click((e)=>{
    if ($("#email").val()!=''){

        if(($("#pass").val()== $("#passconf").val()) && ($("#pass").val()!='')){
        confirm("correct data")
        }
        else{
            confirm("invaild data")
            e.preventDefault()
        }
    }
    else{
        confirm("invaild data")
        e.preventDefault() ; 
    }
})

$("#btnlog").click((e)=>{
    if (($("#emaillog").val()!='') && ($("#passlog").val()!='')){

 
        confirm("correct data")

    }
    else{
        confirm("invaild data")
        e.preventDefault() ; 
    }
})