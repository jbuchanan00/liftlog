import React, {useEffect, useState, useRef} from 'react';
import axios from 'axios';

const WorkoutForm = () => {
    const [exercises, setExercises] = useState([]);
    const [numOfFields, setNumOfFields] = useState(0);
    const [repFields, setRepFields] = useState([]);
    const [repWeights, setRepWeights] = useState([]);
    const [selectedExercise, setSelectedExercise] = useState('');
    

    const renderFields = (e) => {
        const fields = [];
        for(let i = 0; i < numOfFields; i++){
            fields.push(
                <div>
                    <label htmlFor={`rep${i}`}>{i} Reps: </label>
                    <input
                        key={i}
                        id={`rep${i}`}
                        name={`rep${i}`}
                        type="number"
                        onChange={(e) => handleRepChange(i, e)}/>
                    <label htmlFor={`rep${i}weight`}>{i} Rep Weight: </label>
                    <input
                        key={i}
                        id={`rep${i}weight`}
                        name={`rep${i}weight`}
                        type="number"
                        onChange={(e) => handleWeightChange(i, e)}/>
                </div>
            );
        }
        return fields;
    }

    const handleSetChange = (e) => {
        setNumOfFields(e.target.value);
    }

    const handleRepChange = (i, e) => {
        const repsCopy = [...repFields];
        repsCopy[i] = e.target.value;
        setRepFields(repsCopy);
    }

    const handleWeightChange = (i, e) => {
        console.log(e)
        const repsCopy = [...repWeights];
        repsCopy[i] = e.target.value;
        setRepWeights(repsCopy);
    }

    const handleExerciseChange = (e) => {
        console.log(`selected exercise change ${(e.target.value)}`)
        setSelectedExercise(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Selected exercise ${selectedExercise}`)
        const formData = {
            exercise: selectedExercise,
            sets: numOfFields,
            reps: repFields,
            weights: repWeights
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
                setExercises(['bicep curls', 'rows'])
                //setExercises(response.data)
                console.log(`this is the response ${JSON.stringify(response.data)}`)
            })
            .catch(error => {
                console.error(`There was an error ${error}`)
            })
            
    }, [])

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='workoutName'>Workout Name: </label>
                <select value={selectedExercise} onChange={handleExerciseChange} name='workoutName'>
                    {exercises.map((option, index) => {
                        console.log(option);
                        //return <option key={index} value={option.workout_name}>{option.workout_name}</option>
                        return <option key={index} value={option}>{option}</option>
                    })}
                </select>
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
            <p>{JSON.stringify(exercises)}</p>
            <button type='submit'>Submit</button>
        </form>
    )

}

export default WorkoutForm;