import AppStructureCart from "./AppStructureCart";
import { appDetails } from "../data/appDetails";
import appImg from "../Image/one-hr-app.png";

function AppStructure() {
  return (
    <div className="bg-gray-100">
      <div className="ml-16 mr-16 mt-10 mb-20 font-arial">
        <h1 className="text-4xl text-center p-8">
          One HR app, embraced by 2.5 <br /> Million Employees
        </h1>
        <div className="flex">
          <div className="w-1/2 p-10 flex justify-center">
            <img className="h-[550px]" src={appImg} alt="app-img" />
          </div>

          <div className="w-1/2  grid grid-cols-2 gap-6 p-10">
            {appDetails.map((item) => (
              <AppStructureCart key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppStructure;
