# Projektbeschreibung: TaskBoard WebApp

## 1. Projektidee und fachliches Modell

Die TaskBoard WebApp ist eine einfache Anwendung zur Verwaltung von Aufgaben.

Benutzer können neue Aufgaben erstellen und diese auf einem Board organisieren.
Das Board besteht aus drei Spalten:

* To Do
* In Progress
* Done

So sieht man schnell, welche Aufgaben noch offen sind, welche gerade bearbeitet werden und welche bereits erledigt wurden.

Das wichtigste Modell in der Anwendung ist die Aufgabe.

Eine Aufgabe hat folgende Eigenschaften:

* ID
* Titel
* Beschreibung
* Status
* Priorität
* Erstellungsdatum

Der Status zeigt, in welcher Spalte sich die Aufgabe befindet.

## 2. Frontend

Das Frontend wird mit HTML, CSS und JavaScript erstellt.

Es enthält:

* ein Formular zum Erstellen neuer Aufgaben
* ein Board mit drei Spalten
* eine Anzeige aller vorhandenen Aufgaben

Der Benutzer kann über die Oberfläche Aufgaben erstellen, ansehen und zwischen den Spalten verschieben.

## 3. Backend

Das Backend wird mit Node.js und Express umgesetzt.

Es stellt eine REST-API bereit, über die das Frontend mit den Aufgaben arbeiten kann.

Über diese API können Aufgaben:

* geladen
* erstellt
* bearbeitet
* gelöscht
* in einen anderen Status verschoben werden

## 4. Rendering und Architektur

Die Anwendung nutzt clientseitiges Rendering.

Das bedeutet:
Die Webseite wird im Browser angezeigt und mit JavaScript dynamisch aktualisiert.

Das Frontend fragt die Daten beim Backend ab.
Das Backend liefert die Aufgaben als JSON zurück.
Danach werden die Aufgaben im Browser auf dem Board angezeigt.

Die Architektur orientiert sich an einer einfachen hexagonalen Architektur.

Dabei werden Fachlogik und technische Details voneinander getrennt:

* Application Layer: enthält die Fachlogik der Aufgaben
* HTTP Adapter: enthält die Express-Routen für die API
* Persistence Adapter: speichert und liest Aufgaben aus der JSON-Datei

Diese Trennung macht den Code übersichtlicher und später leichter erweiterbar.

## 5. Datenhaltung und Serialisierung

Die Aufgaben werden in einer JSON-Datei gespeichert.

JSON wurde gewählt, weil es für dieses Projekt einfach und gut verständlich ist.
Außerdem kann JavaScript sehr leicht mit JSON arbeiten.

Für ein kleines Projekt ist diese Lösung ausreichend.
Später könnte die JSON-Datei auch durch eine richtige Datenbank ersetzt werden.
