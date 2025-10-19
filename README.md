# Pokemon-Team-Manager

## **1. Key Features / Functionaliteiten**

1. **Teams managen**

   * Teams aanmaken en verwijderen.
   * Teams bekijken (lijst of detailweergave).

2. **Pokemon beheren**

   * Pokemon toevoegen/verwijderen aan teams.
   * Favorieten Pokemon bijhouden (voor snelle selectie).

3. **Team building**

   * Teams maken van geselecteerde Pokemon (bijv. drag & drop of selecteren).
   * Filteren / zoeken in je Pokemon-lijst of favorieten.

4. **Herbruikbare componenten**

   * Pokemon Card (naam, type, afbeelding).
   * Team Card / Team Item (teamnaam, overzicht van Pokemon).
   * Buttons, Modals voor toevoegen/verwijderen.
   * Navbar / Header voor navigatie tussen pagina’s.

---

### **2. Aantal Pagina’s**

1. **Dashboard / Home**

   * Overzicht van al je teams + favorieten.

2. **Team Detail / Builder**

   * Lijst van Pokemon in een specifiek team + optie om te beheren.

3. **Pokemon Library**

   * Alle Pokemon ophalen uit de PokéAPI + zoeken / filteren.

4. **Favorieten**

   * Overzicht van favorieten Pokemon + directe optie om teams te maken.

5. *(Optioneel)* **Settings / Profile**

   * Instellingen of gebruikersvoorkeuren (niet essentieel in MVP).

**Conclusie:** **4-5 pagina’s** is genoeg voor een eerste versie.

---

### **4. Wireframe / Structuur Suggestie**

* **Navbar / Sidebar** → links: Dashboard, Pokemon Library, Favorieten.
* **Dashboard** → lijst van teams, “+ Team” knop.
* **Team Detail** → teamnaam, Pokemon lijst, “+ Pokemon” knop, “Verwijder Team”.
* **Pokemon Library** → filter / zoekfunctie, Pokemon Cards met “Toevoegen aan team” of “Favoriet”.
* **Favorieten** → lijst van favoriete Pokemon, knop “Maak team met favorieten”.

---

Ah, perfect. Jij wilt het **feature-based / module-based** opzetten in plaats van “alles in één map”, zodat je app schaalbaar blijft en makkelijk te onderhouden is. Laten we dit stap voor stap bekijken voor jouw **Pokemon-team manager**.

---

## **1. Wat betekent feature-based?**

In plaats van mappen te maken op type (`components`, `pages`, `services`) maak je mappen per **feature** of “functionaliteit”.
Elke feature bevat:

* Componenten die alleen voor die feature zijn.
* API calls of services die specifiek zijn.
* State / context specifiek voor die feature (optioneel).
* Page(s) die bij die feature horen.

---

## **2. Voor jouw app: features**

**Features kunnen bijvoorbeeld zijn:**

1. **Teams**

   * Pagina: `Dashboard` + `TeamDetail`
   * Componenten: `TeamCard`, `TeamForm`
   * Services: team CRUD
   * Context / state: lijst van teams

2. **PokemonLibrary**

   * Pagina: `PokemonLibrary`
   * Componenten: `PokemonCard`, `PokemonFilter`
   * Services: fetch PokéAPI
   * State: alle Pokemon, zoek/filter status

3. **Favorites**

   * Pagina: `Favorites`
   * Componenten: `FavoritePokemonList`, `FavoriteToggle`
   * State: lijst van favorieten

4. *(Optioneel)* Shared

   * Globale herbruikbare UI componenten: `Button`, `Modal`, `Navbar`, `Input`
   * Context: globale thema’s of user settings
