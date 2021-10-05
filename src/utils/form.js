const Template = {
  title: 'Completa los datos de tu inmueble:',
  fields: [
    {
      title: 'Nombres y Apellidos',
      type: 'text',
      name: 'surnames',
      validationProps: {
        required: 'Nombre y Apellido Requerido',
      },
    },
    {
      title: 'Email',
      type: 'email',
      name: 'email',
      validationProps: {
        required: 'Correo electronico Requerido',
      },
    },
    {
      title: 'Direccion',
      type: 'text',
      name: 'address',
      validationProps: {
        required: 'Direccion Requerido',
      },
    },
    {
      title: 'Número de piso',
      type: 'number',
      name: 'floorNumber',
      validationProps: {
        required: 'Número de piso Requerido',
        min: 0,
        max: 50,
      },
    },
    {
      title: 'Zona BBQ',
      type: 'checkbox',
      value: 1,
      name: 'zonebbq',
    },
    {
      title: 'Salón comunal',
      type: 'checkbox',
      value: 2,
      name: 'communalliving',
    },
    {
      title: 'Parque de juegos',
      type: 'checkbox',
      value: 3,
      name: 'gameparq',
    },
    // {
    //   title: 'Portfolio Link',
    //   type: 'url',
    //   name: 'portfolio_link',
    //   dynamic: {
    //     field: 'include_portfolio',
    //     value: true,
    //   },
    // },
    {
      title: '¿Cuánto crees que vale tu apartamento?',
      type: 'currency',
      name: 'apartmentvalue',
    },
  ],
};

export default Template;
