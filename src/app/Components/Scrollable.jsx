export default function Steps() {
    return (
      <div className="min-h-screen mt-12 bg-green-400 p-10 flex justify-center items-center">
        <div className="w-[76%] justify-start gap-6 flex items-start ">
          <div className="w-full max-w-5xl py-12" style={{ position: 'sticky', top: '0' }}>
            <h1 className="text-[3.4rem] font-bold text-green-900">
              Get Started In Just <br />
              <span className="text-[3rem] font-extrabold text-white">3 simple Steps.</span>
            </h1>
            <div className="w-[80%]">
              <p className="text-[1.5rem] text-green-800 mt-2">
                Three simple steps to unlock the power of GreenBank and revolutionize your banking experience.
              </p>
            </div>
          </div>
  
          {/* Steps Section */}
          <div className="w-full max-w-5xl mt-10">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row bg-emerald-50 rounded-[3rem] p-6 mb-6 h-[47vh] w-[45rem] shadow-lg">
              <div className="mb-4 md:mb-0">
                <span className="inline-block bg-green-300 text-green-800 text-sm font-semibold px-3 py-1 rounded-full mb-2">
                  Step 1
                </span>
                <h2 className="text-2xl font-bold text-green-800 mb-2">Sign Up With GreenBank</h2>
                <p className="text-gray-700">
                  Create your GreenBank account and unlock a world of financial possibilities.
                </p>
              </div>
              <div className="flex justify-center items-center md:ml-auto">
                {/* Mockup of the sign-up card */}
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <img src="/signup-mockup.png" alt="Sign Up" className="w-full h-auto" />
                </div>
              </div>
            </div>
  
            {/* Step 2 */}
            <div className="flex flex-col md:flex-row bg-emerald-50 rounded-[3rem] p-6 mb-6 h-[47vh] w-[45rem] shadow-lg">
              <div className="mb-4 md:mb-0">
                <span className="inline-block bg-green-300 text-green-800 text-sm font-semibold px-3 py-1 rounded-full mb-2">
                  Step 2
                </span>
                <h2 className="text-2xl font-bold text-green-800 mb-2">Link Your Bank Account</h2>
                <p className="text-gray-700">
                  Easily link your existing bank account to enjoy seamless transactions.
                </p>
              </div>
              <div className="flex justify-center items-center md:ml-auto">
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <img src="/link-bank-mockup.png" alt="Link Bank Account" className="w-full h-auto" />
                </div>
              </div>
            </div>
  
            {/* Step 3 */}
            <div className="flex flex-col md:flex-row bg-emerald-50 rounded-[3rem] p-6 mb-6 h-[47vh] w-[45rem] shadow-lg">
              <div className="mb-4 md:mb-0">
                <span className="inline-block bg-green-300 text-green-800 text-sm font-semibold px-3 py-1 rounded-full mb-2">
                  Step 3
                </span>
                <h2 className="text-2xl font-bold text-green-800 mb-2">Start Using GreenBank</h2>
                <p className="text-gray-700">
                  Begin your GreenBank journey and experience the future of banking.
                </p>
              </div>
              <div className="flex justify-center items-center md:ml-auto">
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <img src="/start-using-mockup.png" alt="Start Using" className="w-full h-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  