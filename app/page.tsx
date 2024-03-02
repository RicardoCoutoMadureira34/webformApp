import Image from "next/image";
import SideNavigationBar from "./components/sideNavigationBar";

export default function Home() {
  return (
    <SideNavigationBar>
      <div className="pt-10 px-80 py-10">
        <h1>Gestao de Seguros</h1>
        <p>HOME PAGE</p>
      </div>
    </SideNavigationBar>
  );
}
