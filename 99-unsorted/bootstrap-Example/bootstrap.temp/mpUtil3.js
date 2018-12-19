
         var gData ;


        //  document.getElementById('submit').addEventListener('click', getText);
 
 
         function getText()
         {
 
             // var gData; //global data variable
 
             var stFromDate = "";
             var stToDate = "";
             var stCbListKey = "";
             var stCbbListvalue = "";
             
             
             var xTmp = " " ;
             stFromDate = "" + document.getElementById("fromDate").value ;
             stToDate = "" + document.getElementById("toDate").value;
 
 
     //             var x = document.getElementById("mySelect").value;
     // document.getElementById("demo").innerHTML = x;
 
         var fromDatex = document.getElementById("cbListKey").selectedIndex;
         var fromDatey = document.getElementById("cbListKey").options;
         stCbListKey = ""  + fromDatey[fromDatex].text;
 
         var toDateDatex = document.getElementById("cbListvalue").selectedIndex;
         var toDateDatey = document.getElementById("cbListvalue").options;
         stCbbListvalue = ""  + toDateDatey[toDateDatex].text;
 
 
             // xTmp = xTmp + "<br/> key: "  + document.getElementById("cbListKey").value; //.getCbList;
             // xTmp = xTmp + "<br/> key: "  + document.getElementById("cbListvalue").value; //.getCbList;
 
             xTmp = stFromDate + "" + stToDate + "" + stCbListKey + "" + stCbbListvalue;
 
             // document.getElementById("output").innerHTML = xTmp;
             document.getElementById("output").innerHTML = "please wait.";
 
 
           //$.post("http://localhost:8080/dataProdResult", 
           $.post("http://localhost:8080/dataProdResult", 
           {
                 fromDate: stFromDate,
                 toDate: stToDate,
                 custname: stCbListKey,
                 custdes: stCbbListvalue
             },
             function(data, status)
             {
                 gData =  data;
                 console.log("Data: " + data + " Status: " + status ); 
                 console.log("End Here And Now.");
 
 
                 //display return data.
                 document.getElementById("example").innerHTML = data;    
                 document.getElementById("output").innerHTML = "";
  
             });
 
           //  document.getElementById("output").innerHTML = ">> >> " + data; 
            
         //    $('#example').DataTable( {
         //             "ajax" : gData,
         //             "columns" : [
         //                 { "data" : "name"},
         //                 { "data" : "position"},
         //                 { "data" : "Office"},
         //                 { "data" : "age"},
         //                 { "data" : "startDate"},
         //                 { "data" : "salary"}                                                       
         //             ]
         //         } );
 
         
           //  console.log("jdata = " +  jdata ); //+ " Data " + data);
 
           //     loadDoc();
           /////// TODO : fix jdata
         //  reloadData();
         }
 
 
         function reloadData()
         {
 
        //     $(document).ready(function() {
        //        $('#example').DataTable( {
        //           "ajax" : "sample2.json",
        //           "columns" : [
        //               { "data" : "collectionDate"},
        //               { "data" : "barcode"},
        //               { "data" : "customersSourceCust"},
        //               { "data" : "customersCustdes"},
        //               { "data" : "customersOneDestCust"},
        //               { "data" : "customersOneCustdes"},   
        //               { "data" : "customersTwoPayCust"},                                                     
        //               { "data" : "customersTwoCustdes"},                                                    
        //               { "data" : "value"},                                                     
        //               { "data" : "currency"},                                                     
        //               { "data" : "docno"},                                                     
        //               { "data" : "sertype"},                                                     
        //               { "data" : "EstrIntypename"},                                                     
        //           ]
        //        } );
        //    } );

            //reload
            var table = $('#example').DataTable( {
            ajax: "data.json"
            } );
            table.ajax.url( 'sample2.json' ).load();


                    // var table = $('#example').DataTable( {
            //     ajax: "sample2.json"
            // } );
             
            // setInterval( function () {
            //     table.ajax.reload();
            // }, 30000 );
           
         }


         function getOnloadData()
         {
         //fetch('http://localhost:8080/list')
         fetch('sample.json')
         .then((res) => res.json())
         .then((data) => {
             let outputKey = ``;
             let outPutValue = ``;
 
             data.forEach(function(post){
             
                 outputKey += `<option value="post.custname">${post.custname} </option> `;
                 outPutValue += `<option value="post.custdes">${post.custdes} </option> `;
             });
 
            document.getElementById('cbListKey').innerHTML = outputKey;
            document.getElementById('cbListvalue').innerHTML =  outPutValue;
 
            
            
            $('#fromDate').datepicker({
                uiLibrary: 'bootstrap4',
                format: "dd/mm/yyyy",           
            });

            $('#toDate').datepicker({
                uiLibrary: 'bootstrap4',
                format: "dd/mm/yyyy",           
            });

            document.getElementById('submit').addEventListener('click', getText);
            


         })
         }