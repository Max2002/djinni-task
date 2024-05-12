import { useForm, Controller } from "react-hook-form";
import Field from "../../components/Field";
import './styles.css';

export default function FormData() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      nameCompany: '',
      email: '',
      phone: '',
      country: '',
      photo: '',
      city: '',
      state: '',
      address: '',
      postIndex: '',
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
  }

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="leftFields">
        <div className="togetherField">
          <Field
            type="text"
            label="Ім’я"
            register={register('firstName', {
              required: "Обов'язкове поле!",
            })}
            name="firstName"
            error={errors.firstName && errors.firstName.message}
          />
          <Field
            type="text"
            label="Прізвище"
            register={register('lastName', {
              required: "Обов'язкове поле!",
            })}
            name="lastName"
            error={errors.lastName && errors.lastName.message}
          />
        </div>
        <div className="companyName">
          <Field
            type="text"
            label="Назва компанії, організації"
            register={register('nameCompany', {
              required: "Обов'язкове поле!",
            })}
            name="nameCompany"
            error={errors.nameCompany && errors.nameCompany.message}
          />
          <Controller
            name="logo"
            control={control}
            defaultValue={null}
            render={({ field }) => (
              <>
                {field.value ? (
                  <img src={field.value} alt="Logo" style={{ maxWidth: '100px', maxHeight: '100px' }} />
                ) : (
                  <label htmlFor="logoInput" className="labelLogo">+ Логотип</label>
                )}
                <input
                  id="logoInput"
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={(e) => {
                    const file = e.target.files[0];
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      field.onChange(reader.result);
                    };
                    reader.readAsDataURL(file);
                  }}
                />
              </>
            )}
          />
        </div>
        <Field
          type="email"
          label="Email-адрес"
          register={register('email', {
            required: "Обов'язкове поле!",
          })}
          name="email"
          error={errors.email && errors.email.message}
        />
        <Field
          type="tel"
          label="Номер телефону"
          register={register('phone', {
            required: "Обов'язкове поле!",
          })}
          name="phone"
          error={errors.phone && errors.phone.message}
        />
      </div>
      <div className="rightFields">
        <Field
          type="text"
          label="Країна"
          register={register('country', {
            required: "Обов'язкове поле!",
          })}
          name="country"
          error={errors.country && errors.country.message}
        />
        <div className="togetherField">
          <Field
            type="text"
            label="Місто"
            register={register('city', {
              required: "Обов'язкове поле!",
            })}
            name="city"
            error={errors.city && errors.city.message}
          />
          <Field
            type="text"
            label="Штат, район"
            register={register('state', {
              required: "Обов'язкове поле!",
            })}
            name="state"
            error={errors.state && errors.state.message}
          />
        </div>
        <Field
          type="text"
          label="Адреса"
          register={register('address', {
            required: "Обов'язкове поле!",
          })}
          name="address"
          error={errors.address && errors.address.message}
        />
        <Field
          type="text"
          label="Поштовий індекс"
          register={register('postIndex', {
            required: "Обов'язкове поле!",
          })}
          name="postIndex"
          error={errors.postIndex && errors.postIndex.message}
        />
      </div>
    </form>
  );
}