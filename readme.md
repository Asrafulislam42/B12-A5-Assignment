1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll

   getElementById => Selects an element by its id, A single element object,Only one element per id is allowed.

   getElementsByClassName => Selects elements by class name, An HTMLCollection live, Multiple elements can share the same class

   querySelector => Selects the first element matching a CSS selector, A single element object, Supports any valid CSS selector.

   querySelectorAll => Selects all elements matching a CSS selector, A NodeList static, You can loop through it like an array.

2. How do you **create and insert a new element into the DOM**?
   Answer: First, create the element, then set its content, and finally insert it into the DOM.
   Example:
   let li = document.createElement("li");
   li.textContent = "New Item";
   document.getElementById("myList").appendChild(li);

3. What is **Event Bubbling** and how does it work?
   Answer: Event starts at the target element and bubbles up through its ancestors.When an event occurs on a child element, it bubbles up to its parent elements.

4. What is **Event Delegation** in JavaScript? Why is it useful?

   Attach a single event listener to a parent element to handle events from its child elements.Useful for dynamically added elements and better performance. Works for dynamically added elements.Reduces the number of event listeners and better performance.

5. Difference between preventDefault() and stopPropagation()

   preventDefault() => Prevents the default browser behavior for an event, Stops a link <a> from navigating, stops form submission, etc.

   stopPropagation() => Stops the event from bubbling or capturing further, Stops a click event from triggering parent elements’ handlers
