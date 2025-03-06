import Logo from "@/app/assets/Logo.png";
import Image from "next/image";

const LogoComponent = () => {
    return ( 
    <>
        <Image src={Logo} alt="Logo" width={100} height={100} />
    </> );
}
 
export default LogoComponent;