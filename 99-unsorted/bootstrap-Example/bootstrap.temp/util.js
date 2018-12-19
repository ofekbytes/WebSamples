//
//Global varaible
//
var glCbValue = [];
var selected = []; //delete


function getOnloadData()
{

     //  $(document).ready(function(e) {


      $(function()
      {
          // default //
//          $('.selectpicker').selectpicker();     //ok         
          $('#sp2').selectpicker();

          // check all selected element and display result in console.
//          $('.selectpicker').on('change', function() //ok
          $('#sp2').on('change', function()
          {
                //var selected = [] // data move to global variable //delete 
//                glCbValue = $('.selectpicker').val() //ok
                glCbValue = $('#sp2').val()
                // console.log(glCbValue); //Get the multiple values selected in an array
                // console.log(glCbValue.length); //Length of the array
          });
       });

// on.click  // delete
//     $('#sp2').on('click',function() {
//   alert($(this).val());
//   console.log($(this).val());
// }); 

    //   });

    // Listener // button - click //
    document.getElementById('submit').addEventListener('click', getText);
}


// click event trigger //
function getText()
{
    //show all selected data.
    console.log("====");
    console.log("glCbValue [] selected array ==> " + glCbValue);
    console.log("====");


    var listResult;

    console.info(" Nice ");
    console.info("Result = " + document.getElementById("sp2").selectedIndex );

    //test
    //console.info("test = " + document.getElementById("sp2").querySelectorAll() );

    var fromDatex;
    var fromDatey;
    var stCbListKey;
    var totalRecords;

    // totalRecords = document.getElementById("sp2").size();
    // console.log("size == " + totalRecords);

    fromDatex = document.getElementById("sp2").selectedIndex;
    if (fromDatex >= 0)
    {
        fromDatey = document.getElementById("sp2").options;
        stCbListKey = ""  + fromDatey[fromDatex].text;
        console.log(stCbListKey);
    }
    else 
    {
        console.log("===!=== fromDatex small the 0");
    }



///???
    // $('#sp2').on('click',function(e) {
    //     alert($(this).val());
    //     console.log($(this).val());
    //   });



   // console.log(" **** ");

   //  $('.selectpicker').change(function () {
//    $('#sp2').change(function () 
//    {        
//         var slecteditem= $(this).find("option:selected").val();    
//      //   alert(slecteditem);

//         console.info("slecteditem " + slecteditem);
//     });
}

