var startResearch = document.getElementById('startResearch');
var def = document.getElementsByClassName('definition');
var defBloc = document.getElementsByClassName('tabline');

var definition = [];
console.log(defBloc);
startResearch.addEventListener('click', research);


function research(){
    var searchBarValue = document.getElementById('searchBar').value.toUpperCase();
    console.log(searchBarValue);
    for (i=0;i<def.length;i++)
    {
        definition.push(document.getElementsByClassName('definition')[i].innerHTML.toUpperCase());
        var compare = searchBarValue.localeCompare(definition[i]);
        // console.log(searchBarValue,definition[i],compare);
        if(compare == 0)
        {

            console.log("similar!");
        }
        else
        {
            
           defBloc[i].style.display = 'none';
        }
        
    }
};