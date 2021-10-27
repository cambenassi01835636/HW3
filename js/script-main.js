/*
    File: script-main.js
    GUI Assignment: JS Dynamic Multiplication Table
    Cameron Benassi, UMass Lowell Computer Science, cameron_benassi@student.uml.edu 
    Copyright (c) 2021 by Cameron.  All rights reserved.  May be freely copied or excerpted 
    for educational purposes with credit to the author. updated by CB on October 26, 2021
*/

function generate (){

    //#####Creating variables, checking if numbers are valid#####

    //getting values from form
    var firstLow = document.getElementById("1stLow").value;
    var firstHigh = document.getElementById("1stHigh").value;
    var secondLow = document.getElementById("2ndLow").value;
    var secondHigh = document.getElementById("2ndHigh").value;

    //clearing form values
    document.getElementById("results").innerHTML = "";
    document.getElementById("1stLow").value = "";
    document.getElementById("1stHigh").value = "";
    document.getElementById("2ndLow").value = "";
    document.getElementById("2ndHigh").value = "";

    //running tests
    if(firstLow < -50 || firstHigh > 50 || secondLow < -50 || secondHigh > 50){
        addElement("One of your numbers is invalid. Please choose a number within -50 and 50.", "tr");
        return;
    }
    if(firstLow > firstHigh || secondLow > secondHigh){
        addElement("Check the order of your numbers.", "tr");
        return;
    }

    //#####creating table#####
    
    //Adding blank element 
    addElement("", "th");

    //populating top header, starts calculations on new row
    for(i = firstLow; i <= firstHigh; i++){
        addElement(i, "th");
    }
    addElement("", "tr");

    //for loop to populate remainder of table, finishes on new row
    for(i = secondLow; i <= secondHigh; i++){  
        addElement(i, "th");

        for(j = firstLow; j <= firstHigh; j++){
            addElement(i * j, "td");
        }
        addElement("", "tr");
    }
}

//function to create table element
function addElement(content, type){
    var node = document.createElement(type);
    var textNode = document.createTextNode(content);
    node.appendChild(textNode);
    document.getElementById("results").appendChild(node);
}

