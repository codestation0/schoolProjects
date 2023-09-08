import { HiChevronRight } from "react-icons/hi";
import { MdSchool } from "react-icons/md";
import Container from "../Container";

const Footer = () => {
  return (
    <footer className="bg-zinc-700 text-gray pt-10">
      <Container>
        <div className="grid gap-8 md:gap-0 sm:grid-cols-2 md:grid-cols-3">
          <div className="text-base">
            <h1 className="text-lg font-bold mb-2">যোগাযোগের তথ্য</h1>
            <ul className="text-zinc-200 space-y-2">
              <li>ফরিদপুর জিলা স্কুল, ফরিদপুর</li>
              <li>Mujib Sarak. Faridpur</li>
              <li>ফোনঃ +88 4554-63073</li>
              <li>ই-মেইলঃ xyz@yahoo.com</li>
            </ul>
          </div>

          <div className="text-base ">
            <h1 className="text-lg font-bold mb-2">গুরুত্বপূর্ণ লিংক</h1>
            <ul className="text-sm space-y-2 text-zinc-200">
              <li className="flex items-center hover:underline font-thin cursor-pointer">
                <HiChevronRight size={20} />
                <span>শিক্ষা মন্ত্রণালয়</span>
              </li>
              <li className="flex items-center hover:underline font-thin cursor-pointer">
                <HiChevronRight size={20} />
                <span>ঢাকা শিক্ষা বোর্ড</span>
              </li>
              <li className="flex items-center hover:underline font-thin cursor-pointer">
                <HiChevronRight size={20} />
                <span>শিক্ষা মন্ত্রণালয়</span>
              </li>
              <li className="flex items-center hover:underline font-thin cursor-pointer">
                <HiChevronRight size={20} />
                <span>ঢাকা শিক্ষা বোর্ড</span>
              </li>
            </ul>
          </div>

          <div>
            <h1 className="text-lg font-bold mb-2">পুরস্কার</h1>
            <p className="flex items-center gap-1 text-zinc-200">
              <MdSchool size={20} />
              <span className="text-sm">
                মাননীয় প্রধানমন্ত্রীর ডক্টর অব লিটারেচার (ডি-লিট) ডিগ্রি অর্জন।
              </span>
            </p>
          </div>
        </div>
      </Container>
      <p className="text-center py-4 bg-zinc-800 mt-10">
        &copy;Copyright {new Date().getFullYear()}. All rights reserved by
        Redwan islam
      </p>
    </footer>
  );
};

export default Footer;
