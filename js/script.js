// var startResearch = document.getElementById('startResearch');
var def = document.getElementsByClassName('definition');
var defBloc = document.getElementsByClassName('tabline');
var main = document.getElementById('main');
var succes = false;
var definition = [];
var dynamElem;
// startResearch.addEventListener('click', research);

document.addEventListener('click',checkElement);
function checkElement(e){
    if(e.target && e.target.id == "startResearch" && document.getElementById('searchBar').value != undefined && document.getElementById('searchBar').value != "")
    {
        console.log(document.getElementById('searchBar').value);
        research();
        document.getElementById('searchBar').value = "";
    }
    if(e.target && e.target.id == "ok")
    {
        resetDefs();
    }
    if(e.target && e.target.id == "searchBar")
    {
        if(e.target.value != "")
        {
            e.target.value = "";
        }
    }
    // if(e.target && e.target.id == "boxValid")
    // {
    //     document.getElementById('boxValid').style.display = 'none';
    // }
}

function research(){
    var searchBarValue = document.getElementById('searchBar').value.toUpperCase();
    document.getElementById('searchBar').value = "";
    for (i=0;i<def.length;i++)
    {
        definition.push(document.getElementsByClassName('definition')[i].innerHTML.toUpperCase());
        var compare = definition[i].startsWith(searchBarValue);
        // console.log(searchBarValue,definition[i],compare);
        if(compare === true)
        {
            succes = true;
        }
        else
        {
           defBloc[i].style.display = 'none';
        }
        
        
    }
    if(succes === false)
    {
        dynamElem = document.createElement("div");
        dynamElem.id = 'boxValid';
        dynamElem.setAttribute("class","boxValid");
        main.appendChild(dynamElem);
        dynamInput = document.createElement('input');
        dynamElem.appendChild(dynamInput);
        dynamInput.setAttribute("id","ok");
        dynamInput.setAttribute("class","valid-def");
        dynamInput.setAttribute("type","button");
        dynamInput.setAttribute("value","ok");
        dynamP = document.createElement('p');
        dynamElem.appendChild(dynamP);
        dynamP.innerText = "Désolé, la recherche n'a retourné aucun resultat. Veuillez verifier que le mot clé est bien renseigné.";
        // main.innerHTML += '<div class="boxValid" id="boxValid"><p></p><input class="valid-def" type="button" value="OK" id="ok"></div>';
        document.getElementById('boxSearch').style.visibility = "hidden";
    }
    else
    {
        dynamElem = document.createElement("div");
        dynamElem.id = 'boxValid';
        dynamElem.setAttribute("class","boxValid");
        main.appendChild(dynamElem);
        dynamInput = document.createElement('input');
        dynamElem.appendChild(dynamInput);
        dynamInput.setAttribute("id","ok");
        dynamInput.setAttribute("class","valid-def");
        dynamInput.setAttribute("type","button");
        dynamInput.setAttribute("value","ok");
        document.getElementById('boxSearch').style.visibility = "hidden";
    }
};

function resetDefs(){
    dynamElem = document.getElementById('boxValid');
    dynamElem.remove();
    for (i=0;i<def.length;i++)
    { 
        defBloc[i].style.display = 'flex';
    }
    document.getElementById('boxSearch').style.visibility = "visible";
    succes = false;
};