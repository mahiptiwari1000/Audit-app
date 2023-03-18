import React, { useState } from 'react';
import styles from './styles/formStyles.module.css';
import Button from '../../../src/components/Button';

const NewEntry = () => {

    const [state, setState] = useState({
        name: "",
        address: "",
        hygienity:"",
        nutrients:""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setState((prevProps) => ({
            ...prevProps,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(state);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                Create A New Entry
            </div>
            <form onSubmit={handleSubmit}>
                    <div className={styles.formField}>
                    <label className={styles.formFieldTitle}>Name of the Restaurant: </label>
                    <input
                        type="text"
                        name="name"
                        value={state.name}
                        onChange={handleInputChange}
                        className={styles.formFieldInput}
                    />
                    </div>
                <div className={styles.formField}>
                <label className={styles.formFieldTitle}>Address: </label>
                    <input
                        type="text"
                        name="address"
                        value={state.address}
                        onChange={handleInputChange}
                        className={styles.formFieldInput}
                    />
                </div>
                <div className={styles.formField}>
                <label className={styles.formFieldTitle}>Hygienity Score: </label>
                    <input
                        type="text"
                        name="hygienity"
                        value={state.hygienity}
                        onChange={handleInputChange}
                        className={styles.formFieldInput}
                    />
                </div>
                <div className={styles.formField}>
                <label className={styles.formFieldTitle}>Nutrients Score: </label>
                    <input
                        type="text"
                        name="nutrients"
                        value={state.nutrients}
                        onChange={handleInputChange}
                        className={styles.formFieldInput}
                    />
                </div>
                <div className="submit-btn">
                    <Button title={"Submit"}></Button>
                </div>
            </form>
        </div>
    );
}

export default NewEntry;
