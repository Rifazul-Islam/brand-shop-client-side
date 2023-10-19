
const Footer = () => {
return (
 <div className="mt-10">
       <footer className="footer p-10 bg-base-200 text-base-content">
  <aside>
    <img className="w-20 h-14" src="https://i.ibb.co/hy3q67S/logo1.png" alt="" />
    <p>AutomotiveIndustries Ltd.<br/>Providing reliable tech since 1992</p>
  </aside> 
  <nav>
    <header className="footer-title">Brand</header> 
    <a className="link link-hover">Toyota</a> 
    <a className="link link-hover">Ford</a> 
    <a className="link link-hover">BMW</a> 
    <a className="link link-hover">Tesla</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">Tesla</a> 
    <a className="link link-hover">BMW</a> 
    <a className="link link-hover">Honda</a> 
    <a className="link link-hover">Ford</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>                                   
 </div>
);
};

export default Footer;