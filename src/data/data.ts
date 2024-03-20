interface Feature {
  id: number
  title: string
  content: string
}

export const features: Feature[] = [
  {
    id: 0,
    title: 'Componentes',
    content:
      'React está basado en la componetización de la UI. La interfaz se divide en componentes independientes, que contienen su propio estado. Cuando el estado de un componente cambia, React vuelve a renderizar la interfaz.'
  },
  {
    id: 1,
    title: 'Virtual DOM',
    content:
      'React usa un DOM virtual para renderizar los componentes. El DOM virtual es una representación en memoria del DOM real. Cuando el estado de un componente cambia, React vuelve a renderizar la interfaz. En lugar de modificar el DOM real, React modifica el DOM virtual y, a continuación, compara el DOM virtual con el DOM real. De esta forma, React sabe qué cambios se deben aplicar al DOM real.'
  },
  {
    id: 2,
    title: 'Declarativo',
    content:
      'React es declarativo, lo que significa que no se especifica cómo se debe realizar una tarea, sino qué se debe realizar. Esto hace que el código sea más fácil de entender y de mantener.'
  },
  {
    id: 3,
    title: 'Unidireccional',
    content:
      'React es unidireccional, lo que significa que los datos fluyen en una sola dirección. Los datos fluyen de los componentes padres a los componentes hijos.'
  },
  {
    id: 4,
    title: 'Universal',
    content:
      'React se puede ejecutar tanto en el cliente como en el servidor. Además, puedes usar React Native para crear aplicaciones nativas para Android e iOS.'
  }
]
