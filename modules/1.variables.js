 const variables = {
    BODY:document.querySelector('body'),    
    fragment:document.createDocumentFragment(),
    book:[{
      "author": "Douglas Crockford",
      "imageLink": "../../assets/images/good_parts.png",
      "title": "JavaScript: The Good Parts: The Good Parts",
      "price": "30",
      "id": "one",
      "description": "With JavaScript: The Good Parts, you'll discover a beautiful, elegant, lightweight and highly expressive language that lets you create effective code, whether you're managing object libraries or just trying to get Ajax to run fast. If you develop sites or applications for the Web, this book is an absolute must"
    },
      {
        "author": "David Herman",
        "imageLink": "../../assets/images/effective_js.png",
        "title": "Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript",
        "price": '22',
        "id": "two",
        "description": "Effective JavaScript is organized around 68 proven approaches for writing better JavaScript, backed by concrete examples. You’ll learn how to choose the right programming style for each project, manage unanticipated problems, and work more successfully with every facet of JavaScript programming from data structures to concurrency"
      },
      {
        "author": "David Flanagan",
        "imageLink": "../../assets/images/definitive_guide.png",
        "title": "JavaScript: The Definitive Guide",
        "price": '40',
        "id": "three",
        "description": "This Fifth Edition is completely revised and expanded to cover JavaScript as it is used in today's Web 2.0 applications. This book is both an example-driven programmer's guide and a keep-on-your-desk reference, with new chapters that explain everything you need to know to get the most out of JavaScript"
      },
      {
        "author": " Eric Elliott",
        "imageLink": "../../assets/images/js_application.png",
        "title": "Programming JavaScript Applications",
        "price": '19',
        "id": "four",
        "description": "Take advantage of JavaScript’s power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that’s easier—yes, easier—to work with as your code base grows."
      },
      {
        "author": "Addy Osmani",
        "imageLink": "../../assets/images/design_patterns.png",
        "title": "Learning JavaScript Design Patterns",
        "price": '32',
        "id": "five",
        "description": "With Learning JavaScript Design Patterns, you’ll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you."
      },
      {
        "author": "Boris Cherny",
        "imageLink": "../../assets/images/type_script.png",
        "title": "Programming TypeScript",
        "price": '28',
        "id": "six",
        "description": "Any programmer working with a dynamically typed language will tell you how hard it is to scale to more lines of code and more engineers. That’s why Facebook, Google, and Microsoft invented gradual static type layers for their dynamically typed JavaScript and Python code. This practical book shows you how one such type layer, TypeScript, is unique among them: it makes programming fun with its powerful static type system."
      },
      {
        "author": "Alex Banks, Eve Porcello",
        "imageLink": "../../assets/images/react.png",
        "title": "Learning React, 2nd Edition",
        "price": '25',
        "id": "seven",
        "description": "If you want to learn how to build efficient React applications, this is your book. Ideal for web developers and software engineers who understand how JavaScript, CSS, and HTML work in the browser, this updated edition provides best practices and patterns for writing modern React code. No prior knowledge of React or functional JavaScript is necessary."
      },
      {
        "author": "Bradley Meck Alex Young and Mike Cantelon",
        "imageLink": "../../assets/images/node.png",
        "title": "Node.js in Action",
        "price": '38',
        "id": "eight",
        "description": "Node.js in Action, Second Edition is a thoroughly revised book based on the best-selling first edition. It starts at square one and guides you through all the features, techniques, and concepts you'll need to build production-quality Node applications."
      },
      {
        "author": "Kyle Simpson",
        "imageLink": "../../assets/images/get_started.png",
        "title": "You Don't Know JS Yet: Get Started",
        "price": '26',
        "id": "nine",
        "description": "It seems like there's never been as much widespread desire before for a better way to deeply learn the fundamentals of JavaScript. But with a million blogs, books, and videos out there, just where do you START? Look no further!"
      },
      {
        "author": "John Resig and Bear Bibeault",
        "imageLink": "../../assets/images/ninja.png",
        "title": "Secrets of the JavaScript Ninja",
        "price": '33',
        "id": "ten",
        "description": "Secrets of the Javascript Ninja takes you on a journey towards mastering modern JavaScript development in three phases: design, construction, and maintenance. Written for JavaScript developers with intermediate-level skills, this book will give you the knowledge you need to create a cross-browser JavaScript library from the ground up."
      }
    ],
    cart:JSON.parse(localStorage.getItem('CART'))
 }
export const BODY = variables.BODY;
export const fragment = variables.fragment;
export const book = variables.book;
export const cart = variables.cart;
