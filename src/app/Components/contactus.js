"use client";


// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from "react";
import { message } from "antd";
import { useForm, ValidationError } from "@formspree/react";

function ContactUs() {
  const [messageApi, contextHolder] = message.useMessage();
  const key = "updatable";

  // Function to display success message
  const showSuccessMessage = () => {
    messageApi.success({
      content: "Message has been sent! Wait for the reply 😊",
      duration: 3, // Duration in seconds
      key: key,
    });
  };

  // Function to display error message
  const showErrorMessage = () => {
    messageApi.error({
      content: "Oops! Something went wrong. Please try again later.",
      duration: 3, // Duration in seconds
      key: key,
    });
  };

  const [state, handleSubmit] = useForm("xjvngypq");

  // Handle form submission
  const onSubmit = async (e) => {
    e.preventDefault();
    const result = await handleSubmit(e);
    if (result instanceof Error) {
      showErrorMessage();
    } else {
      showSuccessMessage();
    }
  };

  return (
    <div className="bg-maincolor-50 rounded-lg lg:mx-96 lg:self-center flex flex-row justify-around sm:flex-col sm:gap-3 sm:m-14 sm:mx-5 sm:p-3">
      <div>
        <h1 className="text-white text-6xl sm:text-3xl sm:text-center mb-8">
          Let&apos;s Connect
        </h1>
      </div>
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-5 align-middle items-center"
      >
        <input
          required
          id="fullname"
          type="text"
          name="fullname"
          placeholder="Enter Full Name"
          className="p-3 rounded-lg"
        />
        <ValidationError prefix="FullName" field="fullname" errors={state.errors} />
        <input
          required
          id="email"
          type="email"
          name="email"
          placeholder="Enter Email"
          className="p-3 rounded-lg"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          required
          id="message"
          name="message"
          placeholder="Enter Message"
          className="p-3 rounded-lg"
          rows={5}
          cols={23}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          type="submit"
          disabled={state.submitting}
          className="border-1 bg-green-600 p-2 px-6 text-maincolor-200 text-lg rounded-lg font-bold "
        >
          Send
        </button>
      </form>
      {contextHolder}
    </div>
  );
}

export default ContactUs;

