class convertJSON {
    constructor(object) {
        this.object1 = object;
    }

    toJSON() {
        var output = JSON.stringify(this.object1);
        var jsonObject = JSON.parse(output);
        return jsonObject;
    }

    toObject(){
        if(this.object1.hasOwnProperty("_titel")) {
            console.log("Object is a project");
            let project = new Project(
                this.object1._titel,
                this.object1._start,
                this.object1._ende,
                this.object1._kurzbeschreibung,
                this.object1._langbeschreibung,
                this.object1._logo,
                this.object1._projektleiter,
                this.object1._zielliste,
                this.object1.id
            );
            return project;
        }
        else if(this.object1.hasOwnProperty("_benutzername")){
            console.log("Object is a User");
            let user = new User(
                this.object1._benutzername,
                this.object1._emailadresse,
                this.object1._passwort,
                this.object1._profilbild,
                this.object1._kurzbeschreibung,
                this.object1._langbeschreibung,
                this.object1._zielliste,
                this.object1.id
            )
            return user;
        }
        else if(this.object1.hasOwnProperty("_user")){
            let comment = new Comments(
                this.object1._id,
                this.object1._kommentar,
                this.object1._bewertung,
                this.object1._user
            );
            console.log(comment);
            return comment;
        }
        else{
            console.log("Something went wrong converting. Objekt: " + this.object1);
        }
    }
}

let project_list =[];

async function f(){
    let i = 0;

    if(performance.navigation.type === 1){
        /*
        Da wir die Items als Strings im Storage ablegen müssen, muss der Json String erst nochmal zum Json Objekt werden
        und kann dann zurück zum richtigen Objekt-Typ konvertiert werden
        */
        json1 = JSON.parse(localStorage.getItem("user1"));
        fillArray();
        console.log("Load from storage");

    } else {
        await fetch("data/project0.json").then(
            function(response) {
                console.log("Get response as json-Promise");
                return response.json();
            }
        ).then(
            function(jsonData) {
                let p = new convertJSON(jsonData).toJSON();
                localStorage.setItem(("project" + i), JSON.stringify(p));
                i++;
            }
        ).catch(function(err) {
            console.log("Opps, Something went wrong!", err);
        });

        await fetch("data/project1.json").then(
            function(response) {
                console.log("Get response as json-Promise");
                return response.json();
            }
        ).then(
            function(jsonData) {
                let p = new convertJSON(jsonData).toJSON();
                localStorage.setItem(("project" + i), JSON.stringify(p));
                i++;
            }
        ).catch(function(err) {
            console.log("Opps, Something went wrong!", err);
        });

        await fetch("data/project2.json").then(
            function(response) {
                console.log("Get response as json-Promise");
                return response.json();
            }
        ).then(
            function(jsonData) {
                let p = new convertJSON(jsonData).toJSON();
                localStorage.setItem(("project" + i), JSON.stringify(p));
                i++;
            }
        ).catch(function(err) {
            console.log("Opps, Something went wrong!", err);
        });

        await fetch("data/project3.json").then(
            function(response) {
                console.log("Get response as json-Promise");
                return response.json();
            }
        ).then(
            function(jsonData) {
                let p = new convertJSON(jsonData).toJSON();
                localStorage.setItem(("project" + i), JSON.stringify(p));
                i++;
            }
        ).catch(function(err) {
            console.log("Opps, Something went wrong!", err);
        });

        await fetch("data/user1.json").then(
            function(response) {
                console.log("Get response as json-Promise");
                return response.json();
            }
        ).then(
            function(jsonData) {
                let p = new convertJSON(jsonData).toJSON();
                localStorage.setItem(("user1"), JSON.stringify(p));
            }
        ).catch(function(err) {
            console.log("Opps, Something went wrong!", err);
        });
        fillArray();
        console.log("Save to storage");
        i=0;
    }
}


function fillArray() {
    console.log("Fill array");
    for (let j = 0; j < localStorage.length; j++){
        if (localStorage.getItem("project" +j)) {
            project_list[j] = new convertJSON(JSON.parse(localStorage.getItem("project" +j))).toObject();
        }
    }
    console.log(project_list);
}