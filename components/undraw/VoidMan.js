import Image from "next/image";
import voidMan from "../../public/img/undraw/void.svg";

export default function VoidMan() {
  return (
    <Image
      src={voidMan}
      width={300}
      height={300}
      alt="Man starring into void"
    />
  );
}
