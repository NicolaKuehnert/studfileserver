let is_logged_in = localStorage.getItem("is_logged_in");

/*
Why is document.body here null?
 */
function check_login() {
    console.log("Login");
    if (is_logged_in === "1"){
        console.log("off");
        let in_button = document.getElementById("login");
        let out_button = document.getElementById("logout");
        in_button.style.display = "none";
        out_button.style.display = "block";
        return 1;
    }  else if (is_logged_in === "0") {
        console.log("on");
        let in_button = document.getElementById("login");
        let out_button = document.getElementById("logout");
        in_button.style.display = "block";
        out_button.style.display = "none";
        return 0;
    }
}

function login() {
    let username = document.getElementsByName("username")[0].value;
    is_logged_in = "1";
    localStorage.setItem("is_logged_in", is_logged_in);
    localStorage.setItem("username", username);
    window.location.replace(window.location.href);
}

function logout(){
    is_logged_in = "0";
    localStorage.setItem("is_logged_in", is_logged_in);
    localStorage.removeItem("username");
    window.location.replace(window.location.href);

}