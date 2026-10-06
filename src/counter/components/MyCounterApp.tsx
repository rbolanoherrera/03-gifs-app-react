
import { useCounter } from '../hooks/useCounter';

export const MyCounterApp = () => {

    const { counter, handleAdd, handleSubtract, handleReset } = useCounter(0);

  return (
    <div style={{ 
        display: 'flex', 
        flexDirection: 'column' }}>
        <h1>My Counter App</h1>
        <h2 style={{ textAlign: 'center' }}>Counter: {counter}</h2>
        <div style={{
            display: 'flex',
            gap: '10px',
            textAlign: 'center',
        }}>
        <button onClick={handleAdd}>+1</button>
        <button onClick={handleSubtract}>-1</button>
        <button onClick={handleReset}>Reset</button>
        </div>
    </div>
  )
}
