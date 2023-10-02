import React from 'react'

  const stats = [
    { name: 'Socios arquitectos', value: '3' },
    { name: 'Año de establecimiento', value: '2008' },
    { name: 'Años de experiencia', value: '15' }
    
  ]

const About = () => {
  return (
    <section className="relative isolate overflow-hidden bg-gray-700 py-24 sm:py-32 mt-20 px-2">      
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >        
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >        
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto md:w-8/12 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white">Quiénes somos</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
          Desde hace 15 años nos especializamos en el desarrollo de Proyectos residenciales, industriales, comerciales e institucionales en la Provincia de Córdoba, Argentina.<br></br>Hemos dirigido una amplia variedad de proyectos de Obra Pública y Privada, tales como Centros de Salud, Hospitales Municipales, escuelas, clubes, edificios corporativos, locales comerciales y viviendas unifamiliares, múltiples y Planes Sociales.<br></br>Nuestro compromiso es brindar soluciones a nuestros clientes, manteniendo respeto por el entorno y el medio ambiente que nos rodea.
            
          </p>
        </div>
        <div className="mx-auto mt-10 text-center rounded-3xl bg-gray-500 lg:max-w-3xl">
          
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse py-6 lg:py-8">
                <dt className="text-sm leading-7 text-neutral-100 font-semibold uppercase">{stat.name}</dt>
                <dd className="text-3xl font-bold leading-9 tracking-tight text-orange-300">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

export default About
