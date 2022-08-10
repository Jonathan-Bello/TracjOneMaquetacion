import React from "react";

// const Header = (props) => {
//     const windowSize = useWindowSize();
//     const [nav, setNav] = useState(false)

//     return windowSize > 752 ? (
//         <div className='header-tag'>
//             <div className='header-logo'>
//                 <Link to='/'>
//                     <img src={props.logo} alt="logo" />
//                 </Link>
//             </div>
//             <nav>
//                 <Link to={props.item1Page}>{props.item1}</Link>
//                 <Link to={props.item2Page}>{props.item2}</Link>
//                 <Link to={props.item3Page}>{props.item3}</Link>
//                 <Link to={props.item4Page}>{props.item4}</Link>
//             </nav>
//         </div>
//     ) : (
//         <div>
//         <div className ='header-tag'>
//             <div>
//                 <MenuOutlined className='menu-outlined' nav={nav} onClick={() => setNav(!nav)} />
//             </div>
//             <div className='header-logo'>
//                 <Link to='/'>
//                     <img src={props.logo} alt="logo" />
//                 </Link>
//             </div>
//         </div>
//         { nav ? (
//             <div className='mobile-nav'>
//                 <Link to={props.item1Page}>{props.item1}</Link>
//                 <Link to={props.item2Page}>{props.item2}</Link>
//                 <Link to={props.item3Page}>{props.item3}</Link>
//                 <Link to={props.item4Page}>{props.item4}</Link>
//             </div>
//         ) : null }
//         </div>
//     )
// }

const Header = () => {
  return (
    <header class="ed-header s-bg-grey s-py-2">
      <div class="ed-grid lg-grid-5">
        {/* <!-- Logo  --> */}
        <div class="s-cross-center s-main-center lg-main-start"></div>
        <nav class="nav lg-cols-4 s-cross-center ed-grid full">
          {/* <!--  Menú de navegación    --> */}
          <ul class="menu s-main-distribute lg-to-right s-mb-0 s-pl-0 s-py-1">
            {/* <!--   Item de menú. Contiene link e ícono     --> */}
            <li class="lg-mr-3">
              <a class="link s-column s-cross-center active" href="#">
                {/* <!--  El ícono sólo se mostrará en la versión móvil  --> */}
                <svg class="icon to-lg s-mb-0">
                  <use href="#home"></use>
                </svg>
                <span>Inicio</span>
              </a>
            </li>
            <li class="lg-mr-3">
              <a class="link s-column s-cross-center" href="#">
                <svg class="icon to-lg s-mb-0">
                  <use href="#studies"></use>
                </svg>
                <span>Estudios</span>
              </a>
            </li>
            <li class="lg-mr-3">
              <a class="link s-column s-cross-center" href="#">
                <svg class="icon to-lg s-mb-0">
                  <use href="#courses"></use>
                </svg>
                <span>Cursos</span>
              </a>
            </li>
            <li>
              <a class="link s-column s-cross-center" href="#">
                <svg class="icon to-lg s-mb-0">
                  <use href="#notes"></use>
                </svg>
                <span>Notas</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
