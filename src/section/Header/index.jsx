import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
    return (
      <div>
        <div className="flex flex-col gap-2">
          <div className="text-3xl text-primaryTitle font-semibold">
            Nattapath Kunpom
          </div>
          <div className="text-primaryContent font-semibold">Programmer</div>
          <div className="text-sm w-5/6">Caption</div>
          <div className="mt-4">
            <a href="#" target="blank">
              <span className="rounded-md bg-primaryTitle text-gray-200 px-3 py-2">
                View Resume
                <span className="rotate-90 inline-block ml-2">
                  <FontAwesomeIcon
                    className="animate-bounce"
                    icon={faArrowDown}
                  />
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default Header;