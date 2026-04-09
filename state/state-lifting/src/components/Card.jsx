const Card = (props) => {
  return (
    <div>
        <input type="text" onChange={(e) => props.setName(e.target.value)}/>
        <p>Name state var: {props.name}</p>
    </div>
  )
}

export default Card

// User types → child calls setName(value) → parent updates name → new name flows everywhere



// Example 1: Login form
// Child → input fields
// Parent → sends API request

// Example 2: Search bar
// Child → user types
// Parent → filters list

// Example 3: Shopping cart
// Product component → adds item
// Parent → updates cart

// Child has input field (name)
// Parent needs to:
// show that name
// send it to backend
// use it in another component