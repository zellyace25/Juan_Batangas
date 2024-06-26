import React from "react";
import { useNavigate } from "react-router-dom";
import DropdownOption from "../components/DropdownOption";

function ProgramAndServices({ setClickPrograms }) {
  const navigate = useNavigate();

  return (
    <div className="w-[200px] border-solid border-2 border-gray-300 flex flex-col justify-center gap-5 absolute top-10 right-96 bg-white rounded-bl-[20px] rounded-br-[20px] z-50 p-3">
      <DropdownOption
        program="Scholarships"
        handleClick={() => (
          navigate("/Scholarships"), setClickPrograms((prev) => !prev)
        )}
      />
      <DropdownOption
        program="HELP Program"
        handleClick={() => (
          navigate("/HELPProgram"), setClickPrograms((prev) => !prev)
        )}
      />
      <DropdownOption
        program="Social Welfare"
        handleClick={() => (
          navigate("/SocialWelfare"), setClickPrograms((prev) => !prev)
        )}
      />
    </div>
  );
}

export default ProgramAndServices;
