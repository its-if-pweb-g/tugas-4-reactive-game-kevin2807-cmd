import Button from "../components/Button";

function Home() {
  const gotoQuiz = () => {
    window.location.href = "http://localhost:5173/Quiz";
  };
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center mt-36">
          <div className="mb-10 flex flex-col justify-center items-center">
            <img src="images/logo.png" alt="gambar-logo" width="350" />
            <h1 className="text-5xl font-bold text-primary">Quizzles</h1>
          </div>
          <div className="mb-14 flex flex-col justify-center items-center">
            <h2 className="text-3xl font-semibold text-white mt-4">
              Let's Play!
            </h2>
            <p className="text-lg font-semibold text-white">
              Play now and show your skill
            </p>
          </div>
          <Button
            type="button"
            onClick={gotoQuiz}
            className="bg-indigo-700 text-white rounded-lg p-4 text-xl font-semibold hover:bg-indigo-400 transition duration-300 ease-in-out"
          >
            Play Now
          </Button>
        </div>
      </div>
    </>
  );
}

export default Home;
