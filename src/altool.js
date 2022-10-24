
var iteration = 0

fetch("./static/data.json")
    .then(function(response){
        return response.json();
    })
    .then(function(questions){
        getQuestions(questions, 0, "block")
        let i = 1;
        for(i; i <= questions.length; i++){
            getQuestions(questions, i, "none")
        }

    });


function getQuestions(questions, iteration, disp_opt){
    let placeholder = document.querySelector("#data-output");
    let out = "";
    var iterator = questions[iteration].id;
    var answer1 = questions[iteration].answer_options.yes
    var answer2 = questions[iteration].answer_options.no
    var nextIterator = parseInt(iteration) + 2;
    out += `
        <tbody class="questions" id="question_no_${iterator}" style="display: ${disp_opt}">
             <tr>
              <td colspan=4>${questions[iteration].maintext}</td>
              <td>al</td>
             </tr>
             <tr>
              <td colspan=3>${questions[iteration].line0}</td>
              <td rowspan=3 >
                <select name="options" id="answer_selector_${iterator}" onchange="getAnswer(${iterator}, '${answer1}', '${answer2}', this.value); changeDisplay('question_no_${nextIterator}', this.value)">
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
         </tbody>
      `;
    placeholder.innerHTML += out;
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

function changeDisplay(fieldname, picked_val){
    if(picked_val === "False"){
        console.log("FieldName")
        console.log(fieldname)
        var x = document.getElementById(fieldname);
        if (x.style.display === "none") {
            x.style.display = "block";
        }
        /*else {
            x.style.display = "none";
        }*/
    }

}


