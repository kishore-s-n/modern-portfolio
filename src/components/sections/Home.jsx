import { homeSectionContent } from "../../constants/constant"
const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center" id="home">
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right">{homeSectionContent.Heading}</h1>
      </div>
    </section>
  )
}

export default Home
