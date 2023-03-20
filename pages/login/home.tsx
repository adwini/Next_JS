import Link from "next/link";

function HomePage() {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">Practice rani heheheheh</p>
            {/* The button to open modal */}
            <label htmlFor="my-modal-4" className="btn btn-primary">
              Ayaw tusloka
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
              <label className="modal-box relative" htmlFor="">
                <h3 className="text-lg font-bold"> Ay Di Motou!</h3>
                <p className="py-4">Ayaw Lage Pada!</p>
              </label>
            </label>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
