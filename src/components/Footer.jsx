import logoFooter from '../assets/logo-footer.svg';

export const Footer = () => {
  return (
    <footer className="bg-[#262522] rounded-3xl px-10 py-6 flex items-center mt-auto">
      <a href="/">
        <img src={logoFooter} alt="logo footer" />
      </a>

      <a
        href="https://github.com/shchipina/meal-mate"
        className="text-amber-50 font-medium"
        target='_blank'
      >
        GitHub
      </a>
    </footer>
  );
}