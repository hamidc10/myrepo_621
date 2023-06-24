//Used to help with btn function
//-https://stackoverflow.com/questions/65783280/function-returns-value-of-button-javascript
//Used to help with pop
//-https://www.tutorialspoint.com/How-to-remove-last-array-element-in-JavaScript-and-return-it
//Used to help with arrays
//-https://www.w3schools.com/js/js_arrays.asp
//-https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
//-https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
//Used to remove commas
//-https://java2blog.com/remove-comma-from-string-javascript/#:~:text=Using%20replaceAll()-,To%20remove%20comma%20from%20string%20in%20Javascript%3A,matches%20replaced%20by%20given%20replacement.
//Used to help evaluate the result
//- Learned about the evaluate from TA and when looking up solution for solving
//-https://mathjs.org/index.html
//Used to help clear the array
//-https://sentry.io/answers/how-do-i-empty-an-array-in-javascript/
//Used for help with edge case for square root
//-https://stackoverflow.com/questions/35355920/how-can-i-check-that-a-string-does-not-include-the-text-of-another-string

var screen_display=document.getElementById('calc');
var user_input=[];
var op=["+","-","/","*","sqrt(","sin(",")","cos(","tan(",'(',"."];
function user_pressed(btn){
    let val=btn.value;
    user_input.push(val);
    //Check to ensure that first value is not an operation
    if(user_input[0]==op[0] || user_input[0]==op[1] || user_input[0]==op[2] || user_input[0]==op[3] || user_input[0]==op[6] || user_input[0]==op[10] ){
        user_input.pop()
    }
    //Check to make sure that there is not two operations back to back like ++ 
    for(var i=0;i<user_input.length;i++){
        var prev=user_input[i-1];
        var current=user_input[i];
        if((prev == op[0]  && current == op[0])||(prev == op[1]  && current == op[1])||(prev == op[2]  && current == op[2])||(prev == op[3]  && current == op[3])|| (prev == op[4]  && current == op[5])|| (prev == op[5]  && current == op[4])){
            user_input.pop();
        }
        else if((prev == op[0]  && current == op[1])||(prev == op[0]  && current == op[2])||(prev == op[0]  && current == op[3])){
            user_input.pop();
        }
        else if((prev == op[1]  && current == op[0])||(prev == op[1]  && current == op[2])||(prev == op[1]  && current == op[3])){
            user_input.pop();
        }
        else if((prev == op[2]  && current == op[0])||(prev == op[2]  && current == op[1])||(prev == op[2]  && current == op[3])){
            user_input.pop();
        }
        else if((prev == op[3]  && current == op[0])||(prev == op[3]  && current == op[1])||(prev == op[3]  && current == op[2])){
            user_input.pop();
        }
          
    }
    screen_display.value=user_input.join('');

    //console.log(user_input) used to print in console
   
}

function calc_result(){
    //This is for sqrt
    if ( user_input.includes(op[4]) && !user_input.includes(op[6])){
        alert("Make sure to close the square_root function with )")
    }
    //This is for sin.cos.tan
    if ( (user_input.includes(op[5]) && !user_input.includes(op[6])) || (user_input.includes(op[7]) && !user_input.includes(op[6])) || (user_input.includes(op[8]) && !user_input.includes(op[6]))){
        alert("Make sure to close the function with )")
    }
    //This is for an open (  without proper closure
    if ( (user_input.includes(op[9]) && !user_input.includes(op[6]))){
        alert("Make sure to close the function with )")
    }
      
    if((user_input[user_input.length-1]==op[0]) || (user_input[user_input.length-1]==op[1]) || (user_input[user_input.length-1]==op[2]) || (user_input[user_input.length-1]==op[3]) || (user_input[user_input.length-1]==op[4])|| (user_input[user_input.length-1]==op[5]) ){
        user_input.pop();
    }
    //To ensure that the last button pressed is not an operation value
    let answer= user_input.toString();
        answer=answer.replaceAll(",","");
    let result=0;
        result=math.evaluate(answer);

    screen_display.value=result.toString()
    //console.log(result) used to print in console

    //Added the clear function since the stored value remained after solving
    while(user_input.length>0){
        user_input.pop();
    }
}
function clear_result(){
    while(user_input.length>0){
        user_input.pop();
    }
    screen_display.value=''
    //console.log(user_input.length) used to print in console
}






 





