import ReactDOM from 'react-dom/client'
import { restaurants } from './constants/mock'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <section>
    <article>
      <h2>{restaurants[0].name}</h2>
      <h3>Menu</h3>
      <ul>
        <li>{restaurants[0].menu[0].name}</li>
        <li>{restaurants[0].menu[1].name}</li>
        <li>{restaurants[0].menu[2].name}</li>
      </ul>
      <h3>Reviews</h3>
      <ul>
        <li>{restaurants[0].reviews[0].text}</li>
        <li>{restaurants[0].reviews[1].text}</li>
      </ul>
    </article>

    <article>
      <h2>{restaurants[1].name}</h2>
      <h3>Menu</h3>
      <ul>
        <li>{restaurants[1].menu[0].name}</li>
        <li>{restaurants[1].menu[1].name}</li>
      </ul>
      <h3>Reviews</h3>
      <ul>
        <li>{restaurants[1].reviews[0].text}</li>
        <li>{restaurants[1].reviews[1].text}</li>
        <li>{restaurants[1].reviews[2].text}</li>
      </ul>
    </article>

    <article>
      <h2>{restaurants[2].name}</h2>
      <h3>Menu</h3>
      <ul>
        <li>{restaurants[2].menu[0].name}</li>
        <li>{restaurants[2].menu[1].name}</li>
        <li>{restaurants[2].menu[2].name}</li>
      </ul>
      <h3>Reviews</h3>
      <ul>
        <li>{restaurants[2].reviews[0].text}</li>
      </ul>
    </article>

    <article>
      <h2>{restaurants[3].name}</h2>
      <h3>Menu</h3>
      <ul>
        <li>{restaurants[3].menu[0].name}</li>
        <li>{restaurants[3].menu[1].name}</li>
      </ul>
      <h3>Reviews</h3>
      <ul>
        <li>{restaurants[3].reviews[0].text}</li>
        <li>{restaurants[3].reviews[1].text}</li>
      </ul>
    </article>
  </section>
)

// import React from 'react'

// root.render(
//   React.createElement('section', {},
//     React.createElement('article', {},
//       React.createElement('h2', {}, restaurants[0].name),
//       React.createElement('h3', {}, 'Menu'),
//       React.createElement('ul', {},
//         React.createElement('li', {}, restaurants[0].menu[0].name),
//         React.createElement('li', {}, restaurants[0].menu[1].name),
//         React.createElement('li', {}, restaurants[0].menu[2].name),
//       ),
//       React.createElement('h3', {}, 'Reviews'),
//       React.createElement('ul', {},
//         React.createElement('li', {}, restaurants[0].reviews[0].text),
//         React.createElement('li', {}, restaurants[0].reviews[1].text),
//       ),
//     ),

//     React.createElement('article', {},
//       React.createElement('h2', {}, restaurants[1].name),
//       React.createElement('h3', {}, 'Menu'),
//       React.createElement('ul', {},
//         React.createElement('li', {}, restaurants[1].menu[0].name),
//         React.createElement('li', {}, restaurants[1].menu[1].name),
//       ),
//       React.createElement('h3', {}, 'Reviews'),
//       React.createElement('ul', {},
//         React.createElement('li', {}, restaurants[1].reviews[0].text),
//         React.createElement('li', {}, restaurants[1].reviews[1].text),
//         React.createElement('li', {}, restaurants[1].reviews[2].text),
//       ),
//     ),

//     React.createElement('article', {},
//       React.createElement('h2', {}, restaurants[2].name),
//       React.createElement('h3', {}, 'Menu'),
//       React.createElement('ul', {},
//         React.createElement('li', {}, restaurants[2].menu[0].name),
//         React.createElement('li', {}, restaurants[2].menu[1].name),
//         React.createElement('li', {}, restaurants[2].menu[2].name),
//       ),
//       React.createElement('h3', {}, 'Reviews'),
//       React.createElement('ul', {},
//         React.createElement('li', {}, restaurants[2].reviews[0].text),
//       ),
//     ),

//     React.createElement('article', {},
//       React.createElement('h2', {}, restaurants[3].name),
//       React.createElement('h3', {}, 'Menu'),
//       React.createElement('ul', {},
//         React.createElement('li', {}, restaurants[3].menu[0].name),
//         React.createElement('li', {}, restaurants[3].menu[1].name),
//       ),
//       React.createElement('h3', {}, 'Reviews'),
//       React.createElement('ul', {},
//         React.createElement('li', {}, restaurants[3].reviews[0].text),
//         React.createElement('li', {}, restaurants[3].reviews[1].text),
//       ),
//     ),
//   )
// )
