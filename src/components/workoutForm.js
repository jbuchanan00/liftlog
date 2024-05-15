import React, {useEffect, useState, useRef} from 'react';
import axios from 'axios';

const WorkoutForm = () => {
    const exerciseInput = useRef(null);
    const [numOfFields, setNumOfFields] = useState(0);
    const [repFields, setRepFields] = useState([]);

    const renderFields = (e) => {
        const fields = [];
        for(let i = 0; i < numOfFields; i++){
            fields.push(
                <div>
                    <label htmlFor={`rep${i}`} style={{display:'hidden'}}></label> 
                    <input
                        key={i}
                        id={`rep${i}`}
                        name={`rep${i}`}
                        type="number"
                        onChange={(e) => handleRepChange(i, e)}/>
                </div>
            );
        }
        return fields;
    }

    const handleSetChange = (e) => {
        setNumOfFields(e.target.value);
    }

    const handleRepChange = (i, e) => {
        console.log(e)
        const repsCopy = [...repFields];
        repsCopy[i] = e.target.value;
        setRepFields(repsCopy);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            exercise: exerciseInput.current.value,
            sets: numOfFields,
            reps: repFields
        }
        
        console.log("Submitted: ", {formData})
        axios.post('/api/submitworkout', {formData})
            .then(response => {
                console.log('Submitted successfully')
            })
            .catch(error => {
                console.error('There was an error: ', error);
            })
    };

    useEffect(() => {
        axios.get('/exercises')
            .then(response => {
                console.log(`this is the response ${JSON.stringify(response.data)}`)
            })
            .catch(error => {
                console.error(`There was an error ${error}`)
            })
    })

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='workoutName'>Workout Name: </label>
                <input type='text' id='workoutName' 
                    name='workoutName' 
                    ref={exerciseInput}/>
            </div>
            <div>
                <label htmlFor='numSets'>Number of Sets: </label>
                <input type='number'
                    id='numSets'
                    value={numOfFields}
                    name='numSets'
                    onChange={handleSetChange}/>
            </div>
            {renderFields()}
            
            <button type='submit'>Submit</button>
        </form>
    )

}

export default WorkoutForm;