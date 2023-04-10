import React,{useState} from 'react'
import { UserContext } from './UserContext';
import UserProfile from './UserProfile';
export default function UseContextExample() {
    const [user, setUser] = useState({ name: 'John Doe', email: 'john.doe@example.com' });
  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <UserProfile />
      </UserContext.Provider>
    </div>
  )
}
