import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import "./styles.css";

export default function CardData() {
  const number1Ref = useRef(null);
  const number2Ref = useRef(null);
  const number3Ref = useRef(null);
  const number4Ref = useRef(null);
  const termRef = useRef(null);
  const cvvRef = useRef(null);
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [number3, setNumber3] = useState('');
  const [number4, setNumber4] = useState('');
  const [termDate, setTermDate] = useState('');
  const [cvv, setCVV] = useState('');
  const {
    register,
    handleSubmit,
  } = useForm({
    defaultValues: {
      number1: '',
      number2: '',
      number3: '',
      number4: '',
      termDate: '',
      CVC: '',
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
  }
  
  const objRefs = {
    number1Ref: number2Ref,
    number2Ref: number3Ref,
    number3Ref: number4Ref,
    number4Ref: termRef
  };

  const reversRefs = {
    number2Ref: number1Ref,
    number3Ref: number2Ref,
    number4Ref: number3Ref,
    cvvRef: termRef
  };

  const objFuncs = {
    number1Ref: (value) => setNumber1(value),
    number2Ref: (value) => setNumber2(value),
    number3Ref: (value) => setNumber3(value),
    number4Ref: (value) => setNumber4(value),
    cvvRef: (value) => setCVV(value)
  };

  const handleInput = (event, max, refInput) => {
    const value = event.target.value.replace(/\D/g, '');
    if (max && value.length === max) {
      objRefs[refInput].current.focus();
    } else if (!value.length && refInput !== "number1Ref") {
      reversRefs[refInput].current.focus();
    }

    objFuncs[refInput](value);
  };

  const handleTerm = (event) => {
    const value = event.target.value.replace(/\D/g, '');
    const month = value.slice(0, 2);
    const year = value.slice(2, 4);
    let maskedDate = '';

    if (value.length > 2) {
      maskedDate = `${month}/${year}`;
    } else if (value.length > 0) {
      maskedDate = `${month}`;
    }

    setTermDate(maskedDate);

    if (value.length === 4) {
      cvvRef.current.focus();
    } else if (!value.length) {
      number4Ref.current.focus();
    }
  };

  return (
    <form className="cardData" onSubmit={handleSubmit(onSubmit)}>
      <div className="numberCard">
        <div className="titleCardData">Номер карти</div>
        <div className="inputs">
          <input
            ref={number1Ref}
            className="errorState"
            {...register}
            type="text"
            id="number1"
            maxLength={4}
            minLength={4}
            autoComplete="off"
            onChange={(e) => handleInput(e, 4, "number1Ref")}
            value={number1}
            required
          />
          <input
            ref={number2Ref}
            className="errorState"
            {...register}
            type="text"
            id="number2"
            maxLength={4}
            minLength={4}
            autoComplete="off"
            onChange={(e) => handleInput(e, 4, "number2Ref")}
            value={number2}
            required
          />
          <input
            ref={number3Ref}
            className="errorState"
            {...register}
            type="text"
            id="number3"
            maxLength={4}
            minLength={4}
            autoComplete="off"
            onChange={(e) => handleInput(e, 4, "number3Ref")}
            value={number3}
            required
          />
          <input
            ref={number4Ref}
            className="errorState"
            {...register}
            type="text"
            id="number4"
            maxLength={4}
            minLength={4}
            autoComplete="off"
            onChange={(e) => handleInput(e, 4, "number4Ref")}
            value={number4}
            required
          />
        </div>
      </div>
      <div className="term_CVV">
        <div className="termCard">
          <div className="titleCardData">Термін дії</div>
          <input
            ref={termRef}
            className="errorState"
            {...register}
            type="text"
            id="termDate"
            maxLength={5}
            minLength={5}
            autoComplete="off"
            onChange={handleTerm}
            value={termDate}
            required
          />
        </div>
        <div className="CVCCard">
          <div className="titleCardData">CVC/CVV</div>
          <input
            ref={cvvRef}
            className="errorState"
            {...register}
            type="text"
            id="CVC"
            maxLength={3}
            minLength={3}
            autoComplete="off"
            onChange={(e) => handleInput(e, 0, "cvvRef")}
            value={cvv}
            required
          />
        </div>
      </div>
    </form>
  );
}