"use strict";



/* 
<div id="quiz"></div>
*/
var div_all = document.createElement("div"); 
var id_quiz = document.createAttribute("id").value = "quiz";
div_all.setAttributNode(id_quiz)



/*
 <div id="quiz">
 	<div id="question">Spurning 1</div>
 	<div id="answers"></div>
 </div
*/ 
var div_quest = document.createElement("div");
var id_quest = document.createAttribute("id").value = "question";
var quest_text = document.createTextNode("Spurning 1")
div_quest.setAttributNode(id_quest);
div_quest.appendChild(quest_text);

var div_answers = document.createElement("div");
var id_answers = document.createAttribute("id").value = "answers";
div_answers.setAttributNode(id_answers);

div_all.appendChild(div_quest);
div_all.appendChild(div_answers);
