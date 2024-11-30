const Header = () => {
    return(
        <>
        <div className="bg-[#D7F1F3] text-gray-800 py-4 px-8">
                  <div className="flex justify-between items-center">
                      <div className="p-3 text-center">
                          <h1 className="text-6xl font-normal font-alice">WELCOME TO SUKOON</h1>
                          <p className="text-2xl font-normal font-alice">Blessings to your Mind</p>
                      </div>
                      <div className="flex gap-12 font-alice font-normal text-[22px] mr-10 ">
                          <a href="#" className="hover:underline">Home</a>
                          {/* <a href="#" className="hover:underline">About</a> */}
                          <a href="#" className="hover:underline">Support</a>
                          <a href="#" className="hover:underline">Contact Us</a>
                      </div>
                  </div>
              </div>
        </>
    )
}
export default Header;