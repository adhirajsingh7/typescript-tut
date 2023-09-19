import React, { useState } from 'react'

const Page2 = () => {

    type UserType = {
        name: string,
        sessionId: number
    }

    const [username, setUsername] = useState("")
    const [user, setUser] = useState<UserType | null>(null)


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setUsername(e.target.value)
    }

    const handleClick =(e: React.MouseEvent<HTMLButtonElement>)=> {
        e.preventDefault()
        setUser({
            name: username,
            sessionId: Math.random()
        })
    }

  return (
    <div>
        {user ? `${user.name} is logged` : <form>
            <input type="text" name='name' placeholder='username' onChange={handleChange}/>
            <button onClick={handleClick}>Login</button>
        </form>}
        {/* USE OF NULLISH OPERATOR */}
        {user?.name}
    </div>
  )
}

export default Page2