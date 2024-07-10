import React, { useState } from "react";
import { Formik, Form, Field, useFormikContext } from "formik";
import * as Yup from "yup";

// Have to use work around found in course forum because API Meta provided is no longer functional
const availableTimesByDate = {
  "2023-10-01": ["10:00", "11:00", "12:00"],
  "2023-10-02": ["10:00", "11:00", "12:00"],
  "2023-10-03": ["14:00", "15:00", "16:00"],
  "2023-10-04": ["10:00", "11:00", "12:00"],
  "2023-10-05": ["14:00", "15:00", "16:00"],
  "2023-10-06": ["10:00", "12:00", "13:00"],
  "2023-10-07": ["14:00", "15:00", "16:00"],
  "2023-10-08": ["10:00", "11:00", "12:00"],
  "2023-10-09": ["14:00", "15:00", "16:00"],
  "2023-10-10": ["10:00", "11:00", "12:00"],
  "2023-10-11": ["14:00", "15:00", "16:00"],
  "2023-10-12": ["10:00", "11:00", "12:00"],
  "2023-10-13": ["14:00", "15:00", "16:00"],
  "2023-10-14": ["10:00", "11:30", "12:00"],
  "2023-10-15": ["14:00", "15:00", "16:00"],
  "2023-10-16": ["10:00", "11:00", "12:00"],
  "2023-10-17": ["14:00", "15:00", "16:00"],
  "2023-10-18": ["10:00", "11:00", "12:00"],
  "2023-10-19": ["14:00", "15:00", "16:00"],
  "2023-10-20": ["10:00", "11:00", "12:00"],
  "2023-10-21": ["14:00", "15:00", "16:00"],
};

const fetchAPI = (date) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (availableTimesByDate[date]) {
        resolve(availableTimesByDate[date]);
      } else {
        reject(new Error("No available times for the selected date."));
      }
    }, 1000);
  });
};

const submitAPI = (formData) => {
  console.log(formData);
  availableTimesByDate[formData.date] = availableTimesByDate[
    formData.date
  ].filter((time) => time !== formData.time);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (formData) {
        resolve(true); // Simulate successful submission
      } else {
        reject(new Error("Form submission failed."));
      }
    }, 0); // Simulate API delay
  });
};

const validationSchema = Yup.object().shape({
  date: Yup.date().required("Date is required"),
  time: Yup.string().required("Time is required"),
  numberOfDiners: Yup.number()
    .required("Number of Diners is required")
    .min(1, "Number of Diners must be at least 1")
    .max(10, "Number of Diners cannot be more than 10"),
  occasion: Yup.string().required("Occasion is required"),
});

const Reservations = () => {
  const [successMessage, setSuccessMessage] = useState(null);

  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const onSubmit = (values, { resetForm }) => {
    submitAPI(values)
      .then(() => {
        console.log("Form submitted successfully!");
        console.log("Form values:", values);
        resetForm();
        setSuccessMessage("You have successfully booked your table!");
      })
      .catch((error) => {
        console.error("Form submission failed:", error);
      });
  };

  const availableTimes = availableTimesByDate[selectedDate] || [];

  return (
    <section className="w-full min-h-[70vh] md:min-h-[400px] flex flex-col items-center bg-[#495d57] pt-4 px-4">
      <Formik
        initialValues={{
          seatingType: "outdoor",
          date: "",
          time: "",
          numberOfDiners: "",
          occasion: "",
        }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <Form className="w-full max-w-md">
            <div>
              <h1 className="text-4xl text-yellow-400 font-semibold mb-8">
                Reservations
              </h1>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="grid">
                <label htmlFor="indoor" className="text-white">
                  Indoor Seating
                  <Field
                    id="indoor"
                    name="seatingType"
                    type="radio"
                    value="indoor"
                    checked={values.seatingType === "indoor"}
                    onChange={handleChange}
                    className="ml-2"
                  />
                </label>
              </div>
              <div className="grid">
                <label htmlFor="outdoor" className="text-white">
                  Outdoor Seating
                  <Field
                    id="outdoor"
                    name="seatingType"
                    type="radio"
                    value="outdoor"
                    checked={values.seatingType === "outdoor"}
                    onChange={handleChange}
                    className="ml-2"
                  />
                </label>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="grid">
                <label className="text-white" htmlFor="date">
                  Date
                </label>
                <Field
                  type="date"
                  id="date"
                  name="date"
                  required
                  min={Object.keys(availableTimesByDate)[0]}
                  max={Object.keys(availableTimesByDate).pop()}
                  onChange={(e) => {
                    handleDateChange(e);
                    handleChange(e);
                  }}
                  className="bg-white rounded p-2"
                />
                <div
                  className="text-red-600"
                  style={{ opacity: errors.date && touched.date ? 1 : 0 }}
                >
                  {errors.date}
                </div>
              </div>
              <div className="grid">
                <label className="text-white" htmlFor="numberOfDiners">
                  Number of Diners
                </label>
                <Field
                  type="number"
                  id="numberOfDiners"
                  name="numberOfDiners"
                  required
                  min="1"
                  max="12"
                  className="bg-white rounded p-2"
                />
                <div
                  className="text-red-600"
                  style={{
                    opacity:
                      errors.numberOfDiners && touched.numberOfDiners ? 1 : 0,
                  }}
                >
                  {errors.numberOfDiners}
                </div>
              </div>
              <div className="grid">
                <label className="text-white" htmlFor="occasion">
                  Occasion
                </label>
                <Field
                  as="select"
                  id="occasion"
                  name="occasion"
                  className="bg-white rounded p-2"
                >
                  <option value="">Select an occasion</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Anniversary">Anniversary</option>
                </Field>
                <div
                  className="text-red-600"
                  style={{
                    opacity: errors.occasion && touched.occasion ? 1 : 0,
                  }}
                >
                  {errors.occasion}
                </div>
              </div>
              <div className="grid">
                <label className="text-white" htmlFor="time">
                  Time
                </label>
                <Field
                  as="select"
                  id="time"
                  name="time"
                  className="bg-white rounded p-2"
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select a time
                  </option>
                  {availableTimes.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </Field>
                <div
                  className="text-red-600"
                  style={{ opacity: errors.time && touched.time ? 1 : 0 }}
                >
                  {errors.time}
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="bg-yellow-400 text-black px-6 py-3 font-bold rounded-2xl mt-4"
            >
              Reserve!
            </button>
          </Form>
        )}
      </Formik>
      {successMessage && (
        <div className="text-white font-bold pt-4">{successMessage}</div>
      )}
    </section>
  );
};

export default Reservations;
