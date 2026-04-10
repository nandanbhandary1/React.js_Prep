import { useContext } from 'react'
import { TheamContext } from '../App'
const ChildC = () => {
    // const user = useContext(UserContext)
    const {theme, setTheme} = useContext(TheamContext) // receive value
    function handleTheme() {
        if(theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }
  return (
    <div>
        <button onClick={handleTheme}>
            Change Theme
        </button>
    </div>
  )
}

export default ChildC
