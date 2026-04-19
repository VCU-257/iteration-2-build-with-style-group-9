# Student Name: Naimul Naim

## 1. My Assigned Work

For Iteration 2, I worked on the **Event List page** of the campus events application. My main responsibility was to take the basic “ugly build” from Iteration 1 and convert it into a styled and interactive interface using Bootstrap.

I implemented the following:

- Event list layout using Bootstrap cards
- Navbar and page structure consistent with the app design
- Event metadata (date, time, location, category)
- Bookmark (save event) functionality
- Filter dropdown with sliders and keyword input
- Responsive layout for both mobile and desktop

I also ensured that the page structure followed the mapping created in GA7.

---

## 2. Bootstrap Implementation

I used **Bootstrap 5 with the Bootswatch Lumen theme** to style the page.

Components used:
- Navbar
- Cards
- Buttons
- Dropdowns
- Forms (range sliders and input fields)
- Alerts
- Grid system

I mostly followed the plan from Table 1 and mapped each UI component to its appropriate Bootstrap component.

I also used:
- Bootstrap Icons for UI elements
- Source Sans 3 font for consistent typography

I made small customizations using CSS for:
- spacing
- card hover effects
- image sizing
- layout improvements

---

## 3. Technical Challenges & Solutions

One of the main challenges was managing the layout of event cards, especially handling image sizes and avoiding too much empty space. I solved this by using `object-fit: cover` and setting a fixed height for images.

Another challenge was implementing the filter functionality. I used JavaScript to:
- read user input
- compare it with event data
- dynamically show/hide matching events

I also had to make sure the page remained responsive while adding new features.

---

## 4. AI / LLM Usage

I used AI tools (like ChatGPT) mainly for:
- clarifying how certain Bootstrap components work
- debugging JavaScript issues
- improving small UI details like hover effects and layout fixes

However, most of the implementation, structure, and logic were written and understood by me. I reviewed and modified any generated code to make sure I fully understood how it worked before using it.

---

