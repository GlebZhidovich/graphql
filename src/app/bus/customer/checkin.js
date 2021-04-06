import { useCheckIn } from './hooks/useCheckIn';

export const CheckIn = () => {
  const { handleChange, handleCheck } = useCheckIn();
  return (
    <div>
      <h1>Check In</h1>
      <input
        name="id"
        type="text"
        onChange={handleChange} />
      <button onClick={handleCheck}>Check In</button>
    </div>
  )
}
