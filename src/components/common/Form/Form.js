import React from 'react'
import { withFormik } from 'formik'
import * as Yup from 'yup'
import classnames from 'classnames'
import Select from 'react-select'
// import 'react-select/dist/react-select.css'
import './Form.css'

// import { Wrapper } from './style'

const formikEnhancer = withFormik({
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(2, 'Your name is longer than that')
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    menuchoice: Yup.string().required('Choose a menu'),
    menuchoiceplusone: Yup.string(),
    allergies: Yup.string(),
    security: Yup.string()
      .lowercase()
      .matches(/(^grant$|^gladkova$)/, {
        excludeEmptyString: true,
        message: "That's not right!",
      })
      .required('Security Q is required'),
  }),

  mapPropsToValues: ({ user }) => ({
    ...user,
  }),
  handleSubmit: (values, { setSubmitting }) => {
    setSubmitting(true)

    const payload = {
      ...values,
      // menuchoice: values.menuchoice.value,
    }

    // POST to Google form
    // https://docs.google.com/forms/d/e/[FORM_ID]/formResponse?entry.1098499744=AnswerField1&entry.1090138332=AnswerField2
    const FORM_ID = '1dqGXn6dFvEIaHLFon4_p_PSAlvLVxlbBncjqQCHqN5Y'
    alert(JSON.stringify(payload, null, 2))
    setSubmitting(false)
  },
  displayName: 'Form',
})

const InputFeedback = ({ error }) =>
  error ? <div className="input-feedback">{error}</div> : null

const Label = ({ error, className, children, ...props }) => {
  return (
    <label className="label" {...props}>
      {children}
    </label>
  )
}

const TextInput = ({
  type,
  id,
  label,
  error,
  value,
  onChange,
  className,
  ...props
}) => {
  const classes = classnames(
    'input-group',
    {
      error: !!error,
    },
    className
  )
  return (
    <div className={classes} style={{ textAlign: 'left' }}>
      <Label htmlFor={id} error={error}>
        {label}
      </Label>
      <input
        id={id}
        className="text-input"
        type={type}
        value={value}
        onChange={onChange}
        {...props}
      />
      <InputFeedback error={error} />
    </div>
  )
}

const MyForm = props => {
  const {
    values,
    touched,
    errors,
    dirty,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    setFieldValue,
    setFieldTouched,
    isSubmitting,
  } = props
  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '40px' }}>
      <TextInput
        id="name"
        type="text"
        label="Name"
        placeholder="Jan Hus"
        error={touched.name && errors.name}
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextInput
        id="email"
        type="email"
        label="Email"
        placeholder="janhus@husmail.cz"
        error={touched.email && errors.email}
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextInput
        id="allergies"
        type="text"
        label="Allergies"
        placeholder="Leave blank if you don't have any"
        error={touched.allergies && errors.allergies}
        value={values.allergies}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {/* <MySelect
        id="menuchoice"
        label="Menu choice"
        placeholder="Beef fillet, or saffron risotto"
        error={touched.menuchoice && errors.menuchoice}
        value={values.menuchoice}
        onChange={setFieldValue}
        onBlur={setFieldTouched}
        toucher={touched.menuchoice}
      /> */}
      <TextInput
        id="menuchoice"
        type="text"
        label="Menu choice"
        placeholder="Beef fillet or vegetarian risotto?"
        error={touched.menuchoice && errors.menuchoice}
        value={values.menuchoice}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextInput
        id="menuchoice"
        type="text"
        label="Menu choice for +1"
        placeholder="Leave blank if not applicable"
        error={touched.plusonemenuchoice && errors.plusonemenuchoice}
        value={values.plusonemenuchoice}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextInput
        id="security"
        type="text"
        label="Security Q: What is either Will or Christina's last name?"
        placeholder="Who are we?"
        error={touched.security && errors.security}
        value={values.security}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <button
        type="button"
        className="outline"
        onClick={handleReset}
        disabled={!dirty || isSubmitting}
      >
        Reset
      </button>
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </form>
  )
}

const Form = formikEnhancer(MyForm)

const options = [
  { value: 'Beef', label: 'Beef Fillet' },
  { value: 'Veggie', label: 'Saffron Risotto (Vegetarian)' },
]

const MySelect = (
  id,
  label,
  error,
  onChange,
  onBlur,
  value,
  className,
  ...props
) => {
  const handleChange = value => {
    // this is going to call setFieldValue and manually update values.menuchoice
    onChange('menuchoice', value)
  }

  const handleBlur = () => {
    // this is going to call setFieldTouched and manually update touched.menuchoice
    onBlur('menuchoice', true)
  }
  const classes = classnames(
    'input-group',
    {
      error: !!error,
    },
    className
  )

  return (
    <div className={classes} style={{ textAlign: 'left' }}>
      {/* <Label htmlFor={id} error={error}>
        {label}
      </Label> */}
      <Select
        id={id}
        options={options}
        multi={false}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        {...props}
      />
      <InputFeedback error={error} />
    </div>
  )
}

export default Form
