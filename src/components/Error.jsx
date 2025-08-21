import { LOGO } from "../constants/constants";

const Error = () => {
  return (
    <div className="w-screen h-screen bg-black">
      <div className="absolute text-white inset-0 border border-white p-4 flex flex-col gap-4 items-center justify-center">
        <img className="object-cover w-[700px] " src={LOGO} alt="logo" />
        <div className="flex flex-col gap-4 items-start">
          <h1 className=" text-2xl font-semibold">
            Whoops, Something went wrong..
          </h1>
          <h2 className=" text-xl font-bold">Unexpected error</h2>
          <p>
            There was an unexpected error.Please reload the page and try again.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Error;
