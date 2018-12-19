//
//Global varaible
//
var glCbValue = [];
var glCbValue3 = [];


function loadList()
{

    console.log("loadList() function loaded ");
    const url = 'http://localhost:8080/listJson';

    fetch(url)  
      .then(  
        function(response) 
        {  
          console.log("response");
          console.log(response);

          if (response.status !== 200) 
          {  
            console.warn('Looks like there was a problem. Status Code: ' + response.status);  
            return "error 200";  
          }
    

          // Examine the text in the response  
          response.json().then(function(post) 
          {
            //display post value.
            console.log("post ==> ");
            console.log(post);

            let outputKey = '';
            let outPutValue = '';
            let outBoth = '';
            let newOption ;
            for (let i = 0; i < post.length; i++) 
              {
                 // outputKey   += '<option data-tokens=' + post[i].custname + ' value=' + post[i].custname + ' >'  + post[i].custname + ' - ' +  post[i].custdes + ' </option> ';

                 outputKey   += '<option data-tokens=' + post[i].custname + ' value= "' + post[i].custname + '" >'  + post[i].custname + ' - ' +  post[i].custdes + ' </option> ';

                  // temp keep //
                  // outputKey   += '<option value=' + post[i].custname + '>' + post[i].custname + ' - ' +  post[i].custdes + ' </option> '; 
              }
              $("#sp3").html(outputKey);
              $("#sp3").selectpicker('refresh');
            });
              
        }  
      )  

      .catch(function(err) {  
        console.error('Fetch Error -', err);  
      });

    }
 

function getOnloadData()
{
    loadList();



    $(function()
    {

        //select and change value in array (glCbValue)
        $('#sp2').on('change', function()
        {
            glCbValue = $('#sp2').val();
        });


        $('#sp3').on('change', function()
        {
            //glcbvalue3 = $('#sp3').value();
            glcbvalue3 = $('#sp3').val();
        });

    });

    // Listener // button - click //
    document.getElementById('submit').addEventListener('click', getText);
    
}


// click event trigger //
function getText()
{
    //show all selected data.
    console.log("====");
    console.log("glCbValue [] selected array ==> " + glCbValue);
    console.log("glCbValue3 [] selected array ==> " + glCbValue3);
    console.log("====");
}


