import React, {useState, useContext, useEffect} from 'react';
import {AlertContext} from "../context/alert/alertContext";
import {FirebaseContext} from "../context/firebase/firebaseContext";

export const Form = () => {

    const [value, setValue] = useState('');

    //Form fields
    const [eventName, setEventName] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("Event name");
        const initialValue = JSON.parse(saved);
        return initialValue || '';
    });
    const [select, setSelectChoose] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("Event type");
        const initialValue = JSON.parse(saved);
        return initialValue || 'holidays';
    });
    const [moneyValue, setMoneyValue] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("Money");
        const initialValue = JSON.parse(saved);
        return initialValue || '';
    });
    const [addressValue, setAddressValue] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("Address");
        const initialValue = JSON.parse(saved);
        return initialValue || '';
    });
    const [timeValue, setTimeValue] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("Time");
        const initialValue = JSON.parse(saved);
        return initialValue || '';
    });

    useEffect(() => {
        // storing input name
        localStorage.setItem("Event name", JSON.stringify(eventName));
        localStorage.setItem("Event type", JSON.stringify(select));
        localStorage.setItem("Money", JSON.stringify(moneyValue));
        localStorage.setItem("Address", JSON.stringify(addressValue));
        localStorage.setItem("Time", JSON.stringify(timeValue));
    }, [eventName, select, moneyValue, addressValue, timeValue]);

    const alert = useContext(AlertContext);
    const firebase = useContext(FirebaseContext);

    const selectHandler = value => {
        setSelectChoose(value);
    }

    const submitHandler = event => {
        event.preventDefault();

        if (value.trim()) {
            firebase.addNote(value.trim()).then(() => {
                alert.show('?????????????? ???????? ??????????????', 'success');
            }).catch(() => {
                alert.show('??????-???? ?????????? ???? ??????', 'danger');
            });
            setValue('');
        } else {
            alert.show('?????????????????? ????????');
        }
    };

    const Holidays = () => {
        return (
            <>
                <div className="form-group">
                    <label>
                        ?????????? ??????????
                        <input
                            className="form-control"
                            placeholder="?????????? ??????????"
                            value={moneyValue}
                            onChange={e => setMoneyValue(e.target.value)}
                        />
                    </label>
                </div>
            </>
        )
    }

    const Events = () => {
        return (
            <>
                <div className="form-group">
                    <label>
                        ??????????
                        <input
                            className="form-control"
                            placeholder="??????????"
                            value={addressValue}
                            onChange={e => setAddressValue(e.target.value)}
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        ??????????
                        <input type="time"
                            className="form-control"
                            placeholder="??????????"
                            value={timeValue}
                            onChange={e => setTimeValue(e.target.value)}
                        />
                    </label>
                </div>
            </>
        )
    }

    const Notes = () => {
        return (
            <>
                <div className="form-group">
                    <label>
                        ?????????? ??????????????
                        <textarea
                            className="form-control"
                            placeholder="?????????? ??????????????"
                            value={value}
                            onChange={e => setValue(e.target.value)}
                        ></textarea>
                    </label>
                </div>
            </>
        )
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label>
                        ???????????????? ??????????????
                        <input type="text"
                               className="form-control"
                               placeholder="???????????????? ??????????????"
                               value={eventName}
                               onChange={e => setEventName(e.target.value)}
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        ?????? ??????????????
                        <select onChange={e => selectHandler(e.target.value)} className="form-control">
                            <option value="holidays">?????????????????????? ??????</option>
                            <option value="events">??????????????????????</option>
                            <option value="notes">??????????????/????????????</option>
                        </select>
                    </label>
                </div>

                { select == 'holidays' ? <Holidays /> : ''}
                { select == 'events' ? <Events /> : ''}
                { select == 'notes' ? <Notes /> : ''}

                <div className="form-group">
                    <button className="btn btn-danger mr-3" type="reset">????????????</button>
                    <button className="btn btn-primary" type="submit">??????????????????</button>
                </div>

            </form>
        </>
    )
};