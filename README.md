# TaskBoard WebApp

## Projektidee

Die TaskBoard WebApp ist eine einfache Anwendung zur Verwaltung von Aufgaben.

Die Aufgaben werden auf einem Board organisiert.
Das Board besteht aus drei Spalten:

* To Do
* In Progress
* Done

So kann man leicht sehen, welche Aufgaben noch offen sind, welche gerade bearbeitet werden und welche bereits erledigt wurden.

## Ziel der Anwendung

Das Ziel der Anwendung ist es, Aufgaben übersichtlich zu verwalten.

Der Benutzer soll Aufgaben:

* erstellen
* anzeigen
* bearbeiten
* löschen
* zwischen den Spalten verschieben

Dadurch wird die Arbeit mit Aufgaben einfacher und strukturierter.

## Technologien

Für das Projekt werden folgende Technologien verwendet:

* HTML für die Struktur der Webseite
* CSS für das Design
* JavaScript für die Logik im Frontend
* Node.js und Express für das Backend
* JSON als einfache Datenspeicherung

## Architektur

Das Projekt ist einfach und klar aufgebaut.

Die Fachlogik befindet sich im Application Layer.
Dort wird entschieden, was mit den Aufgaben passiert.

Die technischen Teile sind getrennt davon.
Zum Beispiel:

* HTTP-Routen für die Kommunikation mit dem Frontend
* JSON-Dateien für das Speichern der Aufgaben

Dadurch ist der Code besser organisiert und später leichter zu erweitern.

## Rendering

Die Anwendung nutzt clientseitiges Rendering.

Das bedeutet:
Die Webseite wird im Browser angezeigt und mit JavaScript dynamisch aktualisiert.

Das Frontend fragt die Aufgaben über eine REST-API beim Backend ab.
Danach werden die Aufgaben im Browser auf dem Board angezeigt.

## Projektstruktur

```txt
backend/   Backend, API und Aufgabenlogik
frontend/  Benutzeroberfläche im Browser
docs/      Dokumentation und Diagramme
```

## Kurzbeschreibung

Die TaskBoard WebApp hilft dabei, Aufgaben einfach zu planen und zu organisieren.

Durch die drei Spalten To Do, In Progress und Done sieht der Benutzer sofort, in welchem Zustand sich eine Aufgabe befindet.
