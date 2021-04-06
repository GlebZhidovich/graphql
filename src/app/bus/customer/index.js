import { useCustomer } from './hooks/useCustomer';
import { Login } from './login';
import { CheckIn } from './checkin';
import { CheckOut } from './checkout';

export const Customer = () => {

  const {
    save,
    handleChange,
    createAccount
  } = useCustomer();

  console.log(createAccount);

  return (
    <>
      {/*<h1>*/}
      {/*  Registration*/}
      {/*</h1>*/}
      {/*<input*/}
      {/*  type="text"*/}
      {/*  placeholder="name"*/}
      {/*  name="name"*/}
      {/*  onChange={handleChange} />*/}
      {/*<input*/}
      {/*  type="text"*/}
      {/*  placeholder="username"*/}
      {/*  name="username"*/}
      {/*  onChange={handleChange} />*/}
      {/*<input*/}
      {/*  type="password"*/}
      {/*  placeholder="password"*/}
      {/*  name="password"*/}
      {/*  onChange={handleChange} />*/}
      {/*<button*/}
      {/*  type="submit"*/}
      {/*  onClick={save}>*/}
      {/*  Save*/}
      {/*</button>*/}
      <div>
        <Login />
      </div>
      <br/>
      <div>
        <CheckIn />
      </div>
      <div>
        <CheckOut />
      </div>
    </>
  )
}
