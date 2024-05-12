import { useState } from "react";
import { useForm } from "react-hook-form";
import Field from "../../components/Field";
import './styles.css';

function Form() {
  const [isPhysical, setIsPhysical] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setError,
    clearErrors,
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      nameCompany: '',
      email: '',
      phone: '',
      country: '',
      city: '',
      state: '',
      address: '',
      postIndex: '',
    },
  });

  const handleSwitch = () => setIsPhysical(!isPhysical);

  return (
    <div className="wrapper">
      <div className="title">Заповніть форму</div>
      <div className="switcher">
        <div className={isPhysical && "activeSwitch"} onClick={handleSwitch}>Фіз. особа</div>
        <div className={!isPhysical && "activeSwitch"} onClick={handleSwitch}>Юр. особа</div>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <Field
            type="text"
            label="Ім’я"
            register={register('firstName', {
              required: 'Обов`язкове поле!',
            })}
            name="firstName"
            error={errors.firstName && errors.firstName.message}
          />
          <Field
            type="text"
            label="Прізвище"
            register={register('lastName', {
              required: 'Обов`язкове поле!',
            })}
            name="lastName"
            error={errors.lastName && errors.lastName.message}
          />
          <Field
            type="text"
            label="Назва компанії, організації"
            register={register('nameCompany', {
              required: 'Обов`язкове поле!',
            })}
            name="nameCompany"
            error={errors.nameCompany && errors.nameCompany.message}
          />
          <Field
            type="text"
            label="Email-адрес"
            register={register('email', {
              required: 'Обов`язкове поле!',
            })}
            name="email"
            error={errors.email && errors.email.message}
          />
          <Field
            type="text"
            label="Номер телефону"
            register={register('phone', {
              required: 'Обов`язкове поле!',
            })}
            name="phone"
            error={errors.phone && errors.phone.message}
          />
          <Field
            type="text"
            label="Номер телефону"
            register={register('phone', {
              required: 'Обов`язкове поле!',
            })}
            name="phone"
            error={errors.phone && errors.phone.message}
          />
        </form>
      </div>
    </div>
  );
}

export default Form;