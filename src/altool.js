
var iteration = 0

fetch("./static/data.json")
    .then(function(response){
        return response.json();
    })
    .then(function(questions){

        for(let i in questions){
            getQuestions(questions, i)
        }





    });


function getQuestions(questions, iteration){
    let placeholder = document.querySelector("#data-output");
    let out = "";
    var iterator = questions[iteration].id;
    var answer1 = questions[iteration].answer_options.yes
    var answer2 = questions[iteration].answer_options.no
    out += `
         <col span=5>
         <tr>
          <td colspan=4>${questions[iteration].maintext}</td>
          <td>al</td>
         </tr>
         <tr>
          <td colspan=3>${questions[iteration].line0}</td>
          <td rowspan=3 >
            <select name="options" id="answer_selector_${iterator}" onchange="getAnswer(${iterator}, '${answer1}', '${answer2}', this.value)">
              <option value=""></option>
              <option value="True">Yes</option>
              <option value="False">No</option>
            </select>
          </td>
          <td rowspan=3 id="answer_field_${iterator}">Pick something</td>
         </tr>
         <tr height=19>
          <td colspan=3>${questions[iteration].line1}</td>
         </tr>       
         <tr height=19>
          <td colspan=3>${questions[iteration].line2}</td>
         </tr>
      `;
    placeholder.innerHTML += out;
    console.log(window.iteration)
}


function getAnswer(iterator, answer1, answer2, decision){
    console.log(iterator)
    console.log(answer1)
    console.log(answer2)
    console.log(decision)
    var answer_field_full_name='answer_field_' + iterator;
    if(decision === "True"){
        document.getElementById(answer_field_full_name).innerHTML = answer1;
        window.iteration++
    }
    else if(decision === "False"){
        document.getElementById(answer_field_full_name).innerHTML = answer2;
    }
    else{
        document.getElementById(answer_field_full_name).innerHTML = "Pick something";
    }
}


