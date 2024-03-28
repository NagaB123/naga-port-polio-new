import Topbar from "../app/components/Topbar";
import MainHome from "../app/components/MainHome";
import AboutMe from "../app/components/AboutMe";
import Project from "../app/components/Project";
import ContactMe from "../app/components/ContactMe";
import Skills from "../app/components/Skills";

export default function Home() {
  return (
    <>
      <Topbar></Topbar>
      <MainHome></MainHome>
      <AboutMe></AboutMe>
      <Project></Project>
      <ContactMe></ContactMe>
      <Skills></Skills>
    </>
  );
}
