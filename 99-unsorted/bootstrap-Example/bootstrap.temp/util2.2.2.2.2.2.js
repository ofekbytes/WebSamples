//
//Global varaible
//
var glCbValue = [];



function getOnloadData()
{

//    fetch('http://localhost:8080/list')
fetch('./sample.json')
    .then((res) => res.json())
    .then((data) => {

        let outputKey = ``;
        let outPutValue = ``;

        data.forEach(function(post){
        
            outputKey += `<option value="post.custname">${post.custname} </option> `;
            outPutValue += `<option value="post.custdes">${post.custdes} </option> `;
        });
        document.getElementById('sp2').innerHTML = outputKey;
    });



    $(function()
    {
        //set hebrew language - for list -  testing only
        $("#sp2").selectpicker(
        {
          selectAllText:"בחר הכל",
          deselectAllText:"בטל הכל",
        });
        
 
        //    document.getElementById('sp2').innerHTML = outputKey;
           //document.getElementById('cbListvalue').innerHTML =  outPutValue;

        //select and change value in array (glCbValue)
        $('#sp2').on('change', function()
        {
            glCbValue = $('#sp2').val()
        });
   


    // Listener // button - click //
    document.getElementById('submit').addEventListener('click', getText);
    })

};


// click event trigger //
function getText()
{
    //show all selected data.
    console.log("====");
    console.log("glCbValue [] selected array ==> " + glCbValue);
    console.log("====");
}


//erase/delete

    // var listResult;

    // console.info(" Nice ");
    // console.info("Result = " + document.getElementById("sp2").selectedIndex );

    //test
    //console.info("test = " + document.getElementById("sp2").querySelectorAll() );

    // var fromDatex;
    // var fromDatey;
    // var stCbListKey;
    // var totalRecords;

    // // totalRecords = document.getElementById("sp2").size();
    // // console.log("size == " + totalRecords);

    // fromDatex = document.getElementById("sp2").selectedIndex;
    // if (fromDatex >= 0)
    // {
    //     fromDatey = document.getElementById("sp2").options;
    //     stCbListKey = ""  + fromDatey[fromDatex].text;
    //     console.log(stCbListKey);
    // }
    // else 
    // {
    //     console.log("===!=== fromDatex small the 0");
    // }
//}

