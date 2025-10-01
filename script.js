// Ajax
// Lesson 4


// Element's
let load_btn = document.getElementById("load");
let xml_table = document.getElementById("xml_table");


// Function's
function loadDocument() {
    let xhr = new XMLHttpRequest;
    
    xhr.open("GET","./cd-collection.xml",true);
    xhr.onload = () => {loadXML(xhr)};

    xhr.send();
};

function loadXML(xml) {
    const xmlDoc = xml.responseXML;
    const cd = xmlDoc.getElementsByTagName("CD");
    
    let table = "<tr> <th>Artist</th><th>Title</th> </tr>";
    for (let i = 0; i < cd.length; i++) {
        table += "<tr><td>"+
        cd[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue+
        "</td>"+"<td>"+
        cd[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue+
        "</td></tr>";
    };

    xml_table.innerHTML = table;
};


// Event's
load_btn.addEventListener("click",loadDocument);