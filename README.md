# Pokemon Team Manager

## **1. Key Features**

1. **Manage Teams**
   * Create and delete teams.
   * View teams (list or detail view).

2. **Manage Pokemon**
   * Add/remove Pokemon to/from teams.
   * Track favorite Pokemon for quick selection.

3. **Team Building**
   * Build teams from selected Pokemon (e.g., drag & drop or selection).
   * Filter/search your Pokemon list or favorites.

4. **Reusable Components**
   * Pokemon Card (name, type, image).
   * Team Card / Team Item (team name, Pokemon overview).
   * Buttons, Modals for adding/removing.
   * Navbar / Header for page navigation.

---

### **2. Number of Pages**

1. **Dashboard / Home**
   * Overview of all your teams + favorites.

2. **Team Detail / Builder**
   * List of Pokemon in a specific team + management options.

3. **Pokemon Library**
   * Fetch all Pokemon from the PokéAPI + search/filter.

4. **Favorites**
   * Overview of favorite Pokemon + quick option to create teams.

5. *(Optional)* **Settings / Profile**
   * User preferences or settings (not essential for MVP).

**Conclusion:** **4-5 pages** are enough for a first version.

---

### **3. Wireframe / Structure Suggestion**

* **Navbar / Sidebar** → left: Dashboard, Pokemon Library, Favorites.
* **Dashboard** → list of teams, “+ Team” button.
* **Team Detail** → team name, Pokemon list, “+ Pokemon” button, “Delete Team”.
* **Pokemon Library** → filter/search, Pokemon Cards with “Add to team” or “Favorite”.
* **Favorites** → list of favorite Pokemon, button “Create team from favorites”.

---

You want to set up your app **feature-based / module-based** instead of “everything in one folder”, so your app stays scalable and easy to maintain. Here’s how you can approach this for your **Pokemon Team Manager**.

---

## **1. What does feature-based mean?**

Instead of creating folders by type (`components`, `pages`, `services`), you create folders per **feature** or functionality.
Each feature contains:

* Components specific to that feature.
* API calls or services specific to that feature.
* State/context specific to that feature (optional).
* Page(s) belonging to that feature.

---

## **2. For your app: features**

**Example features:**

1. **Teams**
   * Pages: `Dashboard` + `TeamDetail`
   * Components: `TeamCard`, `TeamForm`
   * Services: team CRUD
   * Context/state: list of teams

2. **PokemonLibrary**
   * Page: `PokemonLibrary`
   * Components: `PokemonCard`, `PokemonFilter`
   * Services: fetch PokéAPI
   * State: all Pokemon, search/filter status

3. **Favorites**
   * Page: `Favorites`
   * Components: `FavoritePokemonList`, `FavoriteToggle`
   * State: list of favorites

4. *(Optional)* Shared
   * Global reusable UI components: `Button`, `Modal`, `Navbar`, `Input`
   * Context: global themes or user settings


## **3. Technology: Zustand for State Management**

For this app, I use (**Zustand**)[https://zustand-demo.pmnd.rs/] as the state management solution instead of local storage.

**Why Zustand?**
- Zustand provides a centralized, reactive way to manage data (such as teams, favorites, and Pokemon lists).
- Unlike local storage, Zustand is directly connected to the UI: changes are instantly visible without manual synchronization.
- Zustand is scalable and suitable for larger apps, while local storage is mainly useful for simple, temporary data.
- Data remains structured and easy to maintain, which is important for future expansions (like multi-device sync or user profiles).

**Purpose of this choice:**
The goal is to build a modern, scalable, and maintainable app where state management is simple and reliable. Zustand makes it possible to quickly expand features and keep the user experience smooth.