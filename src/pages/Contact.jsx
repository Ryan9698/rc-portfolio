import ContactForm from "../components/FormComponent";

export default function Contact() {
  return (
    <div className="contactInfo p-2">
      <h1 className="text-center m-4">Contact Me</h1>
      <p className="text-center mb-4">
        Hey there! If you would like to reach me about a project or general questions,
        please fill out the fields below and I will contact you as soon as possible.
      </p>
      <ContactForm />
    </div>
  );
}
