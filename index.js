document.addEventListener("DOMContentLoaded", function(event) { 
    var priceData = "$99.00";
    var productID = "bu77Ch33ks"
    var glassBlockHeight = 10;
    var glassBlockWidth = 7;

    var premierColors = ["Pick a color", "Brick Red", "Almond", "Bronze", "Hartford Green", "Tan", "Stone Grey", "White", "Black"];
    var builderColors = ["Pick a color", "Grey", "Almond", "White"];

    var premierPatterns = ["Pick a pattern", "Wave", "Diamond", "Cross-rib", "Pearl", "Clarity"];
    var builderPatterns = ["Pick a pattern", "Wave", "Ice", "Frost"];
    

    populateHeightDropdown();
    
    document.getElementById("inputButton").addEventListener("click", function(){
        var height = document.getElementById("gridHeight").value;
        var width = document.getElementById("gridWidth").value;
        console.log(height, width);

        container = document.getElementById("container");
        container.innerHTML = "";

        for(var i=0; i<height; i++) {
            for(var j=0; j<width; j++) {
                container.innerHTML += `<div style="width: 50px; height: 50px; float: left; margin-right: 3px;
                                                    background-image: url('bot.png');
                                                    background-size: contain;" class='squareDiv'>
                                        </div>`
            }
            container.innerHTML += "<br><br><br>"
        }
    });

    document.getElementById("glassBlockTypePremier").addEventListener("click", function(){
        document.getElementById("colorDropdown").innerHTML = "";
        document.getElementById("patternDropdown").innerHTML = "";

        for(var i=0; i<premierColors.length; i++) {
            document.getElementById("colorDropdown").innerHTML+=`<option value="${premierColors[i]}">${premierColors[i]}</option>`
        }

        for(var i=0; i<premierPatterns.length; i++) {
            document.getElementById("patternDropdown").innerHTML+=`<option value="${premierPatterns[i]}">${premierPatterns[i]}</option>`
        }
        
    });

    document.getElementById("glassBlockTypeBuilder").addEventListener("click", function(){
        document.getElementById("colorDropdown").innerHTML = "";
        document.getElementById("colorDropdown").innerHTML = "";

        for(var i=0; i<builderColors.length; i++) {
            document.getElementById("colorDropdown").innerHTML+=`<option value="${builderColors[i]}">${builderColors[i]}</option>`
        }

        for(var i=0; i<builderPatterns.length; i++) {
            document.getElementById("patternDropdown").innerHTML+=`<option value="${builderPatterns[i]}">${builderPatterns[i]}</option>`
        }
    });


    checkColor = () => {
        document.getElementById("productPrice").innerHTML = priceData;
        document.getElementById("productID").innerHTML = productID;
    }

    checkHeight = () => {

        for(var i=0; i<glassBlockWidth; i++) {
            document.getElementById("gridWith").innerHTML += `<option value='${i}'>${i}</option>`;
        }
        
        
    }

    determineBlockType = () => {

    }

    function populateHeightDropdown() {
        var dropDownHolder = "";
        for(var i=1; i<=glassBlockHeight; i++) {
            dropDownHolder += `<option value="${i}">${i}</option>`;
        }
        document.getElementById("gridHeight").innerHTML = dropDownHolder;
    }
});