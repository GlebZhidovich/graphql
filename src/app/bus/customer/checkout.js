import { useCheckOut } from './hooks/useCheckOut';

export const CheckOut = () => {
  const { handleChange, handleCheck } = useCheckOut();
  return (
    <div>
      <h1>Check Out</h1>
      <input
        name="id"
        type="text"
        onChange={handleChange} />
      <button onClick={handleCheck}>Check Out</button>
    </div>
  )
}
