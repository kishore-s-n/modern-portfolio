import RevealOnScroll from "../RevealOnScroll"

export const Contact = () => {
  return (
    <section id="contact" className="min-h-screen min-w-screen flex items-center justify-c  py-20">
      <RevealOnScroll>
        <div className="px-4 md:w-150 w-120 ">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Get In Touch</h2>
          <form className="space-y-6 ">
            <div className="relative">
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/10"
                placeholder="Name..."
              />
            </div>

          </form>
        </div>
      </RevealOnScroll>
    </section>
  )
}
