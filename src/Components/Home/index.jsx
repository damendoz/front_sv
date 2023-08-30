
//Mui


//components
import DrawerApp from '../Drawer'



//css
import './index.css'




export default function Home() {


  return (
    <section className='main__home'>
      <DrawerApp openDrawer={false}>
        <div className='home__container'>
          <h1 className='home__title'>Bienvenido a la aplicación de prueba</h1>
          <p className='home__text'>Esta aplicación es una prueba de concepto para la empresa de desarrollo
            de software
            <br />
            <a href='https://www.ingenieriacloud.com/' target='_blank' rel="noreferrer">
              Ingeniería Cloud
            </a>
          </p>
          <p className='home__text'>Esta aplicación está desarrollada con ReactJS y Material UI</p>
          <p className='home__text'>Para ver el código fuente de la aplicación,
            puedes visitar el repositorio en GitHub
          </p>
        </div>
      </DrawerApp>
    </section>
  )

}
