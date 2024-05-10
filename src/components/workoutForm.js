import React, {useEffect, useState} from 'react';
import axios from 'axios';

const WorkoutForm = () => {
    const [formData, setFormData] = useState({
        workoutName: '',
        numSets: 0,
        numReps: 0
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        if(name !== 'workoutName'){
            setFormData(prevState => ({
                ...prevState,
                [name]: parseInt(value, 10)
            }))
        }else{
            setFormData({...formData, [e.target.name]: e.target.value});
        }
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted:")
        axios.post('/api/submitworkout', formData)
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
                    value={formData.workoutName}
                    name='workoutName' 
                    onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor='numSets'>Number of Sets: </label>
                <input type='number'
                    id='numSets'
                    value={formData.sets}
                    name='numSets'
                    onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor='numReps'>Reps per Set: </label>
                <input type='number'
                    id="repsPerSet"
                    name='numReps'
                    value={formData.reps}
                    onChange={handleChange}/>
            </div>
            <button type='submit'>Submit</button>
        </form>
    )

}

export default WorkoutForm;