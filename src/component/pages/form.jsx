import React from "react";
import SelectComponent from "../fun/selectComponent";
import TextComponentImp from "../fun/imptextComponent";
import TextComponent from "../fun/textComponent";
import {
  country,
  guardians,
  bloodGroup,
  marital,
  religion,
  govtId,
  gender,
  states,
} from "../fun/data";
import ButtonComponent from "../fun/buttonComponent";
import DataTable from "../fun/dataTable";

const stateData = [...states];
const countryData = [...country];
const guardiansData = [...guardians];
const bloodData = [...bloodGroup];
const maritalData = [...marital];
const religionData = [...religion];
const govtData = [...govtId];
const genderData = [...gender];

const Home = () => {
  return (
    <div className="relative">
      <div className="pt-5 px-8 md:justify-start md:space-x-10">
        <h1 className="font-medium underline underline-offset-1">
          Personal Details
        </h1>
        <div className="block pt-1 md:justify-start lg:space-x-16  xl:space-x-20 lg:flex">
          <TextComponentImp Name="Name" Types="text" Placeholder="jhon" />
          <TextComponentImp
            Name="Date of birth or Age"
            Types="date"
            Placeholder=""
          />
          <SelectComponent Name="Sex" Options={genderData} />
          <SelectComponent Name="Govt Issued ID" Options={govtData} />
          <TextComponentImp Placeholder="XXXXXXXXX244" />
        </div>
      </div>
      <div className="px-8 md:justify-start md:space-x-10">
        <h1 className="font-medium underline underline-offset-1">
          Contact Details
        </h1>
        <div className="block pt-1 md:justify-start lg:space-x-16  xl:space-x-20 lg:flex">
          <TextComponentImp Name="Mobile" Types="tel" Placeholder="+91" />
          <SelectComponent Name="Guardian Details" Options={guardiansData} />
          <TextComponent Placeholder="guardian name" />
          <TextComponentImp
            Name="Email"
            Types="email"
            Placeholder="your@gmail.com"
          />
          <TextComponent
            Name="Emergency Contact"
            Types="tel"
            Placeholder="+91"
          />
        </div>
      </div>
      <div className="px-8 md:justify-start md:space-x-10">
        <h1 className="font-medium underline underline-offset-1">
          Address Details
        </h1>
        <div className="block py-1 md:justify-start lg:space-x-16  xl:space-x-20 lg:flex">
          <TextComponentImp Name="Address" Types="text" Placeholder="address" />
          <SelectComponent Name="State" Options={stateData} />
          <TextComponentImp
            Name="Pin Code"
            Types="tel"
            Placeholder="pin code"
          />
        </div>
      </div>
      <div className="lg:pt-5 px-8 md:justify-start md:space-x-10">
        <h1 className="font-medium underline underline-offset-1">
          Other Details
        </h1>
        <div className="block py-1 md:justify-start lg:space-x-16  xl:space-x-20 lg:flex">
          <TextComponent Name="Occupation" Types="text" Placeholder="employe" />
          <SelectComponent Name="Religion" Options={religionData} />
          <SelectComponent Name="Maritial Status" Options={maritalData} />
          <SelectComponent Name="Blood Group" Options={bloodData} />
        </div>
      </div>
      <div className="sm:space-x-20 text-right md:space-x-20 pr-40 py-4 space-x-20 sm:block space-y-10">
        <ButtonComponent
          Name="Cancel"
          class="text-white font-inter bg-red-500 hover:bg-red-700 rounded-md p-2"
        />
        <ButtonComponent
          Name="Submit"
          class="text-white font-inter bg-sky-500 hover:bg-sky-700 rounded-md p-2"
        />
      </div>
      {/* <DataTable /> */}
    </div>
  );
};

export default Home;
