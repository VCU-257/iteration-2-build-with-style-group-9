# Student Name: Naimul Naim

## 1. My Assigned Work

For Iteration 2, I worked on the **Event List page** of the campus events application.
My main responsibility was to take the basic “ugly build” from Iteration 1 and improve it into a more structured and styled interface using Bootstrap.

Specifically, I:

* Built and styled the event list layout using Bootstrap components
* Designed event cards to display key information such as title, description, date, and location
* Added additional attributes including **distance, event size, and cost** for each event
* Implemented a filter system that allows users to filter events based on:

  * distance
  * size
  * cost
  * keyword search
* Added interactive features like a **save/bookmark button** for events
* Improved overall layout, spacing, and responsiveness for a mobile-first design

---

## 2. Bootstrap Implementation

I used Bootstrap 5 along with a Bootswatch theme (Lumen) to enhance the UI while keeping consistency with the framework.

**Components Used:**

* Navbar
* Cards (for event display)
* Buttons
* Forms (filter inputs)
* Dropdowns
* Alerts
* Grid system (responsive layout)

I followed the structure from the GA7 component mapping and ensured that all elements were implemented using Bootstrap classes rather than custom HTML structures.

---

## 3. Technical Challenges & Solutions

One of the main challenges was implementing the **filter functionality** in a way that works with multiple conditions at once.

To solve this:

* I stored event data (distance, size, cost, category) using HTML `data-*` attributes
* Used JavaScript to dynamically read and compare values
* Combined multiple conditions (keyword, distance, size, cost) to filter visible events
* Handled edge cases like empty results by showing a "No events found" message

Another challenge was ensuring that the layout stayed clean and responsive across different screen sizes, which I solved using Bootstrap’s grid and spacing utilities.

---

## 4. AI / LLM Usage

I primarily wrote and structured the code myself based on the project requirements and previous iteration.

I used AI tools occasionally to:

* clarify specific Bootstrap usage
* debug small JavaScript issues
* improve structure and organization of certain parts

I made sure to understand all generated suggestions and modified them as needed to fit my implementation.

---

## 5. Live Site Link

Live URL: [Insert GitHub Pages Link Here]
