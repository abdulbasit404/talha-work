import Image from "next/image";
import Navbar from "./Navbar/Page";
import FindJobs from "./Find_Jobs/Page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div>
      <Navbar />
      <FindJobs />
    </div>
  );
}
