import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-accent px-8 py-4 text-center text-[0.625ram] opacity-75">
      <p>
        © 2023 Copyright <span className="font-semibold">Tech Store</span>
      </p>
      <p className="text-sm">
        Desenvolvido por{" "}
        <Link
          target="_blank"
          className="font-semibold"
          href={"https://ian-abreu.netlify.app/"}
        >
          Ian Abreu
        </Link>
      </p>
    </div>
  );
};

export default Footer;
