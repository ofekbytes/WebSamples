
-=[ Action on Element ]=-

// all element
$("*")

// element (id = idElement()
$("#idElement")

// all element with (class = classElement)
$(".classElement")

// all <p> element/s
$("p")

// all <h1> <h2> <h3> element/s
$("h1,h2,h3")

// ":first" <h1> element
$("h1:first")

// ":last" <h2> element
$("h2:last")

// ":first-child" - all <b> element that are the first child of their parent
$("b:first-child")

// ":last-child" - all <b> element that are the last child of their parent
$("b:last-child")

// ":nth-child(2)" - all <div> element that are 2nd child of their parent
$("div:nth-child(2)")

// all <p> elements that are direct child of a <div> element
$("div > p")

// all <p> elements that are descendants
$("snap p")

// the third element in a list (index starts at 0), (x=n+1, 0=1 ,1=2 ,2=3 ,...)
$("ul li:eq(2)")

// all elements which contain the text 'solo'
$(":contains('solo')")

// all elements with a src attribute
$("[src]")

// all input elemets
$(":input")

// all input elemets with type = "text"
$(":text")
