
import Head from "next/head";
import SidebarContainer from "../components/Sidebar/SidebarContainer";
export default function Home() {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=optional"
          rel="stylesheet"></link>
      </Head>
      <SidebarContainer />
    </div>
  );
}
