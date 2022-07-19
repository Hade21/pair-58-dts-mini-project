import React from "react";
import OutlinedButton from "../../atoms/outlinedButton";

const Footer = () => {
  return (
    <footer className="bg-hitam px-72 py-5 text-left flex flex-col gap-5">
      <div className="wrapper text-putih-op30% font-Inter font-normal text-s5 flex justify-between text-start">
        <div className="column-1">
          <ul className="flex flex-col gap-4">
            <li className="hover:text-putih cursor-pointer">
              Audio and Subtitles
            </li>
            <li className="hover:text-putih cursor-pointer">Media Center</li>
            <li className="hover:text-putih cursor-pointer">Security</li>
            <li className="hover:text-putih cursor-pointer">Contact us</li>
          </ul>
        </div>
        <div className="column-2">
          <ul className="flex flex-col gap-4">
            <li className="hover:text-putih cursor-pointer">
              Audio Description
            </li>
            <li className="hover:text-putih cursor-pointer">
              Investor Relations
            </li>
            <li className="hover:text-putih cursor-pointer">
              Legal Provisions
            </li>
          </ul>
        </div>
        <div className="column-3">
          <ul className="flex flex-col gap-4">
            <li className="hover:text-putih cursor-pointer">Help center</li>
            <li className="hover:text-putih cursor-pointer">Jobs</li>
            <li className="hover:text-putih cursor-pointer">
              Cookie Preferences
            </li>
          </ul>
        </div>
        <div className="column-4">
          <ul className="flex flex-col gap-4">
            <li className="hover:text-putih cursor-pointer">Gift Cards</li>
            <li className="hover:text-putih cursor-pointer">Terms of Use</li>
            <li className="hover:text-putih cursor-pointer">
              Corporate Information
            </li>
          </ul>
        </div>
      </div>
      <OutlinedButton type="submit" px="px-4" py="py-2">
        Service Code
      </OutlinedButton>
      <p className="font-Inter font-light text-s6 text-putih-op30%">
        &copy; 2022 Movies, All Right Reserved
      </p>
    </footer>
  );
};

export default Footer;
