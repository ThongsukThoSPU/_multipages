import './Component.css';

import Counter from './Components/Counter/Counter'
import Timer from './Components/Timer/Timer'
import Add from './Components/Add/Add'
import Temperature from './Components/Temperature/Temperature'

function Component() {
    return ( 
    <div className="component-container">
        <div className='inCon1'>
        {/* <Counter /> */}
        <div className='inCon2'>
          <div className='Timerandcon'>
            <Counter Name='Counter' value={20} /> 
            <Timer />
          </div>
          <div className='add1'>
            <Add aValue={10} bValue={20} />
          </div>
        </div>
        <Temperature />
      </div>
      <br />
    </div> );
}

export default Component;