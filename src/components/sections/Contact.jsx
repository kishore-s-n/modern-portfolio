import emailjs from "emailjs-com";
import { useState } from "react";
import RevealOnScroll from "../RevealOnScroll";
export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_API
      )
      .then((res) => {
        alert("Message sent");

        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Something went worng please try again later."));
  };
  return (
    <section
      id='contact'
      className='min-h-screen min-w-screen flex items-center justify-center  py-20'>
      <RevealOnScroll>
        <div className='px-4 md:w-150 w-100'>
          <h2 className='text-5xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent text-center'>
            Get In Touch
          </h2>
          <form className='space-y-6 ' onSubmit={handleSubmit}>
            <div className='relative'>
              <input
                type='text'
                name='name'
                id='name'
                value={formData.name}
                required
                className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/10'
                placeholder='Name...'
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className='relative'>
              <input
                type='email'
                name='email'
                id='email'
                value={formData.email}
                required
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/10'
                placeholder='Example@gmail.com'
              />
            </div>

            <div className='relative'>
              <textarea
                name='message'
                id='message'
                rows={5}
                value={formData.message}
                required
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/10'
                placeholder='Let your imaginations unleashed...'
              />
            </div>
            <button
              type='submit'
              className='w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] '>
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
