/*Aufgabe 2a: Abstrakte Klasse */
class Zuordnung{
    get user() {
        return this._user;
    }

    set user(value) {
        this._user = value;
    }

    get sprache() {
        return this._sprache;
    }

    set sprache(value) {
        this._sprache = value;
    }

    get projektname() {
        return this._projektname;
    }

    set projektname(value) {
        this._projektname = value;
    }
    constructor(user, sprache, projektname){

        this._projektname = projektname;
        this._user = user;
        this._sprache = sprache;
    }
}

zuordnung1 = new Zuordnung("user1", "deutsch", "Projekt42");
zuordnung2 = new Zuordnung("user2", "englisch", "science project 0815");

/* Aufgabe 2b: Projekt-Klasse */
class Project{
    get titel() {
        return this._titel;
    }

    set titel(value) {
        this._titel = value;
    }

    get start() {
        return this._start;
    }

    set start(value) {
        this._start = value;
    }

    get ende() {
        return this._ende;
    }

    set ende(value) {
        this._ende = value;
    }

    get kurzbeschreibung() {
        return this._kurzbeschreibung;
    }

    set kurzbeschreibung(value) {
        this._kurzbeschreibung = value;
    }

    get langbeschreibung() {
        return this._langbeschreibung;
    }

    set langbeschreibung(value) {
        this._langbeschreibung = value;
    }

    get logo() {
        return this._logo;
    }

    set logo(value) {
        this._logo = value;
    }

    get projektleiter() {
        return this._projektleiter;
    }

    set projektleiter(value) {
        this._projektleiter = value;
    }

    get zielliste() {
        return this._zielliste;
    }

    set zielliste(value) {
        this._zielliste = value;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    constructor(titel, start, ende, kurzbeschreibung, langbeschreibung, logo, projektleiter, zielliste, id){
        this._titel = titel;
        this._start = start;
        this._ende = ende;
        this._kurzbeschreibung = kurzbeschreibung;
        this._langbeschreibung = langbeschreibung;
        this._logo = logo;
        this._projektleiter = projektleiter;
        this._zielliste = zielliste;
        this._id = id;
    }
}
Projekt1 = new Project(
    "Projekt1",
    "24.8.2020",
    "23.4.2021",
    "Tolles Projekt",
    "Tolles Projekt mit Kaffe und Kuchen",
    "www.fh-bielefeld.de/kaffeeundkuchen/projekt.jpg",
    "Mustermann",
    "Forschung und Entwicklung",
    0);

Projekt2 = new Project(
    "Projekt2",
    "1.4.2020",
    "24.12.2022",
    "Erforschung paranormaler Lichter",
    "Erforschung paranormaler Lichter in Bielefeld",
    "www.fh-bielefeld.de/eplib/ufo.jpg",
    "Scully", "Erforschung von Mysterien",
    1);

Projekt3 = new Project(
    "Projekt3",
    "7.2.2019",
    "18.4.2021",
    "Verteiltes Echtzeit-Java",
    "Verteiltes Echtzeit-Java in virtuellen Maschinen",
    "www.fh-bielefeld.de/vej/vej.jpg",
    "FeFe",
    "Erforschung von Echtzeitumgebungen",
    2);

class User{
    get benutzername() {
        return this._benutzername;
    }

    set benutzername(value) {
        this._benutzername = value;
    }

    get emailadresse() {
        return this._emailadresse;
    }

    set emailadresse(value) {
        this._emailadresse = value;
    }

    get passwort() {
        return this._passwort;
    }

    set passwort(value) {
        this._passwort = value;
    }

    get profilbild() {
        return this._profilbild;
    }

    set profilbild(value) {
        this._profilbild = value;
    }

    get kurzbeschreibung() {
        return this._kurzbeschreibung;
    }

    set kurzbeschreibung(value) {
        this._kurzbeschreibung = value;
    }

    get langbeschreibung() {
        return this._langbeschreibung;
    }

    set langbeschreibung(value) {
        this._langbeschreibung = value;
    }

    get zielliste() {
        return this._zielliste;
    }

    set zielliste(value) {
        this._zielliste = value;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }
    constructor(benutzername, emailadresse, passwort, profilbild, kurzbeschreibung, langbeschreibung, zielliste, id){

        this._benutzername = benutzername;
        this._emailadresse = emailadresse;
        this._passwort = passwort;
        this._profilbild = profilbild;
        this._kurzbeschreibung = kurzbeschreibung;
        this._langbeschreibung = langbeschreibung;
        this._zielliste = zielliste;
        this._id = id;
    }
}

User1 = new User(
    "Peter",
    "admin@peter.de",
    "7c03mc8g4mv8dm",
    "www.fh-bielefeld.de/peter.jpg",
    "Peter Mustermann",
    "wissenschaftlicher Mitarbeiter im Labor für Echtzeitsysteme",
    "Forschung",
    "1337"
);

class Comments{
    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get emailadresse() {
        return this._emailadresse;
    }

    set emailadresse(value) {
        this._emailadresse = value;
    }

    get kommentar() {
        return this._kommentar;
    }

    set kommentar(value) {
        this._kommentar = value;
    }

    get bewertung() {
        return this._bewertung;
    }

    set bewertung(value) {
        this._bewertung = value;
    }

    get user() {
        return this._user;
    }

    set user(value) {
        this._user = value;
    }
    constructor(id, kommentar, bewertung, user){
        this._id = id;
        this._kommentar = kommentar;
        this._bewertung = bewertung;
        this._user = user;
    }
}