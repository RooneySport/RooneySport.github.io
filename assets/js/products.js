// Datos de ejemplo para el catálogo
const products = [
    {
        id: 1,
        name: "Nike Air Max 270",
        brand: "Nike",
        price: 129.99,
        images: [
            "assets/images/JordanRetro1Low.jpeg",
            "assets/images/JordanBLoyalSpaceJam.jpeg",
            "assets/images/JordanBLoyal.jpeg"
        ],
        sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11],
        description: "Las Nike Air Max 270 se inspiran en dos iconos de Air: las Air Max 180 y las Air Max 93. Presentan la unidad Air más grande de Nike hasta la fecha en el talón para una experiencia de amortiguación increíble en cada paso. Este icónico calzado de estilo de vida para hombre combina la exagerada lengüeta en el talón y el patrimonio de las Air Max con un innovador diseño que lo convierte en un básico moderno para cada día."
    },
    {
        id: 2,
        name: "Adidas Ultraboost 21",
        brand: "Adidas",
        price: 149.99,
        images: [
            "assets/images/JordanRetro1Low.jpeg",
            "assets/images/JordanBLoyalSpaceJam.jpeg",
            "assets/images/JordanBLoyal.jpeg"
        ],
        sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        description: "Los Adidas Ultraboost 21 son la evolución de un icono, ahora con un 6% más de impulso en comparación con el Ultraboost 19. El diseño actualizado presenta una devolución de energía lineal refinada, un talón actualizado para apoyar tu tendón de Aquiles y un ajuste más cómodo. La parte superior Primeknit+ envuelve el pie con soporte dirigido y un poco de estiramiento para adaptarse a ti."
    },
    {
        id: 3,
        name: "Puma RS-X",
        brand: "Puma",
        price: 109.99,
        images: [
            "assets/images/JordanRetro1Low.jpeg",
            "assets/images/JordanBLoyalSpaceJam.jpeg",
            "assets/images/JordanBLoyal.jpeg"
        ],
        sizes: [7, 8, 9, 10, 11, 12],
        description: "El Puma RS-X reinventa el concepto de Running System (RS) de la marca. Con una estética chunky exagerada y detalles que capturan la esencia de la cultura pop y la nostalgia, este modelo audaz combina una forma bulbosa con capas de materiales, una mezcla de texturas y toques de color vibrantes. La entresuela de goma brinda una amortiguación excepcional."
    },
    {
        id: 4,
        name: "New Balance 574",
        brand: "New Balance",
        price: 89.99,
        images: [
            "assets/images/JordanRetro1Low.jpeg",
            "assets/images/JordanBLoyalSpaceJam.jpeg",
            "assets/images/JordanBLoyal.jpeg"
        ],
        sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11],
        description: "El New Balance 574 es un clásico atemporal que ha resistido la prueba del tiempo. Originalmente diseñado como un zapato de running versátil en 1988, se ha convertido en un ícono del estilo de vida por su versatilidad, comodidad y estilo. La entresuela ENCAP proporciona soporte y durabilidad, mientras que su diseño sencillo pero distintivo lo convierte en un calzado fácil de combinar con cualquier atuendo."
    },
    {
        id: 5,
        name: "Converse Chuck Taylor",
        brand: "Converse",
        price: 69.99,
        images: [
            "assets/images/JordanRetro1Low.jpeg",
            "assets/images/JordanBLoyalSpaceJam.jpeg",
            "assets/images/JordanBLoyal.jpeg"
        ],
        sizes: [6, 7, 8, 9, 10, 11, 12],
        description: "El Converse Chuck Taylor All Star es posiblemente el tenis más icónico de todos los tiempos. Desde su creación en 1917, se ha mantenido fiel a su diseño original con la parte superior de lona, el parche de tobillo distintivo y la suela de goma. Versátil y atemporal, es el calzado favorito de artistas, músicos, atletas y fanáticos de la moda por igual."
    },
    {
        id: 6,
        name: "Nike Blazer Mid",
        brand: "Nike",
        price: 99.99,
        images: [
            "assets/images/JordanRetro1Low.jpeg",
            "assets/images/JordanBLoyalSpaceJam.jpeg",
            "assets/images/JordanBLoyal.jpeg"
        ],
        sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11],
        description: "El Nike Blazer Mid es un diseño clásico de baloncesto que se ha convertido en un elemento básico del estilo urbano. Desde su debut en 1972, el Blazer ha evolucionado de la cancha a la calle con su silueta elegante y versátil. Presenta una parte superior de cuero duradero, un swoosh grande en el lateral y un diseño de caña media que ofrece soporte y un estilo inconfundible."
    },
    {
        id: 7,
        name: "Adidas Stan Smith",
        brand: "Adidas",
        price: 79.99,
        images: [
            "assets/images/JordanRetro1Low.jpeg",
            "assets/images/JordanBLoyalSpaceJam.jpeg",
            "assets/images/JordanBLoyal.jpeg"
        ],
        sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        description: "El Adidas Stan Smith es la definición misma del tenis clásico. Creado originalmente para el tenista homónimo en 1971, este modelo minimalista ha trascendido el tiempo con su diseño limpio y elegante. El Stan Smith cuenta con una parte superior de cuero premium, perforaciones en tres líneas, detalles en el talón y una silueta simple pero sofisticada que combina con todo."
    },
    {
        id: 8,
        name: "Puma Suede Classic",
        brand: "Puma",
        price: 74.99,
        images: [
            "assets/images/JordanRetro1Low.jpeg",
            "assets/images/JordanBLoyalSpaceJam.jpeg",
            "assets/images/JordanBLoyal.jpeg"
        ],
        sizes: [7, 8, 9, 10, 11],
        description: "El Puma Suede Classic ha sido un ícono del streetwear desde su lanzamiento en 1968. Con su distintiva parte superior de gamuza, la tira de cuero Puma en el lateral y su silueta elegante, el Suede ha sido adoptado por diferentes subculturas a lo largo de los años. Desde la pista de atletismo hasta el breakdance y la cultura hip-hop, este modelo versátil y duradero sigue siendo relevante después de décadas."
    }
];