# On importe Flask (le framework web) et les outils dont on a besoin
from flask import Flask, render_template, request, redirect
import sqlite3

# On crée l'application Flask
app = Flask(__name__)

# --- BASE DE DONNÉES ---

# Cette fonction crée la table si elle n'existe pas encore
def init_db():
    # On se connecte au fichier contacts.db (il sera créé automatiquement)
    conn = sqlite3.connect("contacts.db")
    # On crée la table "contacts" avec 3 colonnes : id, nom, telephone
    conn.execute("""
        CREATE TABLE IF NOT EXISTS contacts (
            id        INTEGER PRIMARY KEY AUTOINCREMENT,
            nom       TEXT,
            telephone TEXT
        )
    """)
    # On sauvegarde et on ferme la connexion
    conn.commit()
    conn.close()

# Cette fonction retourne tous les contacts
def get_contacts():
    conn = sqlite3.connect("contacts.db")
    # On récupère toutes les lignes de la table
    contacts = conn.execute("SELECT * FROM contacts").fetchall()
    conn.close()
    return contacts

# Cette fonction ajoute un contact
def add_contact(nom, telephone):
    conn = sqlite3.connect("contacts.db")
    # On insère une nouvelle ligne avec le nom et le téléphone
    conn.execute("INSERT INTO contacts (nom, telephone) VALUES (?, ?)", (nom, telephone))
    conn.commit()
    conn.close()

# Cette fonction supprime un contact par son id
def delete_contact(id):
    conn = sqlite3.connect("contacts.db")
    conn.execute("DELETE FROM contacts WHERE id = ?", (id,))
    conn.commit()
    conn.close()


# --- PAGES WEB ---

# La page principale (quand on va sur http://localhost:5000)
@app.route("/")
def index():
    contacts = get_contacts()  # On récupère tous les contacts
    return render_template("index.html", contacts=contacts)  # On affiche la page

# Quand on soumet le formulaire d'ajout
@app.route("/ajouter", methods=["POST"])
def ajouter():
    nom = request.form["nom"]            # On récupère le nom du formulaire
    telephone = request.form["telephone"] # On récupère le téléphone du formulaire
    add_contact(nom, telephone)           # On ajoute dans la base
    return redirect("/")                  # On retourne à la page principale

# Quand on clique sur "Supprimer"
@app.route("/supprimer/<int:id>")
def supprimer(id):
    delete_contact(id)  # On supprime le contact
    return redirect("/") # On retourne à la page principale


# --- DÉMARRAGE ---

# On initialise la base de données
init_db()

# On lance le serveur (debug=True = messages d'erreur détaillés)
app.run(debug=True)