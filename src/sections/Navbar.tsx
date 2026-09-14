import NavlinkContainer from "@/components/NavLinkContainer";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";

export default function Navbar() {
  return (
    <header className="w-full bg-transparent">
      <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
        
        <div className="navbar-start flex items-center gap-2">
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle p-0"
              aria-label="Open Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            <div
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-50 p-4 shadow-xl bg-white rounded-2xl w-64 border border-gray-100"
            >
              <NavlinkContainer isMobile={true} />
            </div>
          </div>

          <div className="bg-white px-4 py-2 sm:px-6 rounded-xl border border-gray-100 shadow-sm font-bold text-orange-500 tracking-wider text-sm sm:text-base">
            LOGO
          </div>
        </div>

        <div className="navbar-center hidden lg:flex lg:items-center lg:justify-center">
          <NavlinkContainer isMobile={false} />
        </div>

        <div className="navbar-end flex items-center gap-2 sm:gap-4">
          <SecondaryButton label="Sign In" />
          <PrimaryButton label="Sign Up" />
        </div>
        
      </div>
    </header>
  );
}