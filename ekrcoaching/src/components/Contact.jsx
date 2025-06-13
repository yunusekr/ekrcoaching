import React, { useEffect } from "react";
import "../cssfiles/contact.css";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import phone from "../assets/phone-Photoroom.png";

function Contact({ datas }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const sendEmail = (data) => {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      message: data.message,
    };

    emailjs
      .send(
        "service_5gzvuth", // EmailJS Service ID
        "template_7spvwk5", // EmailJS Template ID
        templateParams,
        "aCDj-FKcct0qfo1by" // EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  const onSubmit = (data, event) => {
    event.preventDefault();

    if (Object.keys(errors).length === 0) {
      console.log(data);
      sendEmail(data);

      const contactElement = document.querySelector(".contact");
      if (contactElement) {
        contactElement.classList.add("sent");
        setTimeout(() => {
          contactElement.classList.remove("sent");
          reset();
        }, 4000);
      }
    }
  };

  return (
    <div className="super-container">
      <div className="containerr contact">
        <span className="mail"></span>

        <form className="contact-form " onSubmit={handleSubmit(onSubmit)}>
          <div className="top-heading">
            <p className="text-white md:text-[60px] text-[35px]  text-center font-[Lora]">
              {datas.Contactcontactus}
            </p>
          </div>
          <div className="block">
            <div className="field contact-name h-24">
              <label style={{ fontFamily: "Playfair Display, serif" }}>
                {datas.ContactName}
              </label>
              <input
                style={{ fontFamily: "Playfair Display, serif" }}
                type="text"
                {...register("name", {
                  required: datas.Errormessagename,
                })}
              />
              {errors.name && (
                <span
                  style={{ fontFamily: "Playfair Display, serif" }}
                  className="text-red-500 text-sm "
                >
                  {errors.name.message}
                </span>
              )}
            </div>

            <div className="field contact-email pr-4 h-24">
              <label style={{ fontFamily: "Playfair Display, serif" }}>
                {datas.ContactEmail}
              </label>
              <input
                style={{ fontFamily: "Playfair Display, serif" }}
                type="email"
                {...register("email", {
                  required: datas.Errormessageemail,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: datas.Errormessageemail2,
                  },
                })}
              />
              {errors.email && (
                <span
                  style={{ fontFamily: "Playfair Display, serif" }}
                  className="text-red-500 text-sm "
                >
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="field contact-phone h-24">
              <label style={{ fontFamily: "Playfair Display, serif" }}>
                {datas.ContactPhone}
              </label>
              <input
                style={{ fontFamily: "Playfair Display, serif" }}
                type="tel"
                {...register("phone", {
                  required: datas.Errormessagephone,
                  pattern: {
                    value: /^[0-9]+$/,
                    message: datas.Errormessagephone2,
                  },
                })}
              />
              {errors.phone && (
                <span
                  style={{ fontFamily: "Playfair Display, serif" }}
                  className="text-red-500 text-sm  "
                >
                  {errors.phone.message}
                </span>
              )}
            </div>
          </div>

          <div className="field contact-message h-80 relative">
            <label style={{ fontFamily: "Playfair Display, serif" }}>
              {datas.ContactMessage}
            </label>
            <textarea
              style={{ fontFamily: "Playfair Display, serif" }}
              {...register("message", {
                required: datas.Errormessagemessage,
              })}
            />
            {errors.message && (
              <span
                style={{ fontFamily: "Playfair Display, serif" }}
                className="text-red-500  text-sm "
              >
                {errors.message.message}
              </span>
            )}
          </div>

          <div className="button-container">
            <button className="send font-[Lora] slideright" type="submit">
              <div className="svg-wrapper-1">
                <div className="svg-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                    ></path>
                  </svg>
                </div>
              </div>
              <span>{datas.ContactSend}</span>
            </button>
          </div>
        </form>
        <div className=" flex flex-col justify-center items-center gap-7 ">
          <div className="flex gap-5 w-full items-center justify-center">
            <i className="fa-solid fa-envelope text-blue-300 lg:text-[5vw] text-[10vw] "></i>
            <p
              className="lg:text-[3vw] text-[5vw] text-white"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              kurumsal@ekracademy.com
            </p>
          </div>
          <div className="flex gap-5 w-full items-center justify-center">
            <i className="fa-solid fa-location-dot text-red-300 lg:text-[5vw] text-[10vw]"></i>
            <p
              className="lg:text-[3vw] text-[5vw] text-white"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Ulukent-İzmir 35620
            </p>
          </div>
          <div className="flex gap-5 w-full items-center justify-center">
            <i className="fa-solid fa-phone text-green-300 lg:text-[5vw] text-[10vw]"></i>
            <p
              className="lg:text-[3vw] text-[5vw] text-white"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              0533 325 10 89 <br />
              0533 899 10 89
            </p>
          </div>
        </div>
        <div
          className="h-[80vh] w-full bg-center bg-no-repeat lg:flex-col justify-center items-center text-white gap-20 hidden"
          style={{
            backgroundImage: `url(${phone})`,
            backgroundSize: "contain",
          }}
        >
          <div className="flex flex-col items-center">
            <i className="fa-solid fa-envelope text-blue-300 text-[3.5vw]"></i>
            <p
              className="text-[1vw]"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              kurumsal@ekracademy.com
            </p>
          </div>
          <div className="flex flex-col items-center">
            <i className="fa-solid fa-phone text-green-300 text-[3.5vw]"></i>
            <p
              className="text-[1vw]"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              0533 325 10 89 <br />
              0533 899 10 89
            </p>
          </div>
          <div className="flex flex-col items-center">
            <i className="fa-solid fa-location-dot text-red-300 text-[3.5vw]"></i>
            <p
              className="text-[1vw]"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Ulukent-İzmir 35620
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
