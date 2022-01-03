import { useState } from 'react'
import { signUp } from '../../services/users'
import { useNavigate } from 'react-router-dom'


function SignUp(props) {

  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    isError: false,
    errorMsg: '',
  })

  const handleChange = (e) =>
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })

  const onSignUp = async (event) => {
    event.preventDefault()
    const { setUser } = props
    try {
      const user = await signUp(form)
      setUser(user)
      navigate('/')
    } catch (error) {
      console.error(error)
      setForm({
        name: '',
        email: '',
        password: '',
        isError: true,
        errorMsg: 'Sign Up Details Invalid',
      })
    }
  }

  const renderError = () => {
    const toggleForm = form.isError ? 'danger' : ''
    if (form.isError) {
      return (
        <button type='submit' className={toggleForm}>
          {form.errorMsg}
        </button>
      )
    } else {
      return <button type='submit'>Sign Up</button>
    }
  }

  const { name, email, password } = form

  return (
    <div>
      <h3>Sign Up</h3>
      <form onSubmit={onSignUp}>
        <label>Name</label>
        <input
          required
          type='text'
          name='name'
          value={name}
          placeholder='Enter Name'
          onChange={handleChange}
        />
        <label>Email address</label>
        <input
          required
          type='email'
          name='email'
          value={email}
          placeholder='Enter email'
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          required
          name='password'
          value={password}
          type='password'
          placeholder='Password'
          onChange={handleChange}
        />
        {renderError()}
      </form>
    </div>
  
  )
}

export default SignUp
