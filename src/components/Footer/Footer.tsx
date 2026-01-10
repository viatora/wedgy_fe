export default function Footer() {
  return (
    <footer className="w-screen bottom-0 flex justify-center items-center h-12 text-white z-50">
      <p className="text-center text-[2vw] sm:text-sm">
        &copy; {new Date().getFullYear()}{" "}
        <a href="https://runintandem.com" className="underline">
          Tandem Creative Dev
        </a>
        . All rights reserved.
      </p>
    </footer>
  );
}
