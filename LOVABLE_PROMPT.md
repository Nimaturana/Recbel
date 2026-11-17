# Contexto permanente para Lovable

Usa este texto como Project Knowledge o como primer prompt después de importar el ZIP.

---

Este proyecto es el sitio oficial de **Recbel Studios**, una empresa musical chilena que desarrolla artistas desde la idea hasta el lanzamiento. Sus servicios son desarrollo artístico, producción musical, mezcla, mastering, audiovisual y beats. También existe **Incubadora Recbel**, una línea de capacitación y acompañamiento tipo coaching musical.

Redes sociales oficiales:

- Instagram: `https://www.instagram.com/recbel.studios/`
- TikTok: `https://www.tiktok.com/@recbel.studios`
- Usuario público en ambas plataformas: `@recbel.studios`

## Dirección visual

- Preserva el logo entregado y su paleta: negro, blanco y rojo Recbel.
- La estética debe sentirse editorial, musical, intensa y contemporánea; no como una plantilla corporativa ni como un sitio genérico de SaaS.
- Usa tipografía grande, composiciones con contraste, líneas finas, ritmo visual y animaciones sobrias.
- Mantén mucho espacio negativo y jerarquía clara.
- Evita gradientes de colores ajenos a la marca, emojis, efectos neón exagerados, tarjetas redondeadas genéricas y fotografías de stock sin relación con Recbel.
- La web debe funcionar perfectamente en móvil y escritorio.

## Objetivo del sitio

1. Explicar en pocos segundos qué hace Recbel.
2. Mostrar todos sus servicios sin repetir mensajes.
3. Dar protagonismo propio a Incubadora Recbel.
4. Llevar a artistas interesados a agendar una reunión mediante Cal.com.
5. Construir confianza sin inventar clientes, cifras, testimonios, premios ni proyectos.

## Arquitectura y restricciones

- Mantén React + TypeScript + Vite mientras no exista una razón concreta para migrar.
- No agregues una base de datos, autenticación ni backend propio.
- La URL de Cal.com se lee desde `VITE_CALCOM_URL`.
- Los datos reales de contacto viven en `src/config.ts`.
- No publiques enlaces de contacto falsos.
- No elimines accesibilidad, estados de foco, `prefers-reduced-motion`, metadatos SEO ni diseño responsive.
- Conserva una dependencia mínima y evita componentes pesados para interacciones simples.

## Tono de texto

Habla en español de Chile, con seguridad y claridad. Recbel debe sonar creativo y cercano, no grandilocuente. Frase central: **“De la idea al lanzamiento.”**

Antes de agregar portafolio, artistas, testimonios, precios o integrantes del equipo, pide los datos reales.

---
