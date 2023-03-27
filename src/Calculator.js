import React, {useState} from 'react';

function Calculator() {

    const [initState, setInitstate] = useState({});

    // calculate sum and assigned and update in variables
    const [calculated, setCalculated] = useState(null);


    // called when textbox values are changes
    const handleChange = (e) => {
        setInitstate({ ...initState, [e.target.id]: e.target.value });
      };

    const handleClick = (evnt, type)=> {
        
        // get the values
        const value = evnt.target.value;

        setInitstate({
            ...initState,
            [evnt.target.id]: value 
        });

        // get f1 and f2 from inputbox
        let firstValue = +(initState.f1);
        let secondValue = +(initState.f2);
        let sum;
        switch (type) {
            case 'add':
              sum = firstValue + secondValue;
              break;
            case 'subs':
                sum = firstValue - secondValue;
              break;
            case 'mul':
                sum = firstValue * secondValue;
              break;
           case 'divi':
                sum = firstValue / secondValue;
              break;
           default:
              console.log(`No value provided`);
          }
          // updated calculated values after actions
          setCalculated(sum);
    }
    return (
          <div>
            <h3>Result: {calculated}</h3>
          <div>
          First Number: <input type="number" id="f1" name='f1' 
          value={initState.f1 || ''} onChange={handleChange} />
        </div>
          <div>
          Second Number:: <input type="number" id="f2" name='f2' value={initState.f2 || ''} 
            onChange={handleChange}  />
        </div>
        <div>&nbsp;</div>
        <div>
            <input type='button' onClick={(e)=>handleClick(e, 'add')} name='button' value="Add(+)"/>&nbsp;
            <input type='button' onClick={(e)=>handleClick(e, 'subs')} name='button' value="Subtract(-)"/>&nbsp;
            <input type='button' onClick={(e)=>handleClick(e, 'mul')} name='button' value="Multiply(*)"/>&nbsp;
            <input type='button' onClick={(e)=>handleClick(e, 'divi')} name='button' value="Divide(/)"/>
        </div>
        </div>
        
    );
}

export default Calculator;