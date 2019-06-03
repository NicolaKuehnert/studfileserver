function save() {
    let logo = document.getElementById("logo").value;
    let title= document.getElementById("title").value;
    let leader= document.getElementById("leader").value;
    let short_desc= document.getElementById("kurz").value;
    let long_desc=document.getElementById("lang").value;
    let target=document.getElementById("ziel");
    let target2=[target.options[target.selectedIndex].text];
    let start=document.getElementById("start").value;
    let end=document.getElementById("end").value;
    let id=0;
    for(let i=0;i<localStorage.length;i++){
        if(localStorage.getItem("project"+i)){
            id++;
        }
    }

    let article = new Project(
        title,
        start,
        end,
        short_desc,
        long_desc,
        logo,
        leader,
        target2,
        id
    );

    let json = new convertJSON(article).toJSON();

    localStorage.setItem(("project"+id), JSON.stringify(json));
    project_list.push(article);


    window.location.replace(("Projekt1.html?_id="+id));
}