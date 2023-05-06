import React from 'react'

const Testimonials = () => {
  return (
    <div class="py-16 white scroll-smooth">  
    <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <h2 class="mb-12 text-center text-2xl text-gray-900 font-bold md:text-4xl">Lo que dicen nuestros usuarios</h2>
        <div class="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
          <div class="row-span-2 p-6 border border-gray-100 rounded-xl bg-gray-50 text-center sm:p-8">
            <div class="h-full flex flex-col justify-center space-y-4">
              <img class="w-20 h-20 mx-auto rounded-full" src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/second_user.webp" alt="user avatar" height="220" width="220" loading="lazy" />
              <p class="text-gray-600 md:text-xl"> <span class="font-serif">"</span>Me uní a Codejuniors buscando un cambio de carrera en el campo de la tecnología . La plataforma me brindó múltiples oportunidades de trabajo en una variedad de industrias y empresas, lo que me permitió encontrar el trabajo perfecto para mí.<span class="font-serif">"</span></p>
              <div>
                  <h6 class="text-lg font-semibold leading-none">Ana López</h6>
                  <span class="text-xs text-gray-500">Frontend Developer</span>
              </div>
            </div>
          </div>

          <div class="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
            <img class="w-20 h-20 mx-auto rounded-full" src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/first_user.webp" alt="user avatar" height="220" width="220" loading="lazy" />
            <div class="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
              <p class="text-gray-600"> <span class="font-serif">"</span>Como desarrollador junior recién graduado, no sabía por dónde empezar . Codejuniors me ayudó a descubrir una amplia variedad de vacantes disponibles en múltiples empresas . Gracias a la plataforma, encontré mi trabajo soñado en una empresa de tecnología líder en la industria".<span class="font-serif">"</span></p>
              <div>
                  <h6 class="text-lg font-semibold leading-none">Carlos Martínez</h6>
                  <span class="text-xs text-gray-500">Backend Developer</span>
              </div>
            </div>
          </div>
          <div class="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
            <img class="w-20 h-20 mx-auto rounded-full" src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/third_user.webp" alt="user avatar" height="220" width="220" loading="lazy" />
            <div class="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
              <p class="text-gray-600"> <span class="font-serif">"</span>Gracias a Codejuniors, pude conseguir mi primer trabajo como desarrollador junior en una empresa de tecnología de renombre. La plataforma fue fácil de usar y me permitió postular a múltiples vacantes de manera rápida y sencilla.<span class="font-serif">"</span></p>
              <div>
                  <h6 class="text-lg font-semibold leading-none">Juan Pérez</h6>
                  <span class="text-xs text-gray-500">Full Stack Developer</span>
              </div>
            </div>
          </div>
        </div>
    </div>
</div>
  )
}

export default Testimonials
