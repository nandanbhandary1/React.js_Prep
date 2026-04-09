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