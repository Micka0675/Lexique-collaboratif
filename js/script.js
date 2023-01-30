// var startResearch = document.getElementById('startResearch');
var def = document.getElementsByClassName('definition');
var defBloc = document.getElementsByClassName('tabline');
var main = document.getElementById('main');
var succes = false;
var definition = [];
// startResearch.addEventListener('click', research);
document.addEventListener('click',checkElement);
function checkElement(e){
    if(e.target && e.target.id == "startResearch" && document.getElementById('searchBar').value != undefined && document.getElementById('searchBar').value != "")
    {
        console.log(document.getElementById('searchBar').value);
        research();
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
}

function research(){
    var searchBarValue = document.getElementById('searchBar').value.toUpperCase();
    document.getElementById('searchBar').value = "";
    for (i=0;i<def.length;i++)
    {
        definition.push(document.getElementsByClassName('definition')[i].innerHTML.toUpperCase());
        var compare = searchBarValue.localeCompare(definition[i]);
        // console.log(searchBarValue,definition[i],compare);
        if(compare == 0)
        {
            succes = true;
            main.innerHTML += '<div class="boxValid" id="boxValid"><input class="valid-def" type="button" value="OK" id="ok"></div>';
            document.getElementById('boxSearch').style.visibility = "hidden";
        }
        else
        {
            
           defBloc[i].style.display = 'none';
        }
        
        
    }
    if(succes === false)
    {
        main.innerHTML += '<div class="boxValid" id="boxValid"><p>Désolé, la recherche n\'a retourné aucun resultat. Veuillez verifier que le mot clé est bien renseigné.</p><input class="valid-def" type="button" value="OK" id="ok"></div>';
        document.getElementById('boxSearch').style.visibility = "hidden";
    }
};

function resetDefs(){
    for (i=0;i<def.length;i++)
    {
        var boxValid = document.getElementById('boxValid');
        boxValid.style.display ='none';
        defBloc[i].style.display = 'flex';
        succes = false;
        document.getElementById('boxSearch').style.visibility = "visible";
    }
};